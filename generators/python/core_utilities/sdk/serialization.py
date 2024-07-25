class FieldMetadata:
    """
    Metadata class used to annotate fields to provide additional information.

    Example:
    class MyDict(TypedDict):
        field: typing.Annotated[str, FieldMetadata(alias="field_name")]

    Will serialize: `{"field": "value"}`
    To: `{"field_name": "value"}`
    """
    alias: str

    def __init__(self, *, alias: str) -> None:
        self.alias = alias