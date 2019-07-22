<?php
namespace Step\Acceptance;

class Admin extends \AcceptanceTester
{

    public function loginAsAdmin()
    {
        $I = $this;
        $I->amOnPage('/wp-admin');
    	$I->fillField('#user_login', 'admin');
	    $I->fillField('#user_pass', 'admin');
	    $I->click('Log In');
    }

}