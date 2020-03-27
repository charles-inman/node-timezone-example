# Sample Web and Api

A simple application that allows a user to know the timeszone in multiple locations


### Prerequisites

What things you need to install the software and how to install them

* [Node JS](https://nodejs.org/en/) - The web framework used
* [Docker](https://www.docker.com/) - Dockerise everything
* [Yarn](https://yarnpkg.com/) - Another package manager

## Installing

### Development

Once in the console for the project

```
cd api && npm install
```

And on the web (go up a level)

```
cd web && yarn install

```

Open 3 Consoles - open in the root project folder

###WEB
```
cd web && yarn dev

```

###API
```
cd api && npm start

```

###Database Mysql
```
cd api && docker-compose -f "docker-db.yml" up

```

## Running the tests

No current tests, Code is written in a way that's easy to test
Example
```
	import React from "react";

	const Cell = ({text}) => (
		<td>
			{text}
		</td>
	);

	export default Cell;
```


### Project doesn't contain linting - you should do this however for all your projects especially in production - this project is just prettified.

## Deployment
Create docker containers
```
cd api && docker build --tag labs-api .
```
```
cd web && docker build --tag labs-web .
```

After containers are complete

#### NOT WORKING YET

My hope is to have a version you can literally just run this command
```
cd api && docker compose up
```
