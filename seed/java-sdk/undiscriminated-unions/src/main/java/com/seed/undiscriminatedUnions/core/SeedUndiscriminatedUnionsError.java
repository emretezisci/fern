/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.undiscriminatedUnions.core;

/**
 * This class serves as the base exception for all errors in the SDK.
 */
public class SeedUndiscriminatedUnionsError extends RuntimeException {
    public SeedUndiscriminatedUnionsError(String message) {
        super(message);
    }

    public SeedUndiscriminatedUnionsError(String message, Exception e) {
        super(message, e);
    }
}
