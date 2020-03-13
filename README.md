# Quetzalcoatl

This project was built on top of NestJS Framework

## Docker configuration

first of all it's necessary to configure mongodb\
now that run use docker to run following command

```bash
docker run --name mongodb -p 27017:27017 -d mongo
```

## Installation

it's necessary to install NestJS

```bash
npm i -g @nestjs/cli
```

and install the project dependencies

```bash
npm -i
```

now you're ready to run the project executing

```bash
npm run start:dev
```
