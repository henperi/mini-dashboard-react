import React from 'react';
import PropsTypes from 'prop-types';
import './Column.scss';

/**
 * @typedef {{
 *  mainAxis: 'start' | 'center' |  'end' | 'spaceEvenly' | 'spaceAround' | 'spaceBetween',
 *  crossAxis: 'start' | 'center' | 'end' | 'spaceBetween',
 *  className?: string,
 *  children?: any,
 *  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9| 10 | 11 | 12,
 *  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9| 10 | 11 | 12,
 *  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9| 10 | 11 | 12,
 *  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9| 10 | 11 | 12,
 *  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9| 10 | 11 | 12,
 * }} columnProps
 */

/**
 *
 * @param {columnProps} columnProps
 * @returns {JSX.Element} Column
 */
export const Column = ({
  mainAxis, crossAxis, className, children, xs, sm, md, lg, xl,
}) => (
  <div
    className={`${className} col col-xs-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} col__mainAxis--${mainAxis} col__crossAxis--${crossAxis}`}
  >
    {children}
  </div>
);

Column.propTypes = {
  mainAxis: PropsTypes.oneOf([
    'start',
    'center',
    'end',
    'spaceAround',
    'spaceEvenly',
    'spaceBetween',
    '',
  ]),
  crossAxis: PropsTypes.oneOf(['', 'start', 'center', 'end', 'spaceBetween', '']),
  className: PropsTypes.string,
  children: PropsTypes.node,
  xs: PropsTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropsTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropsTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropsTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropsTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

Column.defaultProps = {
  mainAxis: '',
  crossAxis: '',
  className: '',
  children: null,
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};
