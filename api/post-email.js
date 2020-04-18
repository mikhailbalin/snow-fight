const axios = require('axios').default;
const getIftttUrl = require('./_utils/getIftttUrl');

module.exports = (req, res) => {
  axios
    .post(getIftttUrl('snow_fight_email_post'), req.body)
    .then(response => {
      res.status(response.status);
      res.send(response.data);
    })
    .catch(error => {
      res.status(error.response.status);
      res.send(error.response.data);
    });
};
