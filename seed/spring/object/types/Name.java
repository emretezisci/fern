/**
 * This file was auto-generated by Fern from our API Definition.
 */

package types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.Override;
import java.lang.String;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = Name.Builder.class
)
public final class Name {
  private final String id;

  private final String value;

  private Name(String id, String value) {
    this.id = id;
    this.value = value;
  }

  @JsonProperty("id")
  public String getId() {
    return id;
  }

  @JsonProperty("value")
  public String getValue() {
    return value;
  }

  @Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof Name && equalTo((Name) other);
  }

  private boolean equalTo(Name other) {
    return id.equals(other.id) && value.equals(other.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.value);
  }

  @Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static IdStage builder() {
    return new Builder();
  }

  public interface IdStage {
    ValueStage id(String id);

    Builder from(Name other);
  }

  public interface ValueStage {
    _FinalStage value(String value);
  }

  public interface _FinalStage {
    Name build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements IdStage, ValueStage, _FinalStage {
    private String id;

    private String value;

    private Builder() {
    }

    @Override
    public Builder from(Name other) {
      id(other.getId());
      value(other.getValue());
      return this;
    }

    @Override
    @JsonSetter("id")
    public ValueStage id(String id) {
      this.id = id;
      return this;
    }

    @Override
    @JsonSetter("value")
    public _FinalStage value(String value) {
      this.value = value;
      return this;
    }

    @Override
    public Name build() {
      return new Name(id, value);
    }
  }
}
