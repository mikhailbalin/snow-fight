/* eslint-disable no-unused-vars */
const { verify } = require('hcaptcha');

module.exports = (req, res) => {
  const secret = process.env.CAPTCHA_SECRET;
  const token = 'token from widget';

  verify(secret, token)
    .then(data => console.log('success!', data))
    .catch(console.error);
};
