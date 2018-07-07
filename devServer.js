var path = require('path');
var app = require('express')();
const Bundler = require('parcel-bundler');

const file = path.join(__dirname, './index.html');
const PORT = process.env.PORT || 7770;

const options = {
  sourceMaps: false
};

const bundler = new Bundler(file, options);

app.use(bundler.middleware());

app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at PORT ${PORT}`);
});
