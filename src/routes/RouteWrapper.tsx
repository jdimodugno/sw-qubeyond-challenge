import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import IRoute from '../interfaces/core/IRoute';

const RouteWrapper : FC<IRoute> = ({
  component: Component,
  layout: Layout,
  ...props
}) => (
  <Route
    {...props}
    render={() => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
)

export default RouteWrapper;