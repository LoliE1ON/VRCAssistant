package service

import (
	"fmt"
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat/config"
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat/model"
	"github.com/mitchellh/go-ps"
	"github.com/wailsapp/wails/v3/pkg/application"
	"time"
)

type ApplicationService struct {
}

var Application *ApplicationService = &ApplicationService{}

func (service *ApplicationService) MonitorProcesses() {
	go func() {
		for {
			processList, err := ps.Processes()
			if err != nil {
				fmt.Println("Error retrieving process list:", err)
				continue
			}

			appFound := false
			for _, p := range processList {
				if p.Executable() == config.Vrchat.ProcessName {
					appFound = true
					break
				}
			}

			model.Vrchat.IsRunning = appFound

			if appFound {
				fmt.Printf("Application %s is running \n", config.Vrchat.ProcessName)
			} else {
				fmt.Printf("Application %s is not running \n", config.Vrchat.ProcessName)
			}

			time.Sleep(time.Second)
		}
	}()
}

func (service *ApplicationService) Quit() {
	application.Get().Quit()
}
