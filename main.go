package main

import (
	"embed"
	_ "embed"
	"github.com/LoliE1ON/VRCAssistant/service"
	"github.com/wailsapp/wails/v3/pkg/application"
	"log"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	app := application.New(application.Options{
		Name:        "VRCAssistant",
		Description: "VRChat Assistant",
		Services: []application.Service{
			application.NewService(&service.ApplicationService{}),
		},
		Assets: application.AssetOptions{
			Handler: application.AssetFileServerFS(assets),
		},
	})

	app.NewWebviewWindowWithOptions(application.WebviewWindowOptions{
		Title:     "VRCAssistant",
		URL:       "/",
		Frameless: true,
	})

	err := app.Run()
	if err != nil {
		log.Fatal(err)
	}
}
