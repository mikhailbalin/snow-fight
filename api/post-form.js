/* eslint-disable no-unused-vars */
const axios = require('axios').default;
const getUrl = require('./_utils/getUrl');
const { verify } = require('hcaptcha');

module.exports = (req, res) => {
  const token = req.body.token;

  if (token) {
    const secret = process.env.CAPTCHA_SECRET;

    verify(secret, token)
      .then(data => {
        // { success: false, 'error-codes': [ 'missing-input-secret' ] }
        // { success: true, challenge_ts: '2020-04-19T07:15:13', hostname: '127.0.0.1' }

        console.log('success!', data);

        if (data.success) {
          axios
            .post(getUrl('snow_fight_form_post'), req.body)
            .then(response => {
              res.status(response.status);
              res.send(response.data);
            })
            .catch(error => {
              res.status(error.response.status);
              res.send(error.response.data);
            });
        } else {
          res.send('captcha success false');
        }
      })
      .catch(err => {
        res.send('captcha err');
      });
  } else {
    res.send('no token');
  }
};
