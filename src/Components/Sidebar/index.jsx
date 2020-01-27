import React from 'react';
import PropsTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Row } from '../../uiKit/Grid/Row';
import { Column } from '../../uiKit/Grid/Column';

import profileImage from '../../assets/images/profileImage.png';
import dashBoardSvg from '../../assets/images/dashboard.svg';
import inboxSvg from '../../assets/images/inbox.svg';
import starSvg from '../../assets/images/star.svg';
import cloudSvg from '../../assets/images/cloud.svg';
import binSvg from '../../assets/images/bin.svg';
import plusSvg from '../../assets/images/plus.svg';

import './Sidebar.scss';

export const Sidebar = ({ forwardRef }) => (
  <div
    className="sidebar col col-1 col-md-2 col-sm-3 col-xs-3 col__mainAxis--spaceBetween"
    ref={forwardRef}
  >
    <div className="sidebar__top">
      <Row mainAxis="center" className="margin__bottom--40">
        <img src={profileImage} alt="" />
      </Row>
      <Column>
        <NavLink activeClassName="icon__item--selected" to="/dashboard" className="icon__item col col__crossAxis--center col__mainAxis--center">
          <div className="item-hover" />
          <img alt="" className="svg" src={dashBoardSvg} aria-label="dashboard" />
        </NavLink>
        <NavLink activeClassName="icon__item--selected" to="/inbox" className="icon__item col col__crossAxis--center col__mainAxis--center">
          <div className="item-hover" />
          <img alt="" className="svg" src={inboxSvg} aria-label="inbox" />
        </NavLink>
        <NavLink activeClassName="icon__item--selected" to="/rewards" className="icon__item col col__crossAxis--center col__mainAxis--center">
          <div className="item-hover" />
          <img alt="" className="svg" src={starSvg} aria-label="star" />
        </NavLink>
        <NavLink activeClassName="icon__item--selected" to="/cloud" className="icon__item col col__crossAxis--center col__mainAxis--center">
          <div className="item-hover" />
          <img alt="" className="svg" src={cloudSvg} aria-label="cloud" />
        </NavLink>
        <NavLink activeClassName="icon__item--selected" to="/trash" className="icon__item col col__crossAxis--center col__mainAxis--center">
          <div className="item-hover" />
          <img alt="" className="svg" src={binSvg} aria-label="bin" />
        </NavLink>
      </Column>
    </div>

    <div className="sidebar-bottom">
      <NavLink activeClassName="icon__item--selected" to="/add" className="icon__item col col__crossAxis--center col__mainAxis--center">
        <div className="item-hover-default" />
        <img alt="" className="svg" src={plusSvg} aria-label="plus" />
      </NavLink>
    </div>
  </div>
);

Sidebar.propTypes = {
  forwardRef: PropsTypes.objectOf(PropsTypes.any).isRequired,
};
