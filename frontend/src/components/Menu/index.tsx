import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';

export function Menu() {
  return (
    <>
      <h1>MENU COMPONENT</h1>
      <NavLink to={routes.home}>Home</NavLink>
      <NavLink to={routes.destinations}>Destinations</NavLink>
      <NavLink to={routes.tips}>Tips</NavLink>
      <NavLink to={routes.contact}>Contact</NavLink>
    </>
  );
}
