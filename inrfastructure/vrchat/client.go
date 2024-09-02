package vrchat

import (
	"fmt"
	"github.com/LoliE1ON/VRCAssistant/inrfastructure/osc"
)

func DoTest() {
	fmt.Println("test start")

	osc.HandleTest()
	osc.SendTest()
}
