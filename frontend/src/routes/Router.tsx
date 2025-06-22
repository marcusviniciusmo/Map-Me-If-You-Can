import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layout/DefaultLayout';
import { routes } from './routes';
import { Home } from '../pages/Home';
import { Destinations } from '../pages/Destinations';
import { Tips } from '../pages/Tips';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.destinations} element={<Destinations />} />
        <Route path={routes.tips} element={<Tips />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
