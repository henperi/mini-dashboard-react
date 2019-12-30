import React from 'react';
import PropsTypes from 'prop-types';
import './Row.scss';

/**
 * @typedef {{
 *  mainAxis: 'start' | 'center' |  'end' | 'spaceEvenly' | 'spaceAround' | 'spaceBetween',
 *  crossAxis: 'start' | 'center' | 'end' | 'spaceBetween',
 *  className?: string,
 *  children?: any,
 * }} rowProps
 */

/**
 *
 * @param {rowProps} rowProps
 * @returns {JSX.Element} Row
 */
export const Row = ({
  mainAxis, crossAxis, className, children,
}) => (
  <div
    className={`row ${mainAxis ? `row__mainAxis--${mainAxis}` : ''} ${
      crossAxis ? `row__crossAxis--${crossAxis}` : ''
    } ${className}`}
  >
    {children}
  </div>
);

Row.propTypes = {
  mainAxis: PropsTypes.oneOf([
    '',
    'start',
    'center',
    'end',
    'spaceAround',
    'spaceEvenly',
    'spaceBetween',
  ]),
  crossAxis: PropsTypes.oneOf(['', 'start', 'center', 'end', 'spaceBetween']),
  className: PropsTypes.string,
  children: PropsTypes.node,
};

Row.defaultProps = {
  mainAxis: '',
  crossAxis: '',
  className: '',
  children: null,
};
