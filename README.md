# SMITEARIFIC
![example workflow file path](https://github.com/RealSnowKid/smitearific/workflows/main/badge.svg)
[![Smitearific](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/s6jrsq&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/s6jrsq/runs)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/85b6a8c26f304aadaa3cc3410f147a5b)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=RealSnowKid/smitearific&amp;utm_campaign=Badge_Grade)

__SMITEARIFIC__ is a project, about displaying data about SMITE in an pretty & easy-to-understand manner.

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#how-to-run-locally">How to Run Locally</a></li>
    <li><a href="#how-to-setup-for-development">How to Setup for Development</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#steps">Steps</a></li>
        </ul>
    </li>
  </ol>
</details>

## About The Project
> The project itself is a website, that helps SMITE players get access to game and esports statistics displayed in a variety of easy to comprehend ways, informational articles, and more so that they can become better at the game.
> * The front-end is done via ReactJS
> * The back-end is done utilizing Spring

## Technologies Used
__SMITEARIFIC__ utilizes a number of frameworks and software to work:
* [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [NextJS](https://nextjs.org/) - The React Framework for Production.
* [React-Bootstrap](https://react-bootstrap.github.io/) - The most popular front-end framework rebuilt for React.
* [SCSS](https://sass-lang.com/) - The most mature, stable, and powerful professional grade CSS extension language in the world.
* [Spring](https://spring.io/) - Spring makes programming Java quicker, easier, and safer for everybody. Spring’s focus on speed, simplicity, and productivity has made it the world's most popular Java framework.
* [Docker](https://www.docker.com/) - Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
* [HiRezAPI](https://github.com/stachu540/HiRezAPI) - Reactive Java API Wrapper for Hi-Rez Studios games.
* [ParseHub](https://www.parsehub.com/) - A free web scraper that is easy to use.

## How to Run Locally
This section explains how to run the project locally.

1. Clone the repository
```bash
git clone https://github.com/RealSnowKid/smitearific
```

2. Install dependencies for the Web App and build it, after it is built - start it
```bash
cd smitearific_web_app
npm install
npm run build
npm run start
```

3. Run the APIs with Docker
```bash
cd smitearific_api
docker-compose build
docker-compose up -d
```

Now the project is ready to be run locally. Default URLs:
* Website URL: http://localhost:3000
* Stats API URL: http://localhost:8080
* Info API URL: http://localhost:8081

## How to Setup for Development
This section explains how to setup the project locally to be ready for development.

### Prerequisites
* An IDE (Visual Studio Code with Java extenstions recommended, could also use IntelliJ IDEA for the Java back-end)
* A local database (MySQL recommended)

### Steps
1. Clone the repository
```bash
git clone https://github.com/RealSnowKid/smitearific
```

2. Install dependencies for the Web App and run it
```bash
cd smitearific_web_app
npm install
npm run dev
```

3. Create an *application-dev.properties* file for all APIs

*The currently available APIs are info and stats*
```bash
cd smitearific_api\[api-name]\src\main\resources
cp application.properties application-dev.properties
```
*Modify the values in the new file according to your environment, it is recommended to add a server.port value also.*

4. Start the APIs
```bash
cd smitearific_api\[api-name]\src\main\resources
mvn spring-boot:run -D spring-boot.run.profiles=dev
```
Now the project is set-up locally, and is ready for development
*Note: The APIs need to be restarted after changes occur.*
