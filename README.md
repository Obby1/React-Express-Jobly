# Welcome to Jobly - A job management API
## To Get Started
> download project files

> navigate to folder /backend in CLI

> npm init

> npm install

> connect to psql (run psql on CLI)

> in PSQL, run \i jobly.sql to seed database and test database with data

> to start server, node server.js

> navigate to /frontend

> npm install express


## To Interact with backend database
> POST request to http://localhost:3001/auth/token

> {
	"username": "testadmin",
	"password": "password"
}

> take note of admin token, we will send POST requests with Auth type Bearer Token if route requires Admin. Bearer type authentication can be set under "Auth Types" if using Insomnia or similar apps. 

## To send sample POST request

> Add auth token as instructed above and send POST request to http://localhost:3001/jobs

> response should be 201 Created
>{
	
	"title": "Hotdog Master",
	"salary": 9,
	"equity": "0.1",
	"companyHandle": "hall-mills"

}

> 


