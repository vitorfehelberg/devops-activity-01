# Activity 01 — Node.js, Express, and Docker
## Docker
### Start Environment
Run the following command from `~/devops/activity-01` in the Ubuntu terminal:
```bash
docker run --rm -it \
  --name activity-01 \
  -p 3000:3000 \
  -v "$PWD:/workspace" \
  -w /workspace \
  node:22-bookworm \
  bash
```
This command starts a container with `Node.js` and `npm`, maps `port 3000` to the host, and mounts the current directory at `/workspace`.

### Stop Environment
To exit the container, run:
```bash
exit
```
The container is automatically removed because of the `--rm` option. Project files remain in the Ubuntu directory.

## Node.js
### Run JavaScript
```bash
node app.js
```

### Run Express Generator
```bash
npx express-generator
```

### Create an Express Application
```bash
npx express-generator myExpressApp --view pug
```
This command creates an `Express` application in the `myExpressApp` directory, using `Pug` as its template engine.

### Install Dependencies
```bash
cd myExpressApp
npm install
```

### Start the Server
```bash
npm start
```

## Server
Open the application in your browser: [http://localhost:3000](http://localhost:3000).

### Stop the Server
To stop the running server, press `Ctrl+C`. This stops the server process but leaves the container running. To exit the container as well, run:
```bash
exit
```