package oscServer

import (
	"fmt"
	"github.com/hypebeast/go-osc/osc"
)

var server, dispatcher = createServer()

func HandleTest() {
	err := dispatcher.AddMsgHandler("/test", func(msg *osc.Message) {
		fmt.Println(msg)
		// TODO: Add set to global state
	})
	if err != nil {
		fmt.Println(err)
	}
}
