import React from 'react';
import LogoMini from "../../assets/img/logo-mini.png"
import {NavbarProfile} from "./NavbarProfile";

export const Navbar = ({
                links,
                classNames = '',
                logo = false,
                profile = false
}) => {
    return (
        <nav className={`header-menu ${classNames}`}>
            {logo &&
            <div className="logo-mini"><img src={LogoMini} alt=""/></div>
            }

            {links}

            {profile &&
                <NavbarProfile />
            }
        </nav>
    );
};