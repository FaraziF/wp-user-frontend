<?php 
//namespace CreateNewPost;
use \Codeception\Util\Locator;


class GuestPostCheckAndEnableCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    // tests
    public function tryToTest(AcceptanceTester $I)
    {
    	   // If Guest post is disable then this script will run step by step and enable guest post.
    	// $I->loginAsAdmin();

        $I->amOnPage('/testing');
        $I->click('New Post');
        $I->see('This page is restricted. Please Log in / Register to view this page.');
        $nick = $I->haveFriend('nick');
        $nick->does(function(AcceptanceTester $I) {
                $I->loginAsAdmin();
                $I->amOnPage('/wp-admin');
                $I->wait(5);            
                $I->click(['link' => 'User Frontend']);
                $I->click('Post Forms');
                $I->click('Post Form');
                $I->click(['css' => 'a.nav-tab']);           
                $I->click('Settings', Locator::combine('h1','h2','h3'));
                $I->wait(5);
                $I->click('Submission Restriction');
                $I->checkOption('Enable Guest Post');
                $I->checkOption('Enable form entry limit');
                $I->fillField('wpuf_settings[limit_number]','50');
               // $I->checkOption('Require Email Verification for Guests');  
                $I->click('Save Form');
                $I->wait(5);       
            });
        $nick->leave();

        $I->amOnPage('/new-post');
        // $I->fillField('guest_name','Donald');
        // $I->fillField('guest_email','donald2@wedevs.com');
        $I->fillField('post_title','System analysis Part ten');
        $I->fillField('post_content','Analysing my new sytem part 10');   
        $I->click('Submit');    
        $I->wait(20);
    }
}
