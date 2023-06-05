import React from 'react';
import book from "../resources/open-book.png";
import user from "../resources/user.png";
import {
    logoStyle,
    logoImageStyle,
    userImageStyle,
    headerStyle,
    userProfileStyle,
    userStyle,
    boxStyle,
    profileNameStyle,
    logoNameStyle
} from "./style"

const Header = () => {

    return (
        <div style={headerStyle} className='header__container'>
            <div style={logoStyle} className='logo'>
                <img style={logoImageStyle} src={book} alt='logo' />
                <span style={logoNameStyle}>TuteDude</span>
            </div>
            <div style={userProfileStyle} className='user__profile'>
                <div style={boxStyle} className='my__assignment'>My Assignment</div>
                <div style={boxStyle} className='chat__with__mentor'>Chat With Mentor</div>
                <div style={userStyle} className='user__dropdown'>
                    <img style={userImageStyle} className='user__image' src={user} alt='user' />
                    <select style={{ border: "none", ...profileNameStyle }}>
                        <option >ProfileName</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export { Header }