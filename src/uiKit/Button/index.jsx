import React from 'react';
import PropsTypes from 'prop-types';
import './Button.scss';
import { bgColors } from '../../styles/bgColors';

/**
 * @typedef {{
 *  onClick: Function,
 *  fullWidth: boolean
 *  className?: string,
 *  children?: any,
 *  radius?: 5 | 10 | 20 | 40 | 60 | 100,
 *  bgColor?: import('../../styles/bgColors').bgColors,
 * }} buttonProps
 */

/**
 *
 * @param {buttonProps} buttonProps
 * @returns {JSX.Element} Button
 */
export const Button = ({
  className, children, onClick, radius, bgColor, fullWidth,
}) => (
  <button
    onClick={() => onClick()}
    className={`button bg--${bgColor} ${className} ${radius} ${
      fullWidth ? 'button--full-width' : ''
    }`}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  bgColor: PropsTypes.oneOf([...bgColors]),
  className: PropsTypes.string,
  children: PropsTypes.node,
  onClick: PropsTypes.func,
  radius: PropsTypes.number,
  fullWidth: PropsTypes.bool,
};

Button.defaultProps = {
  bgColor: 'default',
  className: '',
  children: PropsTypes.objectOf,
  onClick: () => {},
  radius: 5,
  fullWidth: false,
};
