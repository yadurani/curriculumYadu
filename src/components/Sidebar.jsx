import React from "react";
import styled from "styled-components";

const SidebarStyle = styled.div`
    position: fixed;
    width: 150px;
`;

const Sidebar = ({ children }) => (
    <SidebarStyle>
        <div className="sidebar-container">{children}</div>
    </SidebarStyle>
);

export default Sidebar;
