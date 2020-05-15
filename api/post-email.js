const verifyCaptcha = require('./_utils/verifyCaptcha');

module.exports = (req, res) => {
  const test = verifyCaptcha(req.body);
  console.log('verifyCaptcha', test);
  if (test.status) res.status(status);
  res.send('data');
};
