<?php 
//namespace Scenario;


class GuestPostCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    // tests
    public function guestPost(\Step\Acceptance\Admin $I)
    {
    	$I->loginAsAdmin();
    }
}
