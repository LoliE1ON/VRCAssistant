package processMonitor

import (
	"fmt"
	"github.com/LoliE1ON/VRCAssistant/config"
	"github.com/LoliE1ON/VRCAssistant/domain/vrchat"
	"github.com/mitchellh/go-ps"
	"time"
)

func Monitor() {
	go monitorProcesses()
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

		vrchat.Vrchat.IsRunning = appFound

		if appFound {
			fmt.Printf("Application %s is running \n", config.Vrchat.ProcessName)
		} else {
			fmt.Printf("Application %s is not running \n", config.Vrchat.ProcessName)
		}

		time.Sleep(time.Second)
	}
}
