import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #15dfdb;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: 1;

    @keyframes beat {
        0% {
            transform: scale(1) rotate(-35deg);
        }
        50% {
            transform: scale(0.6) rotate(-35deg);
        }
    }
`;

const AboutName = styled.div`
    text-align: center;
    border: white 5px solid;
    background-color: #30a98f;
`;

const AboutH2 = styled.h2`
    font-family: 'Quicksand', sans-serif;
    font-size: 30;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #FFFFFF;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #75c4b2;
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

const About = ({ avatar, name, age, profession, bio, address, social }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt={name}/>
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
                {/* <AboutH2>{age}</AboutH2> */}
            </AboutName>
            <div className="About-profession">
                <AboutProfession>{profession}</AboutProfession>
            </div>
            <div className="About-desc">
                <AboutBio>{bio}</AboutBio>
            </div>
            <div className="About-location">
                <AboutLocation>{address}</AboutLocation>
            </div>
            <div className="About-social">
                <Social social={social}/>
            </div>
        </div>
    </AboutStyle>
);

export default About;