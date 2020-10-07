var faker = require('faker');
Feature('Configure and Buy Subscription Pack Using Stripe Gateway');

Scenario('Create Subscription Pack And SetUp Paymeny Gateway', (I) => {
    I.loginAsAdmin();
    I.amOnPage('/wp-admin');
    I.click('Pages');
        I.see('WPUF Subscription Page');
    
    // Add New Subscription 
    I.click('User Frontend');
    I.click('Subscriptions');
        I.click('Add Subscription');
            I.fillField('Pack Name','Monthly Discount Pack');
            I.click('//div[@id="mceu_32"]');
            I.type('This monthly special pack is for all subscriber');
            //Payment Settings 
            I.fillField('#wpuf-billing-amount', '50');
            I.fillField('#wpuf-expiration-number', '10');
            I.selectOption('#expiration-period', 'Day(s)');
            I.scrollPageToTop();
            I.wait(5);
        I.forceClick('Publish');
        I.see('Subscription pack published.');
    
    // Payments settings enable with Registration time redirect to subscription page
    I.amOnPage('/wp-admin/admin.php?page=wpuf-settings');
    // I.click('Settings');
        I.click('Payments');
            I.checkOption('wpuf_payment[enable_payment]');
            I.selectOption('wpuf_payment[subscription_page]','Subscription');
            I.checkOption('wpuf_payment[register_subscription]');
            I.selectOption('wpuf_payment[currency]','US Dollar ($)');
            I.selectOption('wpuf_payment[currency_position]','Left ($99.99)');
            I.checkOption('wpuf_payment[sandbox_mode]');
            I.selectOption('wpuf_payment[payment_page]','Payment');
            I.selectOption('wpuf_payment[payment_success]','Thank You');
            I.checkOption('wpuf_payment[active_gateways][paypal]');
            I.checkOption('wpuf_payment[active_gateways][bank]');
            I.checkOption('wpuf_payment[active_gateways][stripe]');
            I.selectOption('wpuf_payment[bank_success]','Order Received');
            I.fillField('wpuf_payment[paypal_email]','farazi.test@gmail.com');
            I.fillField('wpuf_payment[paypal_api_username]','farazi');
            I.fillField('wpuf_payment[paypal_api_password]','farazi');
            I.fillField('wpuf_payment[paypal_api_signature]','farazi');
            I.checkOption('wpuf_payment[use_legacy_stripe_api]');
            I.checkOption('wpuf_payment[use_stripe_3ds]');
            I.fillField('wpuf_payment[stripe_api_secret]','sk_test_U9NMSvn0VKUzN9UZ5gPPnUpi');
            I.fillField('wpuf_payment[stripe_api_key]','pk_test_cwBhsWC96Ek7RwvVjIJV1rQa');
            I.click('//div[@id="wpuf_payment"]//form//div//input[@id="submit"]');
            I.wait(5);
            I.waitForElement('#wpuf_payment', 5);
            I.seeInCurrentUrl('/wp-admin/admin.php?page=wpuf-settings&settings-updated=true');
            I.see('Settings saved.');
});
Scenario('Customer Buy Subscription Pack Using Stripe Gateway', (I) => {
    I.amOnPage('/');
    // I.click('Registration');
    I.amOnPage('/registration');
        I.seeInCurrentUrl('/subscription');
        I.buySubscription();
        // I.bankPayment();
        I.stripePayment();
});


