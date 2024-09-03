package oscServer

type Server struct {
	Host string
	Port int
}

var config = Server{
	Host: "localhost",
	Port: 9001,
}
