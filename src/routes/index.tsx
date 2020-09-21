import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import IRoute from '../interfaces/core/IRoute';
import FilmsRoutes from '../modules/films/routes';
import PeopleRoutes from '../modules/people/routes';
import PlanetsRoutes from '../modules/planets/routes';
import SpeciesRoutes from '../modules/species/routes';
import StarshipsRoutes from '../modules/starships/routes';
import VehicleRoutes from '../modules/vehicles/routes';
import RouteWrapper from './RouteWrapper';

export const moduleRoutes : Array<IRoute> = [
  ...FilmsRoutes,
  ...PeopleRoutes,
  ...PlanetsRoutes,
  ...SpeciesRoutes,
  ...StarshipsRoutes,
  ...VehicleRoutes
];

const AppRoutes : FC = () => (
  <>
    <Route
      exact
      path="/"
      render={() => ( <Redirect to="/films" /> )}
    />
    
    {
      moduleRoutes.map((routeProps: IRoute) => (
        <RouteWrapper {...routeProps} />
      ))
    }
  </>
)

export default AppRoutes;