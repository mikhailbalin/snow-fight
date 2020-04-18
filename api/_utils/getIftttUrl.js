module.exports = (event = '') => {
  const iftttKey = 'gKycepwvypImjqVRhnRixMI-Kxfy4UJcxoVBlEj1qr';
  return `https://maker.ifttt.com/trigger/${event}/with/key/${iftttKey}`;
};
