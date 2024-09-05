package main

import (
	"embed"
	_ "embed"
	config2 "github.com/LoliE1ON/VRCAssistant/domain/application/config"
	service2 "github.com/LoliE1ON/VRCAssistant/domain/application/service"
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat/service"
	"github.com/wailsapp/wails/v3/pkg/application"
	"log"
)

//go:embed renderer/dist
var assets embed.FS

func main() {
	service2.MonitorProcesses()

	config2.Application.Assets.Handler = application.AssetFileServerFS(assets)
	config2.Application.Services = []application.Service{
		application.NewService(&service.TestService{}),
	}

	var instance = application.New(config2.Application)

	instance.NewWebviewWindowWithOptions(config2.Window)

	err := instance.Run()
	if err != nil {
		log.Fatal(err)
	}
}
