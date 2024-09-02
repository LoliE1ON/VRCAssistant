package service

import "github.com/wailsapp/wails/v3/pkg/application"

type ApplicationService struct{}

func (applicationService *ApplicationService) Quite() {
	application.Get().Quit()
}
