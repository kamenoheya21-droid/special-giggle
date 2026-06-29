import { Link } from 'react-router-dom';
export const Page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <p>This is the first additional page of the React Sample App!</p>
      <Link to="/page1/details">Go to Page 1 Details</Link>
    </div>
  );
}