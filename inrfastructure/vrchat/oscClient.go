package vrchat

import (
	"fmt"
	"github.com/hypebeast/go-osc/osc"
)

var client = osc.NewClient(oscConfig.Host, oscConfig.ClientPort)

func sendTest() {
	msg := osc.NewMessage("/test")
	msg.Append("hello")

	err := client.Send(msg)
	if err != nil {
		fmt.Println(err)
	}
}
