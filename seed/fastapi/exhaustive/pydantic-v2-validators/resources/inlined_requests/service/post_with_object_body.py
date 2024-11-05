# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import UniversalBaseModel
from ...types.resources.object.types.object_with_optional_field import (
    ObjectWithOptionalField,
)
import pydantic
import typing
import typing_extensions
from ....core.pydantic_utilities import universal_field_validator


class PostWithObjectBody(UniversalBaseModel):
    string: str
    integer: int
    nested_object: ObjectWithOptionalField = pydantic.Field(alias="NestedObject")

    class Partial(typing.TypedDict):
        string: typing_extensions.NotRequired[str]
        integer: typing_extensions.NotRequired[int]
        nested_object: typing_extensions.NotRequired[ObjectWithOptionalField]

    class Validators:
        """
        Use this class to add validators to the Pydantic model.

            @PostWithObjectBody.Validators.root()
            def validate(values: PostWithObjectBody.Partial) -> PostWithObjectBody.Partial:
                ...

            @PostWithObjectBody.Validators.field("string")
            def validate_string(string: str, values: PostWithObjectBody.Partial) -> str:
                ...

            @PostWithObjectBody.Validators.field("integer")
            def validate_integer(integer: int, values: PostWithObjectBody.Partial) -> int:
                ...

            @PostWithObjectBody.Validators.field("nested_object")
            def validate_nested_object(nested_object: ObjectWithOptionalField, values: PostWithObjectBody.Partial) -> ObjectWithOptionalField:
                ...
        """

        _pre_validators: typing.ClassVar[
            typing.List[PostWithObjectBody.Validators._PreRootValidator]
        ] = []
        _post_validators: typing.ClassVar[
            typing.List[PostWithObjectBody.Validators._RootValidator]
        ] = []
        _string_pre_validators: typing.ClassVar[
            typing.List[PostWithObjectBody.Validators.PreStringValidator]
        ] = []
        _string_post_validators: typing.ClassVar[
            typing.List[PostWithObjectBody.Validators.StringValidator]
        ] = []
        _integer_pre_validators: typing.ClassVar[
            typing.List[PostWithObjectBody.Validators.PreIntegerValidator]
        ] = []
        _integer_post_validators: typing.ClassVar[
            typing.List[PostWithObjectBody.Validators.IntegerValidator]
        ] = []
        _nested_object_pre_validators: typing.ClassVar[
            typing.List[PostWithObjectBody.Validators.PreNestedObjectValidator]
        ] = []
        _nested_object_post_validators: typing.ClassVar[
            typing.List[PostWithObjectBody.Validators.NestedObjectValidator]
        ] = []

        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[False] = False
        ) -> typing.Callable[
            [PostWithObjectBody.Validators._RootValidator],
            PostWithObjectBody.Validators._RootValidator,
        ]: ...
        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [PostWithObjectBody.Validators._PreRootValidator],
            PostWithObjectBody.Validators._PreRootValidator,
        ]: ...
        @classmethod
        def root(cls, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if pre:
                    cls._pre_validators.append(validator)
                else:
                    cls._post_validators.append(validator)
                return validator

            return decorator

        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["string"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [PostWithObjectBody.Validators.PreStringValidator],
            PostWithObjectBody.Validators.PreStringValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["string"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [PostWithObjectBody.Validators.StringValidator],
            PostWithObjectBody.Validators.StringValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["integer"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [PostWithObjectBody.Validators.PreIntegerValidator],
            PostWithObjectBody.Validators.PreIntegerValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["integer"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [PostWithObjectBody.Validators.IntegerValidator],
            PostWithObjectBody.Validators.IntegerValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["nested_object"],
            *,
            pre: typing.Literal[True],
        ) -> typing.Callable[
            [PostWithObjectBody.Validators.PreNestedObjectValidator],
            PostWithObjectBody.Validators.PreNestedObjectValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["nested_object"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [PostWithObjectBody.Validators.NestedObjectValidator],
            PostWithObjectBody.Validators.NestedObjectValidator,
        ]: ...
        @classmethod
        def field(cls, field_name: str, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if field_name == "string":
                    if pre:
                        cls._string_pre_validators.append(validator)
                    else:
                        cls._string_post_validators.append(validator)
                if field_name == "integer":
                    if pre:
                        cls._integer_pre_validators.append(validator)
                    else:
                        cls._integer_post_validators.append(validator)
                if field_name == "nested_object":
                    if pre:
                        cls._nested_object_pre_validators.append(validator)
                    else:
                        cls._nested_object_post_validators.append(validator)
                return validator

            return decorator

        class PreStringValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: PostWithObjectBody.Partial
            ) -> typing.Any: ...

        class StringValidator(typing.Protocol):
            def __call__(
                self, __v: str, __values: PostWithObjectBody.Partial
            ) -> str: ...

        class PreIntegerValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: PostWithObjectBody.Partial
            ) -> typing.Any: ...

        class IntegerValidator(typing.Protocol):
            def __call__(
                self, __v: int, __values: PostWithObjectBody.Partial
            ) -> int: ...

        class PreNestedObjectValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: PostWithObjectBody.Partial
            ) -> typing.Any: ...

        class NestedObjectValidator(typing.Protocol):
            def __call__(
                self, __v: ObjectWithOptionalField, __values: PostWithObjectBody.Partial
            ) -> ObjectWithOptionalField: ...

        class _PreRootValidator(typing.Protocol):
            def __call__(self, __values: typing.Any) -> typing.Any: ...

        class _RootValidator(typing.Protocol):
            def __call__(
                self, __values: PostWithObjectBody.Partial
            ) -> PostWithObjectBody.Partial: ...

    @pydantic.model_validator(mode="before")
    def _pre_validate(
        cls, values: PostWithObjectBody.Partial
    ) -> PostWithObjectBody.Partial:
        for validator in PostWithObjectBody.Validators._pre_validators:
            values = validator(values)
        return values

    @pydantic.model_validator(mode="after")
    def _post_validate(
        cls, values: PostWithObjectBody.Partial
    ) -> PostWithObjectBody.Partial:
        for validator in PostWithObjectBody.Validators._post_validators:
            values = validator(values)
        return values

    @universal_field_validator("string", pre=True)
    def _pre_validate_string(cls, v: str, values: PostWithObjectBody.Partial) -> str:
        for validator in PostWithObjectBody.Validators._string_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("string", pre=False)
    def _post_validate_string(cls, v: str, values: PostWithObjectBody.Partial) -> str:
        for validator in PostWithObjectBody.Validators._string_post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("integer", pre=True)
    def _pre_validate_integer(cls, v: int, values: PostWithObjectBody.Partial) -> int:
        for validator in PostWithObjectBody.Validators._integer_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("integer", pre=False)
    def _post_validate_integer(cls, v: int, values: PostWithObjectBody.Partial) -> int:
        for validator in PostWithObjectBody.Validators._integer_post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("nested_object", pre=True)
    def _pre_validate_nested_object(
        cls, v: ObjectWithOptionalField, values: PostWithObjectBody.Partial
    ) -> ObjectWithOptionalField:
        for validator in PostWithObjectBody.Validators._nested_object_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("nested_object", pre=False)
    def _post_validate_nested_object(
        cls, v: ObjectWithOptionalField, values: PostWithObjectBody.Partial
    ) -> ObjectWithOptionalField:
        for validator in PostWithObjectBody.Validators._nested_object_post_validators:
            v = validator(v, values)
        return v

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
        extra="forbid"
    )  # type: ignore # Pydantic v2
