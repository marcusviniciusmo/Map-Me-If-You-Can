import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Destinations } from '../pages/Destinations';
import { Tips } from '../pages/Tips';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/tips" element={<Tips />} />
    </Routes>
  );
}
