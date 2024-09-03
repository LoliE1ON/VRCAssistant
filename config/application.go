package config

import (
	"embed"
	"github.com/LoliE1ON/VRCAssistant/service"
	"github.com/wailsapp/wails/v3/pkg/application"
)

var Application = application.Options{
	Name:        "VRCAssistant",
	Description: "VRChat Assistant",
	Services: []application.Service{
		application.NewService(&service.ApplicationService{}),
	},
	Assets: application.AssetOptions{},
}

func ConfigureApplication(assets embed.FS) {
	Application.Assets.Handler = application.AssetFileServerFS(assets)
}
