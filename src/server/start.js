const app = require('./index.js');

const PORT = process.env.PORT || 3000;

// const receiveMessage = require('../lib/twilio/receiveMessage.js');

// TODO: break endpoints into a separate routes file
app.post('/sms', (req, res) => {
  console.log(req.body);
  const message = req.body.Body;
  // const twiml = receiveMessage('TESTING RESPONSE TO MESSAGE');

  // res.writeHead(200, { 'Content-Type': 'text/xml' });
  // res.end(twiml.toString());
});

app.listen(
  PORT,
  () => console.log(`Server listening on PORT ${PORT}`),
);
