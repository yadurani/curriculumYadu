import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
    background: white;
    height: calc(100vh - 2em);
    overflow: auto;
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
const Info = ({ children }) => (
    <InfoContainer>
        <div className="Info-container">{children}</div>
    </InfoContainer>
);

export default Info;
