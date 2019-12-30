import React, { useEffect } from 'react';
import PropsTypes from 'prop-types';
import { useGlobalStore } from '../../store';
import { initApp } from '../../store/modules/initApp/actions';
import './loader.scss';

export const AppLoader = ({ fullScreen }) => {
  const { dispatch } = useGlobalStore();
  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);
  return (
    <div
      className={fullScreen ? 'row row__mainAxis--center row__crossAxis--center' : ''}
      style={{ height: fullScreen ? '100vh' : 'none' }}
    >
      <div className="spinner" />
    </div>
  );
};

AppLoader.propTypes = {
  fullScreen: PropsTypes.bool,
};

AppLoader.defaultProps = {
  fullScreen: false,
};
