package vrchat

import (
	"fmt"
	"github.com/hypebeast/go-osc/osc"
)

func createServer() (*osc.Server, *osc.StandardDispatcher) {
	var dispatcher = osc.NewStandardDispatcher()

	var server = &osc.Server{
		Addr:       "127.0.0.1:9000",
		Dispatcher: dispatcher,
	}

	go listenAndServe(server)

	return server, dispatcher
}

func listenAndServe(server *osc.Server) {
	err := server.ListenAndServe()
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("asdadsdasd as asd as")
}
