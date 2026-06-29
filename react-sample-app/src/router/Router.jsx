import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page2 } from '../Page2';
import { page1Router } from './Page1Router';

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page1" render={() =>
          page1Router.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.Children}
            />
          ))
        } />
        <Route path="/page2" element={<Page2 />} />
    </Routes> 
  );
}