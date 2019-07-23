const app = require('./index.js');

const PORT = process.env.PORT || 3000;

// TODO: break endpoints into a separate routes file
app.post('/sms', (req, res) => {
  console.log(req.body);
  const message = req.body.Body;
});

app.listen(
  PORT,
  () => console.log(`Server listening on PORT ${PORT}`),
);
