package service

import (
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat/model"
	"github.com/LoliE1ON/VRCAssistant/inrfastructure/vrchat"
)

type VrchatService struct {
}

var Vrchat *VrchatService = createService()

func createService() *VrchatService {
	vrchat.DoTest()

	return &VrchatService{}
}

func (service *VrchatService) Name() string {
	return "VrchatService"
}

func (service *VrchatService) GetModel() model.VrchatModel {
	return model.Vrchat
}
