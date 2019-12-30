import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import { randomColor } from '../../Helpers/randomBg';
import generateUniqueId from '../../Helpers/generateUniqueId';

import folder from '../../assets/images/folder.svg';
import file from '../../assets/images/file.svg';
import gallery from '../../assets/images/picture.svg';
import moreHori from '../../assets/images/more-h.svg';

import './TableItem.scss';

/**
 * @typedef {{
 *  icon?: file | folder,
 *  className?: string,
 *  children?: any,
 *  dateTime?: string,
 *  profileImages: string[],
 *  title: string
 * }} tableProps
 */

/**
 *
 * @param {tableProps} tableProps
 * @returns {JSX.Element} Row
 */
export const TableItem = ({
  icon, title, dateTime, profileImages,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`row table--item card row__crossAxis--center ${
        isSelected ? 'card--selected' : ''
      }`}
    >
      <div className="col-4 col-sm-11 row row__crossAxis--center">
        <input type="checkbox" name="" id="" onClick={handleSelect} />
        <img className="margin__horizontal--20" src={icon} alt="" />
        <span className="text text-light">{title}</span>
      </div>
      <div className="col-1 col-sm-1 hidden-lg hidden-md">
        <img src={moreHori} alt="" />
      </div>
      <div className="col-4 col-sm-6">
        <span className="text text-light">{dateTime}</span>
      </div>
      <div className="col-3 col-sm-6">
        <div className="stack">
          {profileImages.map((image) => (
            <img
              key={generateUniqueId()}
              className={`stack__image bg--${randomColor(['primary', 'accent', 'coolBlue', 'coolGrey'])}`}
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="col-1 hidden-sm-down row row__crossAxis--center row__mainAxis--end">
        <img src={moreHori} alt="" />
      </div>
    </div>
  );
};

TableItem.propTypes = {
  icon: PropsTypes.oneOf([file, folder, gallery]),
  profileImages: PropsTypes.arrayOf(PropsTypes.string),
  title: PropsTypes.string.isRequired,
  dateTime: PropsTypes.string.isRequired,
};

TableItem.defaultProps = {
  icon: folder,
  profileImages: ['', ''],
};
