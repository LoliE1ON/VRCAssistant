package oscServer

import (
	"fmt"
	"github.com/LoliE1ON/VRCAssistant/domain/application/model"
	"github.com/hypebeast/go-osc/osc"
)

func createServer() (*osc.Server, *osc.StandardDispatcher) {
	var dispatcher = osc.NewStandardDispatcher()

	var server = &osc.Server{
		Addr:       "127.0.0.1:9000", // TODO: use config
		Dispatcher: dispatcher,
	}

	go listenAndServe(server)

	return server, dispatcher
}

func listenAndServe(server *osc.Server) {
	model.Osc.ServerIsRunning = true

	fmt.Println("OSC server listening on", server.Addr)

	err := server.ListenAndServe()
	if err != nil {
		fmt.Println(err)

		model.Osc.ServerIsRunning = false
	}
}
