<?php

namespace App\Traits;

trait ApiResponse
{
    protected function success($data = null, string $message = '', int $code = 200)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data'    => $data,
        ], $code);
    }


    protected function error(string $message = '', array $errors = [], int $code = 422, ?string $errorCode = null)
    {
        $response = [
            'success' => false,
            'message' => $message,
            'errors'  => $errors,
        ];

        if ($errorCode) {
            $response['error_code'] = $errorCode;
        }

        return response()->json($response, $code);
    }
}
