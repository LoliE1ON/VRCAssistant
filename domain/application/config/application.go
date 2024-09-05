package config

import (
	"github.com/wailsapp/wails/v3/pkg/application"
)

var Application = application.Options{
	Name:        "VRCAssistant",
	Description: "VRChat Assistant",
	Services:    []application.Service{},
	Assets:      application.AssetOptions{},
}
