var faker = require('faker');

Feature('Buy Subscription Pack');

Scenario('Customer Buy Subscription Pack Using Stripe Gateway', (I) => {
    // I.amOnPage('/');
    // I.click('Registration');
    I.amOnPage('/registration');
        I.seeInCurrentUrl('/subscription');
        I.click('//div[3]/a');      //On subscription page click Sign Up button
        I.fillField('Email', faker.internet.email());
        I.fillField('//*[@id="password_291_1"]', '!!@@1122qq');
        I.fillField('//*[@id="password_291_2"]', '!!@@1122qq');
        I.click('submit');
        I.see('Payment');
        I.see('Pricing & Plans');
        
        // I.bankPayment();
        
        I.stripePayment();
      
});