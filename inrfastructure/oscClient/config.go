package oscClient

type Client struct {
	Host string
	Port int
}

var config = Client{
	Host: "localhost",
	Port: 9000,
}
