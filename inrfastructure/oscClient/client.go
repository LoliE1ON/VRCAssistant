package oscClient

import (
	"fmt"
	"github.com/LoliE1ON/VRCAssistant/domain/application/model"
	"github.com/hypebeast/go-osc/osc"
)

var client *osc.Client = createClient()

func createClient() *osc.Client {
	model.Osc.ClientIsRunning = true

	return osc.NewClient(config.Host, config.Port)
}

func SendTest() {
	msg := osc.NewMessage("/test")
	msg.Append("hello")

	err := client.Send(msg)
	if err != nil {
		model.Osc.ClientIsRunning = false
		fmt.Println(err)
	} else {
		model.Osc.ClientIsRunning = true
	}
}
