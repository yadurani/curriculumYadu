import React from 'react'
import styled from 'styled-components';

const LoaderStyle = styled.div`
    margin: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    position: relative;
    display: flex;
    background: white;
    padding: 150px;
`;

const SpanStyle = styled.span`
    display: block;
    width: 35px;
    height: 35px;
    background: #eee;
    border-radius: 50%;
    margin: 0 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    &:nth-child(1) {
        background: url("https://res.cloudinary.com/simplecol/image/upload/v1585884179/github_ghasfi.png");
    }
    &:nth-child(2) {
        background: url("https://res.cloudinary.com/simplecol/image/upload/v1585883044/node_voqklq.png");
    }
    &:nth-child(3) {
        background: url("https://res.cloudinary.com/simplecol/image/upload/v1585883204/js_xjjdmu.png");
    }
    &:nth-child(4) {
        background: url("https://res.cloudinary.com/simplecol/image/upload/v1585883340/mongo_cxd38j.png");
    }
    &:nth-child(5) {
        background: url("https://res.cloudinary.com/simplecol/image/upload/v1585883509/react_pjadvb.png");
    }
    &:not(:last-child) {
        animation: animate 1.5s linear infinite;
    }
    @keyframes animate {
        0% {
            transform: translateX(0);
        }
    
        100% {
            transform: translateX(110px);
        }
    }
    &:last-child {
        animation: jump 1.5s ease-in-out infinite;
    }
    @keyframes jump {
        0% {
            transform: translate(0, 0);
        }
        10% {
            transform: translate(10px, -10px);
        }
        20% {
            transform: translate(20px, 10px);
        }
        30% {
            transform: translate(30px, -50px);
        }
        70% {
            transform: translate(-150px, -50px);
        }
        80% {
            transform: translate(-140px, 10px);
        }
        90% {
            transform: translate(-130px, -10px);
        }
        100% {
            transform: translate(-120px, 0);
        }
    }
`;

export default function Loader() {
    return (
        <LoaderStyle>
            <SpanStyle />
            <SpanStyle />
            <SpanStyle />
            <SpanStyle />
            <SpanStyle />
            <SpanStyle />
        </LoaderStyle>
    )
}
