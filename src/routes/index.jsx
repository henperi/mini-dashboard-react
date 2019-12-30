import React, { useRef, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useGlobalStore } from '../store';
import { AppLoader } from '../uiKit/loaders/AppLoader';
import { Row } from '../uiKit/Grid/Row';
import { Sidebar } from '../Components/Sidebar';
import { DashboardPage } from '../pages/Dashboard';
import { handleSwipe } from '../Helpers/handleSwipe';

export const Routes = () => {
  const { state } = useGlobalStore();

  const sidebarRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    handleSwipe(sidebarRef, bodyRef);
  });

  if (!state.app.isReady) {
    return <AppLoader fullScreen />;
  }

  return (
    <div ref={bodyRef}>
      <Row className="container">
        <BrowserRouter>
          <Sidebar forwardRef={sidebarRef} />
          <Switch>
            <Route exact path="/" component={DashboardPage} />
          </Switch>
        </BrowserRouter>
      </Row>
    </div>
  );
};
