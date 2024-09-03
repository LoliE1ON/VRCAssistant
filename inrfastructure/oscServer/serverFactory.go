package oscServer

import (
	"fmt"
	"github.com/hypebeast/go-osc/osc"
)

func createServer() (*osc.Server, *osc.StandardDispatcher) {
	var dispatcher = osc.NewStandardDispatcher()

	var server = &osc.Server{
		Addr:       "127.0.0.1:9000", // TODO: use config
		Dispatcher: dispatcher,
	}

	fmt.Println("OSC server listening on", server.Addr)

	go listenAndServe(server)

	return server, dispatcher
}

func listenAndServe(server *osc.Server) {
	err := server.ListenAndServe()
	if err != nil {
		fmt.Println(err)
	}
}
