from __future__ import annotations

import typing

import pydantic
import typing_extensions

from .exception_info import ExceptionInfo

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def generic(self, value: ExceptionInfo) -> ExceptionV2:
        return ExceptionV2(__root__=_ExceptionV2.Generic(**dict(value), type="generic"))

    def timeout(self) -> ExceptionV2:
        return ExceptionV2(__root__=_ExceptionV2.Timeout(type="timeout"))


class ExceptionV2(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout]:
        return self.__root__

    def visit(
        self, generic: typing.Callable[[ExceptionInfo], T_Result], timeout: typing.Callable[[], T_Result]
    ) -> T_Result:
        if self.__root__.type == "generic":
            return generic(self.__root__)
        if self.__root__.type == "timeout":
            return timeout()

    __root__: typing_extensions.Annotated[
        typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout], pydantic.Field(discriminator="type")
    ]

    @pydantic.root_validator
    def _validate(cls, values: typing.Dict[str, typing.Any]) -> typing.Dict[str, typing.Any]:
        value = typing.cast(typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout], values.get("__root__"))
        for validator in ExceptionV2.Validators._validators:
            value = validator(value)
        return {**values, "__root__": value}

    class Validators:
        _validators: typing.ClassVar[
            typing.List[
                typing.Callable[
                    [typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout]],
                    typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout],
                ]
            ]
        ] = []

        @classmethod
        def validate(
            cls,
            validator: typing.Callable[
                [typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout]],
                typing.Union[_ExceptionV2.Generic, _ExceptionV2.Timeout],
            ],
        ) -> None:
            cls._validators.append(validator)

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        frozen = True


class _ExceptionV2:
    class Generic(ExceptionInfo):
        type: typing_extensions.Literal["generic"]

        class Config:
            frozen = True

    class Timeout(pydantic.BaseModel):
        type: typing_extensions.Literal["timeout"]

        class Config:
            frozen = True


ExceptionV2.update_forward_refs()
