import React from 'react';
import PropsTypes from 'prop-types';
import { getClasses } from '../../Helpers/classNameHelper';
import { generalPropTypes, defaultGeneralPropValues } from '../../Helpers/proptypes';

/**
 * @typedef {{
 *  bgColor?: import('../../styles/bgColors').bgColors,
 *  className?: string,
 *  children?: any,
 *  margin?: 0 | 5 | 10 | 20 | 40 | 60 | 80 | 100,
 *  padding?: 0 | 5 | 10 | 20 | 40 | 60 | 80 | 100,
 *  isSelected?: boolean
 *  height?: string | number,
 *  width?: string | number,
 * }} cardProps
 */

/**
 *
 * @param {cardProps} props
 * @returns {JSX.Element} Row
 */
export const Container = (props) => {
  const {
    className, children, height, width,
  } = props;

  return (
    <div
      style={{ width, height }}
      className={`${getClasses(props)} ${className}`}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  ...generalPropTypes,
  className: PropsTypes.string,
  children: PropsTypes.node,
  height: PropsTypes.string,
  width: PropsTypes.string,
};

Container.defaultProps = {
  ...defaultGeneralPropValues,
  className: '',
  children: null,
  height: 'inherit',
  width: 'inherit',
};
