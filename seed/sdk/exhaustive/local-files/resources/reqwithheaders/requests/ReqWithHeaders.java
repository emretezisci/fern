/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.fern.sdk.resources.reqwithheaders.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fern.sdk.core.ObjectMappers;
import java.lang.Object;
import java.lang.Override;
import java.lang.String;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = ReqWithHeaders.Builder.class
)
public final class ReqWithHeaders {
  private final String xTestServiceHeader;

  private final String xTestEndpointHeader;

  private final String body;

  private final Map<String, Object> additionalProperties;

  private ReqWithHeaders(String xTestServiceHeader, String xTestEndpointHeader, String body,
      Map<String, Object> additionalProperties) {
    this.xTestServiceHeader = xTestServiceHeader;
    this.xTestEndpointHeader = xTestEndpointHeader;
    this.body = body;
    this.additionalProperties = additionalProperties;
  }

  @JsonProperty("X-TEST-SERVICE-HEADER")
  public String getXTestServiceHeader() {
    return xTestServiceHeader;
  }

  @JsonProperty("X-TEST-ENDPOINT-HEADER")
  public String getXTestEndpointHeader() {
    return xTestEndpointHeader;
  }

  @JsonProperty("body")
  public String getBody() {
    return body;
  }

  @Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof ReqWithHeaders && equalTo((ReqWithHeaders) other);
  }

  @JsonAnyGetter
  public Map<String, Object> getAdditionalProperties() {
    return this.additionalProperties;
  }

  private boolean equalTo(ReqWithHeaders other) {
    return xTestServiceHeader.equals(other.xTestServiceHeader) && xTestEndpointHeader.equals(other.xTestEndpointHeader) && body.equals(other.body);
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.xTestServiceHeader, this.xTestEndpointHeader, this.body);
  }

  @Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static XTestServiceHeaderStage builder() {
    return new Builder();
  }

  public interface XTestServiceHeaderStage {
    XTestEndpointHeaderStage xTestServiceHeader(String xTestServiceHeader);

    Builder from(ReqWithHeaders other);
  }

  public interface XTestEndpointHeaderStage {
    BodyStage xTestEndpointHeader(String xTestEndpointHeader);
  }

  public interface BodyStage {
    _FinalStage body(String body);
  }

  public interface _FinalStage {
    ReqWithHeaders build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements XTestServiceHeaderStage, XTestEndpointHeaderStage, BodyStage, _FinalStage {
    private String xTestServiceHeader;

    private String xTestEndpointHeader;

    private String body;

    @JsonAnySetter
    private Map<String, Object> additionalProperties = new HashMap<>();

    private Builder() {
    }

    @Override
    public Builder from(ReqWithHeaders other) {
      xTestServiceHeader(other.getXTestServiceHeader());
      xTestEndpointHeader(other.getXTestEndpointHeader());
      body(other.getBody());
      return this;
    }

    @Override
    @JsonSetter("X-TEST-SERVICE-HEADER")
    public XTestEndpointHeaderStage xTestServiceHeader(String xTestServiceHeader) {
      this.xTestServiceHeader = xTestServiceHeader;
      return this;
    }

    @Override
    @JsonSetter("X-TEST-ENDPOINT-HEADER")
    public BodyStage xTestEndpointHeader(String xTestEndpointHeader) {
      this.xTestEndpointHeader = xTestEndpointHeader;
      return this;
    }

    @Override
    @JsonSetter("body")
    public _FinalStage body(String body) {
      this.body = body;
      return this;
    }

    @Override
    public ReqWithHeaders build() {
      return new ReqWithHeaders(xTestServiceHeader, xTestEndpointHeader, body, additionalProperties);
    }
  }
}
