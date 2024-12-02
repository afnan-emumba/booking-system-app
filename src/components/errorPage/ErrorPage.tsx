import { Link } from "react-router-dom";

import { Button } from "@mui/material";

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>Error 404!</h1>
      <p>{`The requested URL was not found :(`}</p>
      <Link to={"/"}>
        <Button variant='contained'>Return to Home</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
