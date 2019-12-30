import React from 'react';
import Calendar from 'react-calendar';

import { Column } from '../../uiKit/Grid/Column';
import { Row } from '../../uiKit/Grid/Row';
import { Button } from '../../uiKit/Button';

import searchSvg from '../../assets/images/search.svg';
import bellSvg from '../../assets/images/bell.svg';
import folder from '../../assets/images/folder.svg';
import file from '../../assets/images/file.svg';
import gallery from '../../assets/images/picture.svg';
import picture1 from '../../assets/images/picture-1.png';
import lady from '../../assets/images/lady.png';

import { DisplayCard } from '../../Components/DisplayCard';
import { TableItem } from '../../Components/Table/TableItem';

import './DashboardStyle.scss';
import { Card } from '../../uiKit/Card';

export const DashboardPage = () => (
  <Row className="col-11 col-sm-12 main-content">
    <Column lg={9} md={12} sm={12} className="dashboard">
      <Row mainAxis="spaceBetween" crossAxis="spaceBetween">
        <span className="title">My dashboard</span>
        <div className="row row__crossAxis--center">
          <img className="top-icon" src={searchSvg} alt="" />
          <img className="top-icon" src={bellSvg} alt="" />
        </div>
      </Row>
      <Row className="col margin__vertical--20">
        <span className="subtitle text-light margin__vertical--20">Last modified</span>
        <Row mainAxis="spaceBetween">
          <DisplayCard
            title="Design"
            icon={folder}
            date="10/12/2019"
            profileImages={['', picture1, '']}
          />
          <DisplayCard
            title="Software.Doc"
            icon={file}
            date="10/02/2020"
            profileImages={['', '']}
          />
          <DisplayCard
            title="Images"
            icon={file}
            date="10/02/2020"
            profileImages={['', picture1, '']}
          />
        </Row>
      </Row>
      <Row className="col margin__vertical--20">
        <Row mainAxis="spaceBetween" crossAxis="center">
          <span className="subtitle text-light margin__vertical--20">Files</span>
          <div>
            <Button bgColor="accent" onClick={() => null}>
              Delete
            </Button>
            <Button bgColor="primary">Share</Button>
          </div>
        </Row>
      </Row>

      <Row className="hidden-sm-down">
        <div className="col-4">
          <input type="checkbox" name="" id="" />
          <span className="text text-light margin__horizontal--20">Name</span>
        </div>
        <div className="col-4">
          <span className="text text-light">Modified</span>
        </div>
        <div className="col-3">
          <span className="text text-light">Members</span>
        </div>
        <div className="col-1" />
      </Row>
      <Column>
        <TableItem
          icon={folder}
          title="User Research"
          dateTime="3/9/19, 3:40PM"
          profileImages={['', picture1, '']}
        />
        <TableItem
          icon={folder}
          title="User Research"
          dateTime="3/9/19, 3:40PM"
          profileImages={['', picture1]}
        />
        <TableItem
          icon={file}
          title="Meeting Notes"
          dateTime="3/9/19, 3:40PM"
          profileImages={['', picture1, '']}
        />
        <TableItem
          icon={gallery}
          title="Analysis.png"
          dateTime="3/9/19, 3:40PM"
          profileImages={['', picture1, '']}
        />
        <TableItem
          icon={folder}
          title="User Research"
          dateTime="3/9/19, 3:40PM"
          profileImages={['', picture1, picture1]}
        />
        <TableItem
          icon={file}
          title="Meeting Agender"
          dateTime="3/9/19, 3:40PM"
          profileImages={['', picture1, '']}
        />
        <TableItem
          icon={file}
          title="Meeting Notes"
          dateTime="3/9/19, 3:40PM"
          profileImages={['', picture1, '']}
        />
        <TableItem
          icon={gallery}
          title="Analysis.png"
          dateTime="3/9/19, 3:40PM"
          profileImages={['', picture1, '']}
        />
      </Column>
    </Column>
    <Column xl={3} lg={3} md={12} sm={12} className="card padding__all--20">
      <div className="calendar col">
        <span className="subtitle">My Calendar</span>
        <span className="text text-light">January</span>

        <Calendar onChange={() => null} value={new Date()} className="margin__vertical--10" />
      </div>
      <span className="subtitle margin__vertical--20">Today, 13 January</span>
      <Row mainAxis="spaceBetween" className="margin__vertical--20">
        <Card
          bgColor="coolGrey"
          padding={10}
          className="col-12 col-md-6 col-sm-12 margin__vertical--10 col"
        >
          <small className="text-light">12 am - 13 am</small>
          <span className="text">Design Thinking Meeting</span>
          <div className="stack margin__top--20">
            <img className="stack__image bg--coolBlue" src="" alt="" />
            <img className="stack__image" src={picture1} alt="" />
            <img className="stack__image" src="" alt="" />
          </div>
        </Card>
        <Card
          bgColor="coolGrey"
          padding={10}
          className="col-12 col-md-6 col-sm-12 margin__vertical--10 col"
        >
          <img width="100%" height="100%" src={lady} alt="" className="margin__bottom--10" />
          <small className="text-light">12 am - 13 am</small>
          <span className="text">UX Thinking Meeting</span>
          <div className="stack margin__top--20">
            <img className="stack__image bg--coolBlue" src="" alt="" />
            <img className="stack__image" src={picture1} alt="" />
            <img className="stack__image" src="" alt="" />
          </div>
        </Card>
      </Row>
    </Column>
  </Row>
);
