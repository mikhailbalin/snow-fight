const verifyCaptcha = require('./_utils/verifyCaptcha');

module.exports = async (req, res) => {
  const { status, data } = await verifyCaptcha(req.body);

  console.log({ status, data });
  console.log(
    '--------------------------------------------------------------------'
  );

  res.status(status).send(data);
};
