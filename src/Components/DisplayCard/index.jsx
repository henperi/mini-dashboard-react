import React from 'react';
import PropsTypes from 'prop-types';

import { Card } from '../../uiKit/Card';
import { Row } from '../../uiKit/Grid/Row';

import folder from '../../assets/images/folder.svg';
import file from '../../assets/images/file.svg';
import generateUniqueId from '../../Helpers/generateUniqueId';
import { randomColor } from '../../Helpers/randomBg';


export const DisplayCard = ({
  icon, profileImages, title, date,
}) => (
  <Card className="col-4 col-sm-12 col-md-6" padding={20}>
    <Row className="margin__bottom--40">
      <img className="margin__right--20" src={icon} alt="" />
      <span className="subtitle">{title}</span>
    </Row>
    <Row mainAxis="spaceBetween">
      <span className="text text-light">{date}</span>
      <Row>
        <div className="stack">
          {profileImages.map((image) => (
            <img key={generateUniqueId()} className={`stack__image bg--${randomColor(['primary', 'accent', 'coolBlue'])}`} src={image} alt="" />
          ))}
        </div>
      </Row>
    </Row>
  </Card>
);

DisplayCard.propTypes = {
  icon: PropsTypes.oneOf([file, folder]),
  profileImages: PropsTypes.arrayOf(PropsTypes.string),
  title: PropsTypes.string.isRequired,
  date: PropsTypes.string.isRequired,
};

DisplayCard.defaultProps = {
  icon: folder,
  profileImages: ['', ''],
};
