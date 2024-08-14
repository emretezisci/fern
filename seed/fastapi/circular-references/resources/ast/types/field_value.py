# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .primitive_value import (
    PrimitiveValue as resources_ast_types_primitive_value_PrimitiveValue,
)
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from .object_value import ObjectValue as resources_ast_types_object_value_ObjectValue
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import UniversalBaseModel
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def primitive_value(
        self, value: resources_ast_types_primitive_value_PrimitiveValue
    ) -> FieldValue:
        if IS_PYDANTIC_V2:
            return FieldValue(
                root=_FieldValue.PrimitiveValue(type="primitive_value", value=value)
            )  # type: ignore
        else:
            return FieldValue(
                __root__=_FieldValue.PrimitiveValue(type="primitive_value", value=value)
            )  # type: ignore

    def object_value(
        self, value: resources_ast_types_object_value_ObjectValue
    ) -> FieldValue:
        if IS_PYDANTIC_V2:
            return FieldValue(
                root=_FieldValue.ObjectValue(
                    **value.dict(exclude_unset=True), type="object_value"
                )
            )  # type: ignore
        else:
            return FieldValue(
                __root__=_FieldValue.ObjectValue(
                    **value.dict(exclude_unset=True), type="object_value"
                )
            )  # type: ignore

    def container_value(
        self, value: resources_ast_types_container_value_ContainerValue
    ) -> FieldValue:
        if IS_PYDANTIC_V2:
            return FieldValue(
                root=_FieldValue.ContainerValue(type="container_value", value=value)
            )  # type: ignore
        else:
            return FieldValue(
                __root__=_FieldValue.ContainerValue(type="container_value", value=value)
            )  # type: ignore


class FieldValue(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _FieldValue.PrimitiveValue,
                _FieldValue.ObjectValue,
                _FieldValue.ContainerValue,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _FieldValue.PrimitiveValue,
            _FieldValue.ObjectValue,
            _FieldValue.ContainerValue,
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _FieldValue.PrimitiveValue,
                _FieldValue.ObjectValue,
                _FieldValue.ContainerValue,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _FieldValue.PrimitiveValue,
            _FieldValue.ObjectValue,
            _FieldValue.ContainerValue,
        ]:
            return self.__root__

    def visit(
        self,
        primitive_value: typing.Callable[
            [resources_ast_types_primitive_value_PrimitiveValue], T_Result
        ],
        object_value: typing.Callable[
            [resources_ast_types_object_value_ObjectValue], T_Result
        ],
        container_value: typing.Callable[
            ["resources_ast_types_container_value_ContainerValue"], T_Result
        ],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "primitive_value":
            return primitive_value(unioned_value.value)
        if unioned_value.type == "object_value":
            return object_value(
                resources_ast_types_object_value_ObjectValue(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "container_value":
            return container_value(unioned_value.value)


from .container_value import (
    ContainerValue as resources_ast_types_container_value_ContainerValue,
)  # noqa: E402


class _FieldValue:
    class PrimitiveValue(UniversalBaseModel):
        type: typing.Literal["primitive_value"] = "primitive_value"
        value: resources_ast_types_primitive_value_PrimitiveValue

    class ObjectValue(resources_ast_types_object_value_ObjectValue):
        type: typing.Literal["object_value"] = "object_value"

    class ContainerValue(UniversalBaseModel):
        type: typing.Literal["container_value"] = "container_value"
        value: resources_ast_types_container_value_ContainerValue


update_forward_refs(_FieldValue.ContainerValue)
update_forward_refs(FieldValue)
