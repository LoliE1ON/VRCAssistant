package main

import (
	"embed"
	_ "embed"
	"github.com/LoliE1ON/VRCAssistant/config"
	"github.com/LoliE1ON/VRCAssistant/domain/processMonitor"
	"github.com/LoliE1ON/VRCAssistant/service"
	"github.com/wailsapp/wails/v3/pkg/application"
	"log"
)

//go:embed renderer/dist
var assets embed.FS

func main() {
	processMonitor.Monitor()

	config.Application.Assets.Handler = application.AssetFileServerFS(assets)
	config.Application.Services = []application.Service{
		application.NewService(&service.ApplicationService{}),
	}

	var instance = application.New(config.Application)

	instance.NewWebviewWindowWithOptions(config.Window)

	err := instance.Run()
	if err != nil {
		log.Fatal(err)
	}
}
