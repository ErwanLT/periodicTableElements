const express = require('express');

const app = express();

app.use(express.static('./dist/periodicTableElements'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/periodicTableElements/'}),
);

app.listen(process.env.PORT || 8080);
