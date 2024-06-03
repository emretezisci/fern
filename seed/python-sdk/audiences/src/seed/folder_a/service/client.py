# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ...core.pydantic_utilities import pydantic_v1
from ...core.request_options import RequestOptions
from .types.response import Response


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_direct_thread(self, *, request_options: typing.Optional[RequestOptions] = None) -> Response:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Response

        Examples
        --------
        from seed.client import SeedAudiences

        client = SeedAudiences(
            base_url="https://yourhost.com/path/to/api",
        )
        client.folder_a.service.get_direct_thread()
        """
        _response = self._client_wrapper.httpx_client.request(method="GET", request_options=request_options)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(Response, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_direct_thread(self, *, request_options: typing.Optional[RequestOptions] = None) -> Response:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Response

        Examples
        --------
        from seed.client import AsyncSeedAudiences

        client = AsyncSeedAudiences(
            base_url="https://yourhost.com/path/to/api",
        )
        await client.folder_a.service.get_direct_thread()
        """
        _response = await self._client_wrapper.httpx_client.request(method="GET", request_options=request_options)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(Response, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
