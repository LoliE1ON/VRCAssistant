package service

import "github.com/LoliE1ON/VRCAssistant/inrfastructure/vrchat"

type ApplicationService struct {
}

func (applicationService *ApplicationService) Quit() {
	vrchat.DoTest()
	//application.Get().Quit()
}
