import PropsTypes from 'prop-types';
import { bgColors } from '../styles/bgColors';

export const generalPropTypes = {
  bgColor: PropsTypes.oneOf([...bgColors]),
  margin: PropsTypes.oneOf([0, 5, 10, 20, 40, 60, 80, 100]),
  padding: PropsTypes.oneOf([0, 5, 10, 20, 40, 60, 80, 100]),
};

export const defaultGeneralPropValues = {
  bgColor: 'none',
  margin: 0,
  padding: 0,
};
