import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Destinations } from '../pages/Destinations';
import { Tips } from '../pages/Tips';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
