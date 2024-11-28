/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.pathParameters;

import com.seed.pathParameters.core.ClientOptions;
import com.seed.pathParameters.core.Environment;

public final class SeedPathParametersClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private Environment environment;

    public SeedPathParametersClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    public SeedPathParametersClient build() {
        clientOptionsBuilder.environment(this.environment);
        return new SeedPathParametersClient(clientOptionsBuilder.build());
    }
}
