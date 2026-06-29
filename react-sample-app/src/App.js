import { BrowserRouter, Link} from 'react-router-dom';
import { Router } from './router/Router';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Router />
    </BrowserRouter>
  );
}