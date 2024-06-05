/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.resources.types.errors;

import com.seed.examples.core.SeedExamplesApiError;

public final class SeedExamplesNotFoundError extends SeedExamplesApiError {
    /**
     * The body of the response that triggered the exception.
     */
    private final String body;

    public SeedExamplesNotFoundError(String body) {
        super("NotFoundError", 404, body);
        this.body = body;
    }

    /**
     * @return the body
     */
    @Override
    public String body() {
        return this.body;
    }
}
