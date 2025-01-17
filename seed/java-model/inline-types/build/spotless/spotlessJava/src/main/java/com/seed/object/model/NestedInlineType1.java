/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.object.core.ObjectMappers;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = NestedInlineType1.Builder.class)
public final class NestedInlineType1 {
    private final String foo;

    private final String bar;

    private final InlineEnum myEnum;

    private NestedInlineType1(String foo, String bar, InlineEnum myEnum) {
        this.foo = foo;
        this.bar = bar;
        this.myEnum = myEnum;
    }

    @JsonProperty("foo")
    public String getFoo() {
        return foo;
    }

    @JsonProperty("bar")
    public String getBar() {
        return bar;
    }

    @JsonProperty("myEnum")
    public InlineEnum getMyEnum() {
        return myEnum;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof NestedInlineType1 && equalTo((NestedInlineType1) other);
    }

    private boolean equalTo(NestedInlineType1 other) {
        return foo.equals(other.foo) && bar.equals(other.bar) && myEnum.equals(other.myEnum);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.foo, this.bar, this.myEnum);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static FooStage builder() {
        return new Builder();
    }

    public interface FooStage {
        BarStage foo(String foo);

        Builder from(NestedInlineType1 other);
    }

    public interface BarStage {
        MyEnumStage bar(String bar);
    }

    public interface MyEnumStage {
        _FinalStage myEnum(InlineEnum myEnum);
    }

    public interface _FinalStage {
        NestedInlineType1 build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements FooStage, BarStage, MyEnumStage, _FinalStage {
        private String foo;

        private String bar;

        private InlineEnum myEnum;

        private Builder() {}

        @java.lang.Override
        public Builder from(NestedInlineType1 other) {
            foo(other.getFoo());
            bar(other.getBar());
            myEnum(other.getMyEnum());
            return this;
        }

        @java.lang.Override
        @JsonSetter("foo")
        public BarStage foo(String foo) {
            this.foo = Objects.requireNonNull(foo, "foo must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("bar")
        public MyEnumStage bar(String bar) {
            this.bar = Objects.requireNonNull(bar, "bar must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("myEnum")
        public _FinalStage myEnum(InlineEnum myEnum) {
            this.myEnum = Objects.requireNonNull(myEnum, "myEnum must not be null");
            return this;
        }

        @java.lang.Override
        public NestedInlineType1 build() {
            return new NestedInlineType1(foo, bar, myEnum);
        }
    }
}
