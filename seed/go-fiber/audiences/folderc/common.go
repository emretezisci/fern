// This file was auto-generated by Fern from our API Definition.

package folderc

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/audiences/fern/internal"
	uuid "github.com/google/uuid"
)

type FolderCFoo struct {
	BarProperty uuid.UUID `json:"bar_property" url:"bar_property"`

	extraProperties map[string]interface{}
}

func (f *FolderCFoo) GetBarProperty() uuid.UUID {
	if f == nil {
		return uuid.UUID{}
	}
	return f.BarProperty
}

func (f *FolderCFoo) GetExtraProperties() map[string]interface{} {
	return f.extraProperties
}

func (f *FolderCFoo) UnmarshalJSON(data []byte) error {
	type unmarshaler FolderCFoo
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*f = FolderCFoo(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *f)
	if err != nil {
		return err
	}
	f.extraProperties = extraProperties
	return nil
}

func (f *FolderCFoo) String() string {
	if value, err := internal.StringifyJSON(f); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", f)
}
