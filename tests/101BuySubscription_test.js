var faker = require('faker');

Feature('Buy Subscription Pack');

Scenario('Customer Buy Subscription Pack Using Stripe Gateway', (I) => {
    I.amOnPage('/');
    // I.click('Registration');
    I.amOnPage('/registration');
        I.seeInCurrentUrl('/subscription');
        I.click('//div[3]/a');          //click Sign Up button
        I.fillField('Email', faker.internet.email());
        I.fillField('//*[@id="password_291_1"]', '!!@@1122qq');
        I.fillField('//*[@id="password_291_2"]', '!!@@1122qq');
        I.click('submit');
        I.see('Payment');
        I.see('Pricing & Plans');
        I.checkOption('Bank Payment');
        I.click('wpuf_payment_submit');
        I.see('Order Received');
        
        // I.checkOption('Credit Card');
        // I.see('Payment is complete'); //h1 use
        // I.see('Congratulations, your payment has been completed!'); //p tag use
        // /html/body/div/form/div/div[2]/span[1]/span[2]/div/div[2]/span/input
        
});