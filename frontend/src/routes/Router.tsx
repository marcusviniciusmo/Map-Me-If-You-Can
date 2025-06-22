import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Destinations } from '../pages/Destinations';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
    </Routes>
  );
}
