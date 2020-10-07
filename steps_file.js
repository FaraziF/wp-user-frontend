// in this file you can append custom step methods to 'I' object
var faker = require('faker');
module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    loginAsAdmin: function () {
      this.amOnPage('/login');
      this.fillField('Username or Email', 'admin');
      this.fillField('Password', secret('admin'));
      this.checkOption('Remember Me');
      this.click('wp-submit');
      this.dontSeeElement('.wpuf-error');
      this.amOnPage('/account');
      this.see('Hello admin');
    },
    loginAsSubscriber: function () {
      this.amOnPage('/login');
      this.fillField('Username or Email', 'Ward_Mayer51');
      this.fillField('Password', secret('!!@@1122qq'));
      this.checkOption('Remember Me');
      this.click('wp-submit');
      this.dontSeeElement('.wpuf-error');
      this.amOnPage('/account');
      this.see('Hello Ward_Mayer51');
    },
    stripePayment: function () {
      this.checkOption('Credit Card');
          this.pressKey('Tab');
          this.wait(5);
          this.type('4242424242424242');
          this.wait(2);
          this.type('12');
          this.wait(2);
          this.type('21');
          this.wait(2);
          this.type('121');
          this.wait(2);
          this.type('10005');
          this.click('wpuf_payment_submit');
          this.wait(5);
          this.see('Payment is complete');
    },
    bankPayment: function () {
        this.checkOption('Bank Payment');
            // this.checkOption('Credit Card');
            // this.click('submit');
            this.click('wpuf_payment_submit');
            this.see('Order Received'); //h1 use
            this.seeInCurrentUrl('/order-received/');
            // this.see('Congratulations, your payment has been completed!'); //p tag use
    },
    buySubscription: function () {
      this.click('//div[3]/a');      //On subscription page click Sign Up button
      this.fillField('first_name', faker.name.firstName());
      this.fillField('user_login', faker.name.lastName());
      this.fillField('Email', faker.internet.email());
      this.fillField('//*[@id="password_291_1"]', '!!@@1122qq');
      this.fillField('//*[@id="password_291_2"]', '!!@@1122qq');
      this.click('submit');
      this.see('Payment');
      // this.see('Pricing & Plans');
    }

  });
}
