// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    loginAsAdmin: function () {
      this.amOnPage('/login');
      this.fillField('Username or Email', 'admin');
      this.fillField('Password', 'admin');
      this.checkOption('Remember Me');
      this.click('wp-submit');
      this.dontSeeElement('.wpuf-error');
      this.amOnPage('/account');
      this.see('Hello admin');
    },

  });
}
