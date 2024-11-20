// This file was auto-generated by Fern from our API Definition.

package client

import (
	context "context"
	core "github.com/folders/fern/core"
	service "github.com/folders/fern/folder/service"
	internal "github.com/folders/fern/internal"
	option "github.com/folders/fern/option"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *internal.Caller
	header  http.Header

	Service *service.Client
}

func NewClient(opts ...option.RequestOption) *Client {
	options := core.NewRequestOptions(opts...)
	return &Client{
		baseURL: options.BaseURL,
		caller: internal.NewCaller(
			&internal.CallerParams{
				Client:      options.HTTPClient,
				MaxAttempts: options.MaxAttempts,
			},
		),
		header:  options.ToHeader(),
		Service: service.NewClient(opts...),
	}
}

func (c *Client) Foo(
	ctx context.Context,
	opts ...option.RequestOption,
) error {
	options := core.NewRequestOptions(opts...)
	baseURL := internal.ResolveBaseURL(
		options.BaseURL,
		c.baseURL,
		"",
	)
	endpointURL := baseURL
	headers := internal.MergeHeaders(
		c.header.Clone(),
		options.ToHeader(),
	)

	if err := c.caller.Call(
		ctx,
		&internal.CallParams{
			URL:             endpointURL,
			Method:          http.MethodPost,
			Headers:         headers,
			MaxAttempts:     options.MaxAttempts,
			BodyProperties:  options.BodyProperties,
			QueryParameters: options.QueryParameters,
			Client:          options.HTTPClient,
		},
	); err != nil {
		return err
	}
	return nil
}
