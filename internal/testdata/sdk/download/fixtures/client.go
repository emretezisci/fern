// This file was auto-generated by Fern from our API Definition.

package api

import (
	core "github.com/fern-api/fern-go/internal/testdata/sdk/download/fixtures/core"
	http "net/http"
)

type Client interface {
	File() FileClient
}

func NewClient(opts ...core.ClientOption) Client {
	options := core.NewClientOptions()
	for _, opt := range opts {
		opt(options)
	}
	return &client{
		baseURL:    options.BaseURL,
		httpClient: options.HTTPClient,
		header:     options.ToHeader(),
		fileClient: NewFileClient(opts...),
	}
}

type client struct {
	baseURL    string
	httpClient core.HTTPClient
	header     http.Header
	fileClient FileClient
}

func (c *client) File() FileClient {
	return c.fileClient
}
