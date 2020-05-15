module.exports = values => {
  const items = Object.keys(values);
  const amountOk = items.length <= 3;
  const namesOk = items.every(val => val.startsWith('value'));
  return amountOk && namesOk;
};
