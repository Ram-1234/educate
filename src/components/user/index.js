import React from 'react';
import { Header } from "../header";
import { Card } from './card';
import {
    container,
    referralTitleStyle,
    referralBoxStyle,
    referralTextStyle,
    withdrawReferralBoxStyle,
    withdralReferralStyle,
    withdrawlBalanceStyle,
    buttonContainerStyle,
    titleStyle,
    subtitleStyle,
    childrenStyle,
    cardsContainerStyle,
    mainBodyStyle
} from "./style";

import discount from "../resources/discount.png";
import friend from "../resources/friend.png";
import tag from "../resources/tag.png";
import wallet from "../resources/wallet.png";
import rupee from "../resources/rupee.png";

const card = [
    {
        image: friend,
        title: "Invite your Friends",
        subtitle: "Share the link tutedude.com with your friends"
    },
    {
        image: tag,
        title: "Friend purchages any course",
        subtitle: "Using your REFERRAL CODE in the payments page"
    },
    {
        image: rupee,
        title: "You get ₹ 200 as referral money",
        subtitle: "On total purchages the friend makes, into your wallet"
    },
    {
        image: discount,
        title: "Your Friend gets ₹ 200 off",
        subtitle: "On his overall fee on successful purchase using your referral code"
    },
    {
        image: wallet,
        title: "Transfer money from wallet",
        subtitle: "When the wallet balance reaches ₹ 200 or more, you can withdraw it "
    }
]


const User = () => {
    const buttonStyle = {
        background: '#800080',
        border: 'none',
        color: 'white',
        borderRadius: '15px',
        padding: '8px 10px',
        fontSize: '10px',
        fontWeight: 'bold'
    }

    const childBoxStyle = {
        margin: '3px 10px',
        padding: '5px 10px'
    }

    const wrapperStyle = {
        // border: '1px solid green',
        width: '75%',
    }

    const cardWrapperStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'start',
    }

    const friendsEnrolledStyle = {
        color: '#800080',
        fontSize: '12px',
        margin: '10px 0',
        padding: '0',
        fontWeight: 'bold'

    }

    return (
        <div style={container} className='user__container'>
            <Header />
            <div style={mainBodyStyle}>
                <div style={wrapperStyle} className='wrapper'>
                    <div style={withdrawReferralBoxStyle} className='main__page'>
                        <div style={withdralReferralStyle} className='withdraw__referral'>
                            <div style={withdrawlBalanceStyle} className='withdraw__balance'>
                                <div style={childrenStyle} className='children__element'>
                                    <div style={childBoxStyle} className='referral__earning'>
                                        <div style={titleStyle} className='title'>Referral Earcning</div>
                                        <div style={subtitleStyle} className='subtitle'>₹ 2,500</div>
                                    </div>
                                    <div style={childBoxStyle} className='total__referral'>
                                        <div style={titleStyle} className='title'>Referral Earcning</div>
                                        <div style={subtitleStyle} className='subtitle'>7</div>
                                    </div>
                                    <div style={childBoxStyle} className='wallet__balance'>
                                        <div style={titleStyle} className='title'>Wallet Balance</div>
                                        <div style={subtitleStyle} className='subtitle'>₹ 500</div>
                                    </div>
                                </div>
                                <div style={buttonContainerStyle} className='withdraw__button'>
                                    <button style={buttonStyle} >Withdraw Balance</button>
                                </div>
                            </div>
                            <div style={referralBoxStyle} className='referral__code'>
                                <div style={referralTitleStyle}>Your Referral Code</div>
                                <div style={referralTextStyle}>EDCH54</div>
                            </div>
                        </div>
                    </div>
                    <div style={cardsContainerStyle} className='user__needs'>
                        <h1>How does it work?</h1>
                        <div style={cardWrapperStyle} className='card__wrapper'>
                            {card && card?.map((item, index) => <Card
                                key={index}
                                image={item.image}
                                title={item.title}
                                subtitle={item.subtitle}
                            />)}
                        </div>
                    </div>
                    <div style={{ margin: '15px 0' }} className='enrolled_friends'>
                        <p style={friendsEnrolledStyle} className='friends__enrolled'>Friends Who Enrolled</p>
                        <p style={friendsEnrolledStyle} className='terms__conditions'>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { User }