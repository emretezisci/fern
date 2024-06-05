/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.mixedCase.resources.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.seed.mixedCase.core.ClientOptions;
import com.seed.mixedCase.core.ObjectMappers;
import com.seed.mixedCase.core.RequestOptions;
import com.seed.mixedCase.core.SeedMixedCaseApiError;
import com.seed.mixedCase.core.SeedMixedCaseError;
import com.seed.mixedCase.resources.service.requests.ListResourcesRequest;
import com.seed.mixedCase.resources.service.types.Resource;
import java.io.IOException;
import java.util.List;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class ServiceClient {
    protected final ClientOptions clientOptions;

    public ServiceClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public Resource getResource(String resourceId) {
        return getResource(resourceId, null);
    }

    public Resource getResource(String resourceId, RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("resource")
                .addPathSegment(resourceId)
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        OkHttpClient client = clientOptions.httpClient();
        if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
            client = clientOptions.httpClientWithTimeout(requestOptions);
        }
        try (Response response = client.newCall(okhttpRequest).execute()) {
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), Resource.class);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedMixedCaseApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedMixedCaseError("Network error executing HTTP request", e);
        }
    }

    public List<Resource> listResources(ListResourcesRequest request) {
        return listResources(request, null);
    }

    public List<Resource> listResources(ListResourcesRequest request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("resource");
        httpUrl.addQueryParameter("page_limit", Integer.toString(request.getPageLimit()));
        httpUrl.addQueryParameter("beforeDate", request.getBeforeDate());
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json");
        Request okhttpRequest = _requestBuilder.build();
        OkHttpClient client = clientOptions.httpClient();
        if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
            client = clientOptions.httpClientWithTimeout(requestOptions);
        }
        try (Response response = client.newCall(okhttpRequest).execute()) {
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(
                        responseBody.string(), new TypeReference<List<Resource>>() {});
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedMixedCaseApiError(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class));
        } catch (IOException e) {
            throw new SeedMixedCaseError("Network error executing HTTP request", e);
        }
    }
}
