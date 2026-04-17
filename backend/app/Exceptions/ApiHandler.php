<?php

namespace App\Exceptions;

use Illuminate\Http\Request;
use Throwable;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use App\Traits\ApiResponse;
use Illuminate\Support\Facades\Log;

class ApiHandler
{
    use ApiResponse;

    public function __invoke(Throwable $e, Request $request)
    {
        if ($request->is('api/*') || $request->expectsJson()) {

            // Handle custom business exceptions
            if ($e instanceof BusinessException) {
                Log::warning('Business exception occurred', [
                    'error_code' => $e->getErrorCode(),
                    'message' => $e->getMessage(),
                    'user_id' => auth()->id(),
                    'url' => $request->fullUrl(),
                    'method' => $request->method(),
                ]);

                return $this->error(
                    $e->getMessage(),
                    [],
                    $e->getHttpStatus(),
                    $e->getErrorCode()
                );
            }

            if ($e instanceof ModelNotFoundException || $e instanceof NotFoundHttpException) {
                return $this->error('the resource was not found', [], 404, 'RESOURCE_NOT_FOUND');
            }

            if ($e instanceof MethodNotAllowedHttpException) {
                return $this->error('the method is not allowed', [], 405, 'METHOD_NOT_ALLOWED');
            }

            if ($e instanceof AuthenticationException) {
                return $this->error('you must be logged in first', [], 401, 'UNAUTHENTICATED');
            }

            if ($e instanceof AuthorizationException) {
                return $this->error('you are not authorized to perform this action', [], 403, 'FORBIDDEN');
            }

            if ($e instanceof ThrottleRequestsException) {
                return $this->error('you have sent too many requests, please try again later', [], 429, 'TOO_MANY_REQUESTS');
            }

            if ($e instanceof ValidationException) {
                return $this->error(
                    'validation failed',
                    $e->errors(),
                    422,
                    'VALIDATION_FAILED'
                );
            }

            // Log unexpected errors
            Log::error('Unexpected error occurred', [
                'exception' => get_class($e),
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'user_id' => auth()->id(),
                'url' => $request->fullUrl(),
            ]);

            return $this->error('an error occurred on the server, please try again later', [], 500, 'SERVER_ERROR');
        }

        return null;
    }
}
