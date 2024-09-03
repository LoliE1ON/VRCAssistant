package main

import (
	"embed"
	_ "embed"
	"github.com/LoliE1ON/VRCAssistant/config"
	"github.com/wailsapp/wails/v3/pkg/application"
	"log"
)

//go:embed renderer/dist
var assets embed.FS

func main() {
	config.ConfigureApplication(assets)

	var instance = application.New(config.Application)

	instance.NewWebviewWindowWithOptions(config.Window)

	err := instance.Run()
	if err != nil {
		log.Fatal(err)
	}
}
