package vrchat

import (
	"github.com/LoliE1ON/VRCAssistant/inrfastructure/oscClient"
	"github.com/LoliE1ON/VRCAssistant/inrfastructure/oscServer"
)

func DoTest() {
	oscServer.HandleTest()
	oscClient.SendTest()
}
