package osc

type Osc struct {
	Host       string
	ClientPort int
	ServerPort int
}

var oscConfig = Osc{
	Host:       "localhost",
	ClientPort: 9000,
	ServerPort: 9001,
}
