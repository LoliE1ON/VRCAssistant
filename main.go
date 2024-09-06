package main

import (
	"embed"
	_ "embed"
	config2 "github.com/LoliE1ON/VRCAssistant/domain/application/config"
	service2 "github.com/LoliE1ON/VRCAssistant/domain/application/service"
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat/service"
	"github.com/wailsapp/wails/v3/pkg/application"
	"github.com/wailsapp/wails/v3/pkg/events"
	"log"
)

//go:embed renderer/dist
var assets embed.FS

func main() {
	config2.Application.Assets.Handler = application.AssetFileServerFS(assets)
	config2.Application.Services = []application.Service{
		application.NewService(service.Vrchat),
		application.NewService(service2.Application),
	}

	var instance = application.New(config2.Application)

	instance.On(events.Common.ApplicationStarted, func(event *application.Event) {
		service2.Application.MonitorProcesses()
	})

	instance.NewWebviewWindowWithOptions(config2.Window)

	err := instance.Run()
	if err != nil {
		log.Fatal(err)
	}
}
