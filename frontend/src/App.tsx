import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Router />
        <Footer />
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}
