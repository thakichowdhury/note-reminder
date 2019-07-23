const PORT = node.env.PORT || 3000;

const app = require('./index.js');

app.listen(
  PORT,
  () => console.log(`Server listening on PORT ${PORT}`),
);
