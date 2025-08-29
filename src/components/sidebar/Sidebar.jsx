import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from './submenu';

const Nav = styled.div`
  background:  #928830;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #928830;
  width:{['100%', '50%', 'auto']}
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  opacity:0.9;
  overflow: auto;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;
function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSideBar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar} >
        <SidebarWrap >
          <NavIcon to="#" >
            <AiIcons.AiOutlineClose onClick={showSideBar} />
          </NavIcon>
          {SidebarData.map((item,index)=>{
            return <SubMenu item={item} key={index} />
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
}

export default Sidebar;
