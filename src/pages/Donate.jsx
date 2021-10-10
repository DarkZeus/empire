import React from 'react';
import {LightBlock} from "../components/LightBlock";
import {DonatePage} from "../components/Donate/DonatePage";
import {Discounts} from "../components/Donate/Discounts";
import {Actions} from "../components/Donate/Actions";
import {AccountReplenish} from "../components/Donate/AccountReplenish";
import {MainSection} from "../components/Donate/MainSection";
import {Cashbox} from "../components/Donate/Cashbox";
import {Navbar} from "../components/Navbar/Navbar";
import {ucpLinks} from "../components/Navbar/const";
import {RecentOperations} from "../components/Donate/RecentOperations";
import {Footer} from "../components/Footer";

export const Donate = () => {
    return (
        <div>
            <Navbar logo={true} profile={true} classNames="header-profile" links={ucpLinks} />

            <LightBlock>
                <DonatePage>
                    <Actions />
                    <MainSection>
                        <AccountReplenish />
                        <Cashbox />
                        <RecentOperations />
                    </MainSection>
                    <Discounts />
                </DonatePage>
            </LightBlock>

            <Footer />
        </div>
    );
};