package service

import (
	context "context"
	"net/http"
	testing "testing"

	mockwire "github.com/examples/fern/mockwire"
	option "github.com/examples/fern/option"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestCheck(t *testing.T) {
	tests := []struct {
		desc      string
		request   *mockwire.Request
		response  *mockwire.Response
		wantError string
	}{
		{
			desc: "get exception succeded",
			request: &mockwire.Request{
				URL:             "/check/{id}",
				Method:          http.MethodGet,
				Headers:         nil,
				BodyProperties:  nil,
				QueryParameters: nil,
				PathParameters: map[string]string{
					"id": "id-2sdx82h",
				},
				Auth:  true,
				Token: "a-token",
			},
			response:  nil,
			wantError: "",
		},
		{
			desc: "get exception with error",
			request: &mockwire.Request{
				URL:             "/check/{id}",
				Method:          http.MethodGet,
				Headers:         nil,
				BodyProperties:  nil,
				QueryParameters: nil,
				PathParameters: map[string]string{
					"id": "id-2sdx82h",
				},
				Auth:  true,
				Token: "a-token",
			},
			response:  nil,
			wantError: "an-error",
		},
	}

	for _, tt := range tests {
		t.Run(tt.desc, func(t *testing.T) {
			stub, err := mockwire.Run(&mockwire.TestCase{
				Request:  tt.request,
				Response: tt.response,
			})
			require.NoError(t, err)
			defer stub.Shutdown()

			client := NewClient(
				option.WithToken(
					tt.request.Token,
				),
				option.WithBaseURL(stub.URL),
			)

			err = client.Check(
				context.TODO(),
				tt.request.PathParameters["id"],
			)

			if tt.wantError != "" {
				assert.EqualError(t, err, tt.wantError)
				return
			}
			require.NoError(t, err)
		})
	}
}
