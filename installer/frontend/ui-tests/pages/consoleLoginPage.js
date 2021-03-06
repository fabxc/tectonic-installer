const consoleLoginPageCommands = {
  enterLoginCredentails(adminEmail) {
    return this
      .setValue('@email', adminEmail)
      .setValue('@password', 'password')
      .setValue('@confirmPassword', 'password')
      .click('@nextStep');
  },
};

module.exports = {
  url: '',
  commands: [consoleLoginPageCommands],
  elements: {
    email: {
      selector: 'input[id=adminEmail]',
    },
    password: {
      selector: 'input[id=adminPassword]',
    },
    confirmPassword: {
      selector: 'input[id=adminPassword2]',
    },
    nextStep: {
      selector:'//*[text()[contains(.,"Next Step")]]',
      locateStrategy: 'xpath',
    },
  },
};
