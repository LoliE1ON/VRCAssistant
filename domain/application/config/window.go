package config

import "github.com/wailsapp/wails/v3/pkg/application"

var Window = application.WebviewWindowOptions{
	Title:         "VRCAssistant",
	URL:           "/",
	Frameless:     true,
	DisableResize: true,
	Centered:      true,
	Width:         1150,
	Height:        800,
}
