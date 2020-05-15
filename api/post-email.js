const verifyCaptcha = require('./_utils/verifyCaptcha');

module.exports = ({ body: reqData }, res) => {
  const { status, data } = verifyCaptcha(reqData);
  res.status(status).send(data);
};
