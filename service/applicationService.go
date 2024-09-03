package service

import (
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat"
	"github.com/wailsapp/wails/v3/pkg/application"
)

type ApplicationService struct {
}

func (applicationService *ApplicationService) Quit() {
	//vrchat.DoTest()
	application.Get().Quit()
}

func (applicationService *ApplicationService) GetModel() vrchat.VrchatModel {
	return vrchat.Vrchat
}
