<?php

namespace App\Exceptions;

use Exception;

abstract class BusinessException extends Exception
{
    /**
     * Get the machine-readable error code for this exception.
     */
    abstract public function getErrorCode(): string;

    /**
     * Get the HTTP status code for this exception.
     */
    abstract public function getHttpStatus(): int;

    /**
     * Create a new business exception instance.
     */
    public function __construct(string $message = '', int $code = 0, ?\Throwable $previous = null)
    {
        parent::__construct($message ?: $this->getDefaultMessage(), $code, $previous);
    }

    /**
     * Get the default message for this exception.
     */
    protected function getDefaultMessage(): string
    {
        return 'A business rule violation occurred';
    }
}
