package service

import (
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat/model"
	"github.com/wailsapp/wails/v3/pkg/application"
)

type TestService struct {
}

func (applicationService *TestService) Quit() {
	//vrchat.DoTest()
	application.Get().Quit()
}

func (applicationService *TestService) GetModel() model.VrchatModel {
	return model.Vrchat
}
