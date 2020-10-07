Feature('settings');

Scenario('test something', (I) => {
    I.loginAsAdmin();
    I.amOnPage('/wp-admin');
    I.click('User Frontend');
    // pause();
    I.click('Modules');
    I.click('#activate-all-modules');
    I.amOnPage('/wp-admin/admin.php?page=wpuf-settings');
    I.click('General Options');
    I.fillField('wpuf_general[recaptcha_public]', '6LfQZysUAAAAAF_En1WgClx57i80UFzZqV5i7HCF');
    I.fillField('wpuf_general[recaptcha_private]', '6LfQZysUAAAAAHhxUVHnv0Z4TCBimL8R5GPXbHSU');
    I.fillField('wpuf_general[gmap_api_key]', 'AIzaSyCiSPh9A7SYaO2sbZQ4qQo11AWyYB3UFvY');
    I.click('submit');
    I.click('Save Changes');
});
