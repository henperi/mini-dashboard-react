import React from 'react';
import PropsTypes from 'prop-types';

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
        <div className="icon__item icon__item--selected col col__crossAxis--center col__mainAxis--center">
          <div className="item-hover" />
          <object className="svg" data={dashBoardSvg} type="image/svg+xml" aria-label="dashboard" />
        </div>
        <div className="icon__item col col__crossAxis--center col__mainAxis--center">
          <div className="item-hover" />
          <object className="svg" data={inboxSvg} type="image/svg+xml" aria-label="inbox" />
        </div>
        <div className="icon__item col col__crossAxis--center col__mainAxis--center">
          <div className="item-hover" />
          <object className="svg" data={starSvg} type="image/svg+xml" aria-label="star" />
        </div>
        <div className="icon__item col col__crossAxis--center col__mainAxis--center">
          <div className="item-hover" />
          <object className="svg" data={cloudSvg} type="image/svg+xml" aria-label="cloud" />
        </div>
        <div className="icon__item col col__crossAxis--center col__mainAxis--center">
          <div className="item-hover" />
          <object className="svg" data={binSvg} type="image/svg+xml" aria-label="bin" />
        </div>
      </Column>
    </div>

    <div className="sidebar-bottom">
      <div className="icon__item col col__crossAxis--center col__mainAxis--center">
        <div className="item-hover-default" />
        <object className="svg" data={plusSvg} type="image/svg+xml" aria-label="plus" />
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {
  forwardRef: PropsTypes.objectOf(PropsTypes.any).isRequired,
};
