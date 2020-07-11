import React, { memo } from "react"
import styled from "styled-components"

const NavbarCollapseTogglerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 1rem 0;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 10000;
  min-width: 50px;
  #navbar-toggler-icon {
    width: 20px;
    height: 2px;
    box-shadow: none;
    background-color: transparent;
    position: relative;
    transition: background-color 0.3s linear, box-shadow 0.3s linear;
    &:before,
    &:after {
      content: "";
      box-shadow: ${({ theme }) => theme.navLinkShadow};
      background-color: ${({ theme }) => theme.font};
      position: absolute;
      height: 2px;
      width: 100%;
      left: 0;
      top: 0;
      transition: background-color 0.3s linear, box-shadow 0.3s linear,
        transform 0.3s linear, top 0.3s linear;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(135deg);
    }
  }
  &:hover,
  &:focus {
    #navbar-toggler-icon {
      background-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
      &:before,
      &:after {
        background-color: var(--green);
        -webkit-box-shadow: 0 0 4px 0 var(--green);
        box-shadow: 0 0 4px 0 var(--green);
      }
    }
  }
  &.collapsed {
    #navbar-toggler-icon {
      box-shadow: ${({ theme }) => theme.navLinkShadow};
      background-color: ${({ theme }) => theme.font};
      &:before,
      &:after {
        transform: rotate(0);
      }
      &:before {
        top: -5px;
      }
      &:after {
        top: 5px;
      }
    }
    &:hover,
    &:focus {
      #navbar-toggler-icon {
        background-color: var(--green);
        -webkit-box-shadow: 0 0 4px 0 var(--green);
        box-shadow: 0 0 4px 0 var(--green);
      }
    }
  }
`

function NavbarCollapseToggler({ open, toggleOpen }) {
  return (
    <NavbarCollapseTogglerContainer
      className={`${open ? "" : "collapsed"}`}
      onClick={() => toggleOpen()}
    >
      <div id="navbar-toggler-icon"></div>
    </NavbarCollapseTogglerContainer>
  )
}

export default memo(NavbarCollapseToggler)
