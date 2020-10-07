Feature('Check Taxonomy Restruction from subscription');

Scenario('Enable & Configure taxonomy restriction from subscription ', (I) => {
    I.loginAsAdmin();
    I.amOnPage('/wp-admin/edit.php?post_type=wpuf_subscription');
    I.click('//tr[1]/td/strong/a');
    I.click('Taxonomy Restriction');
    I.click('.select-all');
    I.click('Update');
    I.amOnPage('/wp-admin/edit-tags.php?taxonomy=category');
            I.click('#cb-select-all-1');
                I.selectOption('#bulk-action-selector-top', 'Delete');
                    I.click('#doaction');
        I.fillField('tag-name', 'Food');
            // I.pressKey('Enter');
            I.click('submit');
            I.wait(2);
        I.fillField('tag-name', 'Sports');
            // I.pressKey('Enter');
            I.click('submit');
            I.wait(2);
        I.fillField('tag-name', 'Mango');
            I.selectOption('parent', 'Food');
                I.click('submit');
    I.amOnPage('/wp-admin/admin.php?page=wpuf-post-forms');
    I.click('Add Form');

    session('Check Taxonomy restriction with subscriber & not-subscriber', () => {
        // another session started
        I.amOnPage('/test-post');
            I.click('#category');
            I.wait(2);
        I.loginAsSubscriber(); // subscriber who buy subscription pack
            I.amOnPage('/test-post');
            I.click('#category');
            I.wait(2);
      });

});
