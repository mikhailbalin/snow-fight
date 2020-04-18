const axios = require('axios').default;
const getUrl = require('./_utils/getUrl');

module.exports = (req, res) => {
  axios
    .post(getUrl('snow_fight_email_post'), req.body)
    .then(response => {
      res.status(response.status);
      res.send(response.data);
    })
    .catch(error => {
      res.status(error.response.status);
      res.send(error.response.data);
    });
};
