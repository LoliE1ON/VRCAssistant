package service

import (
	"fmt"
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat/config"
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat/model"
	"github.com/mitchellh/go-ps"
	"time"
)

func MonitorProcesses() {
	go func() {
		fmt.Println("Starting new goroutine application.service.MonitorProcesses...")
		monitorProcesses()
	}()
}

func monitorProcesses() {
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
}
