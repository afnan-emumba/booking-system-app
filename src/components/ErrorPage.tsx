import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>Error 404</h1>
      <p>Page Not Found</p>
      <Link to={"/"}>
        <Button variant='contained'>Return to Home</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
