// This file was auto-generated by Fern from our API Definition.

package pathparam

import (
	context "context"
	fmt "fmt"
	fern "github.com/enum/fern"
	core "github.com/enum/fern/core"
	option "github.com/enum/fern/option"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header
}

func NewClient(opts ...option.RequestOption) *Client {
	options := core.NewRequestOptions(opts...)
	return &Client{
		baseURL: options.BaseURL,
		caller: core.NewCaller(
			&core.CallerParams{
				Client:      options.HTTPClient,
				MaxAttempts: options.MaxAttempts,
			},
		),
		header: options.ToHeader(),
	}
}

func (c *Client) Send(
	ctx context.Context,
	operand fern.Operand,
	maybeOperand *fern.Operand,
	operandOrColor *fern.ColorOrOperand,
	maybeOperandOrColor *fern.ColorOrOperand,
	opts ...option.RequestOption,
) error {
	options := core.NewRequestOptions(opts...)

	baseURL := ""
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := fmt.Sprintf(baseURL+"/"+"path/test/%v/%v/%v/%v", operand, maybeOperand, operandOrColor, maybeOperandOrColor)

	headers := core.MergeHeaders(c.header.Clone(), options.ToHeader())

	if err := c.caller.Call(
		ctx,
		&core.CallParams{
			URL:         endpointURL,
			Method:      http.MethodPost,
			MaxAttempts: options.MaxAttempts,
			Headers:     headers,
			Client:      options.HTTPClient,
		},
	); err != nil {
		return err
	}
	return nil
}
