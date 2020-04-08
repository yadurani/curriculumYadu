import React from 'react';
import styled from 'styled-components';

const SidebarStyle = styled.div`
    background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
`;

const Sidebar = ({ children }) => (
    <SidebarStyle>
        
        <div className="sidebar-container">
            {children}
        </div>
    </SidebarStyle>
);


export default Sidebar;