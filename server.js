import app from "./App.js"
const port = 3001 || process.env.port

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
  });