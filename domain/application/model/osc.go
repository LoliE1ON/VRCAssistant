package model

type OscModel struct {
	ServerIsRunning bool
	ClientIsRunning bool
}

var Osc = OscModel{
	ServerIsRunning: false,
	ClientIsRunning: false,
}
