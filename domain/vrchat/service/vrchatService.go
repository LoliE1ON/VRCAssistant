package service

import (
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat/model"
)

type VrchatService struct {
}

var Vrchat *VrchatService = &VrchatService{}

func (service *VrchatService) Name() string {
	return "VrchatService"
}

func (service *VrchatService) GetModel() model.VrchatModel {
	return model.Vrchat
}
