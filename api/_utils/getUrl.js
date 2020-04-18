module.exports = (event = '') => {
  return `https://maker.ifttt.com/trigger/${event}/with/key/${process.env.IFTTT_KEY}`;
};
