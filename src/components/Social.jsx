import React from "react";
import styled, { ThemeProvider } from "styled-components";

const SocialStyle = styled.div`
    margin: 0 auto;
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: 35px;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

const SocialLi = styled.li`
    display: flex;
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
    padding: 2px;
    background: #e2005a;
    margin-bottom: 1px;
    position: relative;
    &:hover:before {
        transform: scaleX(1);
    }
    &:before {
        content: "";
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        transform: scaleX(0);
        transform-origin: left center;
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
    }
    &.author {
        background: black;
        width: 100px;
        height: 150px;
        span {
            transform: rotate(90deg);
            color: white;
            margin-right: 60px;
            white-space: nowrap;
            font-size: 0.7em;
        }
    }
`;

const SocialAnchor = styled.a`
    z-index: 2;
    display: flex;
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
    color: #898888;
    text-decoration: none;
    font-size: 1em;
`;
const SocialIcon = styled.i`
    color: white;
`;

const facebook = {
    color: "#3b5998",
};

const twitter = {
    color: "#38A1F3",
};

const linkedin = {
    color: "#0E76A8",
};

const github = {
    color: "#333",
};

const getColor = (name) => {
    if (name === "facebook") return facebook;
    if (name === "behance") return twitter;
    if (name === "linkedin") return linkedin;
    if (name === "github") return github;
};

const Social = (props) => (
    <SocialStyle>
        {/* {JSON.stringify(props.social)} */}
        {props.social && (
            <SocialUl>
                {props.social.map((item, index) => (
                    <SocialLi key={`Social.${index}`}>
                        <SocialAnchor href={item.url} target="_blank">
                            <ThemeProvider theme={getColor(item.name)}>
                                <SocialIcon className={`fa fa-${item.name}`} />
                            </ThemeProvider>
                        </SocialAnchor>
                    </SocialLi>
                ))}
                <SocialLi className="author">
                    <span> ©2020 Yadu López</span>
                </SocialLi>
            </SocialUl>
        )}
    </SocialStyle>
);

export default Social;
