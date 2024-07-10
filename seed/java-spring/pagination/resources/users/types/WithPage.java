/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.users.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Integer;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = WithPage.Builder.class
)
public final class WithPage {
  private final Optional<Integer> page;

  private WithPage(Optional<Integer> page) {
    this.page = page;
  }

  @JsonProperty("page")
  public Optional<Integer> getPage() {
    return page;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof WithPage && equalTo((WithPage) other);
  }

  private boolean equalTo(WithPage other) {
    return page.equals(other.page);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.page);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static Builder builder() {
    return new Builder();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder {
    private Optional<Integer> page = Optional.empty();

    private Builder() {
    }

    public Builder from(WithPage other) {
      page(other.getPage());
      return this;
    }

    @JsonSetter(
        value = "page",
        nulls = Nulls.SKIP
    )
    public Builder page(Optional<Integer> page) {
      this.page = page;
      return this;
    }

    public Builder page(Integer page) {
      this.page = Optional.of(page);
      return this;
    }

    public WithPage build() {
      return new WithPage(page);
    }
  }
}
