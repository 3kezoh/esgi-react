# esgi-react-template

Template folder for creating websites using the React library.

## Docker Compose service startup

*Starts the services listed in the [docker-compose.yaml](./docker-compose.yaml) file.*

### GNU/Make

```bash
make start
```

### Docker Compose

```bash
docker-compose up --detach
```

### NPM

*No equivalent.*

## Docker Compose services shutdown

*Stops the services listed in the [docker-compose.yaml](./docker-compose.yaml) file.*

### GNU/Make

```bash
make stop
```

### Docker Compose

```bash
docker-compose down --remove-orphans --volumes --timeout 0
```

### NPM

*No equivalent.*

## Docker Compose services restart

*Restarts the services listed in the [`docker-compose.yaml`](./docker-compose.yaml) file.*

### GNU/Make

```bash
make restart
```

### Docker Compose

```bash
docker-compose down --remove-orphans --volumes --timeout 0
docker-compose up --detach
```

### NPM

*No equivalent.*

## Node.js dependencies installation

*Installs all dependencies listed in the [`package.json`](./package.json) file.*

### GNU/Make

```bash
make install
```

### Docker Compose

```bash
docker-compose exec node npm install
```

### NPM

```bash
npm install
```

## Development server startup

*Starts the development server at [`localhost:8000`](./http://localhost:8000).*

### GNU/Make

```bash
make development
```

### Docker Compose

```bash
docker-compose exec node npm run development
```

### NPM

```bash
npm install
npm run development
```

## Code-style issues checking

*Check that all files are consistent accordint to the code-style configured in the [`.eslintrc.js`](./.eslintrc.js) file.*

### GNU/Make

```bash
make lint
```

### Docker Compose

```bash
docker-compose exec node npm run lint
```

### NPM

```bash
npm run lint
```

## Node artifacts cleanup

*Remove all Node.js and NPM generated files and prepare the folder project to be uploaded.*

### GNU/Make

```bash
make clean
```

### Docker Compose

```bash
docker-compose exec node npm run clean
```

### NPM

```bash
npm run clean
```
