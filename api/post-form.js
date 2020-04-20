const axios = require('axios').default;
const { verify } = require('hcaptcha');
const getUrl = require('./_utils/getUrl');

module.exports = (req, res) => {
  const token = req.body.token;

  if (token) {
    const secret = process.env.CAPTCHA_SECRET;

    verify(secret, token)
      .then(data => {
        if (data.success) {
          axios
            .post(getUrl('snow_fight_form_post'), req.body)
            .then(response => {
              res.status(response.status);
              res.send(response.data);
            })
            .catch(err => {
              res.status(err.response.status);
              res.send(err.message);
            });
        } else {
          res.status(500).send('Form Captcha error');
        }
      })
      .catch(err => {
        res.status(err.response.status);
        res.send(err.message);
      });
  } else {
    res.status(500).send('No form token provided');
  }
};
