/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.object.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = InlineType1.Builder.class)
public final class InlineType1 {
    private final String foo;

    private final NestedInlineType1 bar;

    private final Map<String, Object> additionalProperties;

    private InlineType1(String foo, NestedInlineType1 bar, Map<String, Object> additionalProperties) {
        this.foo = foo;
        this.bar = bar;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("foo")
    public String getFoo() {
        return foo;
    }

    @JsonProperty("bar")
    public NestedInlineType1 getBar() {
        return bar;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof InlineType1 && equalTo((InlineType1) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(InlineType1 other) {
        return foo.equals(other.foo) && bar.equals(other.bar);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.foo, this.bar);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static FooStage builder() {
        return new Builder();
    }

    public interface FooStage {
        BarStage foo(@NotNull String foo);

        Builder from(InlineType1 other);
    }

    public interface BarStage {
        _FinalStage bar(@NotNull NestedInlineType1 bar);
    }

    public interface _FinalStage {
        InlineType1 build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements FooStage, BarStage, _FinalStage {
        private String foo;

        private NestedInlineType1 bar;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(InlineType1 other) {
            foo(other.getFoo());
            bar(other.getBar());
            return this;
        }

        @java.lang.Override
        @JsonSetter("foo")
        public BarStage foo(@NotNull String foo) {
            this.foo = Objects.requireNonNull(foo, "foo must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("bar")
        public _FinalStage bar(@NotNull NestedInlineType1 bar) {
            this.bar = Objects.requireNonNull(bar, "bar must not be null");
            return this;
        }

        @java.lang.Override
        public InlineType1 build() {
            return new InlineType1(foo, bar, additionalProperties);
        }
    }
}
