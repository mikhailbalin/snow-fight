const verifyCaptcha = require('./_utils/verifyCaptcha');

module.exports = (req, res) => {
  console.log('req.body', Object.keys(req.body));
  const { status, data } = verifyCaptcha(req.body);
  res.status(status).send(data);
};
