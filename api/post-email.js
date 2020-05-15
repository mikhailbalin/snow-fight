const verifyCaptcha = require('./_utils/verifyCaptcha');

module.exports = ({ body: reqData }, res) => {
  console.log({ reqData });
  const { status, data } = verifyCaptcha(reqData);
  res.status(status).send(data);
};
