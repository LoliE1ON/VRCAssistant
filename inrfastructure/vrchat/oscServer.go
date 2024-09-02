package vrchat

import (
	"fmt"
	"github.com/hypebeast/go-osc/osc"
)

var server, dispatcher = createServer()

func handleTest() {
	err := dispatcher.AddMsgHandler("/test", func(msg *osc.Message) {
		fmt.Println(msg)
	})
	if err != nil {
		fmt.Println(err)
	}
}
