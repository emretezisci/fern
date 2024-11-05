# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ......core.pydantic_utilities import UniversalBaseModel
import pydantic
import typing
import typing_extensions
from ......core.pydantic_utilities import universal_field_validator


class Dog(UniversalBaseModel):
    name: str
    likes_to_woof: bool = pydantic.Field(alias="likesToWoof")

    class Partial(typing.TypedDict):
        name: typing_extensions.NotRequired[str]
        likes_to_woof: typing_extensions.NotRequired[bool]

    class Validators:
        """
        Use this class to add validators to the Pydantic model.

            @Dog.Validators.root()
            def validate(values: Dog.Partial) -> Dog.Partial:
                ...

            @Dog.Validators.field("name")
            def validate_name(name: str, values: Dog.Partial) -> str:
                ...

            @Dog.Validators.field("likes_to_woof")
            def validate_likes_to_woof(likes_to_woof: bool, values: Dog.Partial) -> bool:
                ...
        """

        _pre_validators: typing.ClassVar[
            typing.List[Dog.Validators._PreRootValidator]
        ] = []
        _post_validators: typing.ClassVar[
            typing.List[Dog.Validators._RootValidator]
        ] = []
        _name_pre_validators: typing.ClassVar[
            typing.List[Dog.Validators.PreNameValidator]
        ] = []
        _name_post_validators: typing.ClassVar[
            typing.List[Dog.Validators.NameValidator]
        ] = []
        _likes_to_woof_pre_validators: typing.ClassVar[
            typing.List[Dog.Validators.PreLikesToWoofValidator]
        ] = []
        _likes_to_woof_post_validators: typing.ClassVar[
            typing.List[Dog.Validators.LikesToWoofValidator]
        ] = []

        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[False] = False
        ) -> typing.Callable[
            [Dog.Validators._RootValidator], Dog.Validators._RootValidator
        ]: ...
        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [Dog.Validators._PreRootValidator], Dog.Validators._PreRootValidator
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
            cls, field_name: typing.Literal["name"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [Dog.Validators.PreNameValidator], Dog.Validators.PreNameValidator
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["name"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [Dog.Validators.NameValidator], Dog.Validators.NameValidator
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["likes_to_woof"],
            *,
            pre: typing.Literal[True],
        ) -> typing.Callable[
            [Dog.Validators.PreLikesToWoofValidator],
            Dog.Validators.PreLikesToWoofValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["likes_to_woof"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [Dog.Validators.LikesToWoofValidator], Dog.Validators.LikesToWoofValidator
        ]: ...
        @classmethod
        def field(cls, field_name: str, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if field_name == "name":
                    if pre:
                        cls._name_pre_validators.append(validator)
                    else:
                        cls._name_post_validators.append(validator)
                if field_name == "likes_to_woof":
                    if pre:
                        cls._likes_to_woof_pre_validators.append(validator)
                    else:
                        cls._likes_to_woof_post_validators.append(validator)
                return validator

            return decorator

        class PreNameValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: Dog.Partial
            ) -> typing.Any: ...

        class NameValidator(typing.Protocol):
            def __call__(self, __v: str, __values: Dog.Partial) -> str: ...

        class PreLikesToWoofValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: Dog.Partial
            ) -> typing.Any: ...

        class LikesToWoofValidator(typing.Protocol):
            def __call__(self, __v: bool, __values: Dog.Partial) -> bool: ...

        class _PreRootValidator(typing.Protocol):
            def __call__(self, __values: typing.Any) -> typing.Any: ...

        class _RootValidator(typing.Protocol):
            def __call__(self, __values: Dog.Partial) -> Dog.Partial: ...

    @pydantic.model_validator(mode="before")
    def _pre_validate_types_dog(cls, values: Dog.Partial) -> Dog.Partial:
        for validator in Dog.Validators._pre_validators:
            values = validator(values)
        return values

    @pydantic.model_validator(mode="after")
    def _post_validate_types_dog(cls, values: Dog.Partial) -> Dog.Partial:
        for validator in Dog.Validators._post_validators:
            values = validator(values)
        return values

    @universal_field_validator("name", pre=True)
    def _pre_validate_name(cls, v: str, values: Dog.Partial) -> str:
        for validator in Dog.Validators._name_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("name", pre=False)
    def _post_validate_name(cls, v: str, values: Dog.Partial) -> str:
        for validator in Dog.Validators._name_post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("likes_to_woof", pre=True)
    def _pre_validate_likes_to_woof(cls, v: bool, values: Dog.Partial) -> bool:
        for validator in Dog.Validators._likes_to_woof_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("likes_to_woof", pre=False)
    def _post_validate_likes_to_woof(cls, v: bool, values: Dog.Partial) -> bool:
        for validator in Dog.Validators._likes_to_woof_post_validators:
            v = validator(v, values)
        return v

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
        extra="forbid"
    )  # type: ignore # Pydantic v2
