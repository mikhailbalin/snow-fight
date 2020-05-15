const verifyCaptcha = require('./_utils/verifyCaptcha');

module.exports = async (req, res) => {
  const { status, data } = await verifyCaptcha({
    ...req.body,
    postEvent: 'snow_fight_email_post'
  });
  res.status(status).send(data);
};
