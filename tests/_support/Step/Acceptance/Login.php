<?php
namespace Step\Acceptance;

class Login extends \AcceptanceTester
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