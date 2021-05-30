export const emailRule = {
  data() {
    return {
      emailRules: [
        (value) => !!value || 'Введите вашу почту.',
        (value) => value.indexOf('@') !== 0 || 'Email should have a username.',
        (value) => value.includes('@') || 'Email should include @ symbol.',
        (value) =>
          value.indexOf('.') <= value.length - 3 ||
          'Email should contain a valid domain extension.',
      ],
    };
  },
};

export const nameRule = {
  data() {
    return {
      nameRules: [(value) => !!value || 'Введите вашe имя.'],
    };
  },
};

export const messageRule = {
  data() {
    return {
      messageRules: [(value) => !!value || 'Введите сообщение.'],
    };
  },
};
