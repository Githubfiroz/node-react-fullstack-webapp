const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi:'my first node web app.'});
});

//app.listen(5000); //http://localhost:5000/

//app.get() - get info, app.post() - send info, app.put() - Update All properties of something,
// app.delete()-delete something, app.patch() - update one or two properties of something


//Dynamic port binding - Heroku tells us which port our app will use,
//so we need to make sure we listen to the port they tell us to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
