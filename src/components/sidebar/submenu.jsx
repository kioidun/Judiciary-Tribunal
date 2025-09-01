import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";
import styled from "styled-components";
import "./sidebar.css";
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #000000;
    border-left: 4px solid #04aa6d;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  display: inline-block;
  width: 250px;
  margin-top: 20px;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    color: #000000;
    
    cursor: pointer;
  }
`;

// border-left: 4px solid #04aa6d;
const DropdownLinkTwo = styled(Link)`
  background: #928830;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  margin-top: 20px;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  width: 300px;
  margin-left: 20px;

  &:hover {
    background: #000000;

    cursor: pointer;
  }
`;

const SidebarLabell = styled.a``;

function Submenu({ item }) {
  const [subnav, setSubNav] = useState(false);
  const [subNavTwo, setSubNavTwo] = useState(false);
  const [subNavTwoStates, setSubNavTwoVisibility] = useState({});

  const toggleSubNavTwo = (title) => {
    let isVisible = true;
    if (subNavTwoStates[title]) {
      isVisible = !subNavTwoStates[title];
    }
    console.log({ ...subNavTwoStates, [title]: isVisible });
    setSubNavTwoVisibility({ ...subNavTwoStates, [title]: isVisible });
  };

  const showSubNav = () => setSubNav(!subnav);
  return (
    <div>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>

      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <div>
              <SidebarLabel
                onClick={() => {
                  toggleSubNavTwo(item.title);
                }}
              >
                {item.title}
              </SidebarLabel>
              </div>
               <div>
                {item.subNav && subNavTwo
                  ? item.iconOpened
                  : item.subNav
                  ? item.iconClosed
                  : null}
              </div> 
              {Boolean(subNavTwoStates[item.title]) &&
                item.subNav &&
                item.subNav.map((item, index) => {
                  return (
                    <DropdownLinkTwo to={item.path} key={index}>
                      <div className="sidelabel_drop">
                        <SidebarLabell>{item.title}</SidebarLabell>
                      </div>
                    </DropdownLinkTwo>
                  );
                })}
            </DropdownLink>
          );
        })}
    </div>
  );
}

export default Submenu;
