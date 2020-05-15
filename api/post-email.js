const verifyCaptcha = require('./_utils/verifyCaptcha');

module.exports = (req, res) => {
  const { status, data } = verifyCaptcha(req.body);
  console.log('verifyCaptcha', status, data);
  res.status(status).send(data);
};
