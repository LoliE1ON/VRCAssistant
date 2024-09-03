package oscClient

import (
	"fmt"
	"github.com/hypebeast/go-osc/osc"
)

var client = osc.NewClient(config.Host, config.Port)

func SendTest() {
	msg := osc.NewMessage("/test")
	msg.Append("hello")

	err := client.Send(msg)
	if err != nil {
		fmt.Println(err)
	}
}
