/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.fern.sdk.resources.types.object.errors;

import com.fern.sdk.core.SeedExhaustiveApiError;
import com.fern.sdk.resources.types.object.types.NestedObjectWithOptionalField;
import java.lang.Override;

public final class SeedExhaustiveNestedObjectWithOptionalFieldError extends SeedExhaustiveApiError {
  /**
   * The body of the response that triggered the exception.
   */
  private final NestedObjectWithOptionalField body;

  public SeedExhaustiveNestedObjectWithOptionalFieldError(NestedObjectWithOptionalField body) {
    super("NestedObjectWithOptionalFieldError", 400, body);
    this.body = body;
  }

  /**
   * @return the body
   */
  @Override
  public NestedObjectWithOptionalField body() {
    return this.body;
  }
}
