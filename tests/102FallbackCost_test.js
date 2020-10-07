var faker = require('faker');
Feature('Fallback Cost for Form Subscription Payment');

Scenario('Payment Settings from post form', (I) => {
    I.loginAsAdmin();
    I.amOnPage('/wp-admin');
    I.click('User Frontend');
    I.click('Subscription');
    I.click('//tr[1]/td/strong/a');
    I.click('Posting Restriction');
    I.fillField('post_type_name[post]', '2');
    I.click('Update');
    I.click('Post Forms');
        I.click('//*[@id="the-list"]/tr[1]/td[1]/a');
        I.click('.form-id');
        I.wait(5);
    I.click('Settings', 'h2');
        // I.click('Submission Restriction');
        // I.checkOption('Enable Guest Post');
        // I.uncheckOption('Require Name and Email address');
        // I.wait(2);
    I.click('Payment Settings');
        I.checkOption('Enable Payments');
        I.checkOption('Force subscription pack');
        I.checkOption('Fallback pay per post charging');
        I.fillField('wpuf_settings[fallback_ppp_cost]', '1');
        I.checkOption('Enable Pay Per Post');
        I.fillField('wpuf_settings[pay_per_post_cost]', '3');
    I.click('Save Form');
});

Scenario('Subscriber submit fallback cost post & pay per post', (I) => {
    I.amOnPage('/test-page/'); 
    I.see('You need to buy a pack to post in this form.');
    I.amOnPage('/subscription/');
    I.buySubscription();
    // I.bankPayment();
    I.stripePayment();
    I.amOnPage('/test-page/');
        I.fillField('post_title', faker.lorem.sentence());
        I.fillField('post_content', faker.lorem.paragraph());
        I.click('submit');
        I.see('Post saved');
    I.refreshPage();
        I.fillField('post_title', faker.lorem.sentence());
        I.fillField('post_content', faker.lorem.paragraph());
        I.click('submit');
        I.see('Post saved');
    I.refreshPage();
        I.see('Your Subscription pack is exhausted.');
            I.fillField('post_title', faker.lorem.sentence());
            I.fillField('post_content', faker.lorem.paragraph());
            I.click('submit');
        // I.stripePayment();
    I.bankPayment();
            session('admin approve transaction', () => {
                // another session started
                I.loginAsAdmin();
                I.amOnPage('/wp-admin/admin.php?page=wpuf_transaction');
                I.click('Pending');
                I.seeInCurrentUrl('/wp-admin/admin.php?page=wpuf_transaction&status=pending');
                I.moveCursorTo('//tbody[@id="the-list"]//tr[1]//td[1]');
                I.click('Accept');
            });
    

});
