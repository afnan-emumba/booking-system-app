import { Paper, Button } from "@mui/material";

const Explore = () => {
  return (
    <>
      <div className='explore-image'></div>
      <div className='explore-page'>
        <div className='explore-search-container'>
          <Paper className='explore-search' elevation={4}>
            <h2>Search Tours</h2>
            <input
              type='text'
              placeholder='Search by location'
              style={{
                padding: "0.5rem",
                margin: "1rem",
              }}
            />
            <Button variant='contained'>S</Button>
          </Paper>
        </div>
        <div className='search-tags'></div>
      </div>
    </>
  );
};

export default Explore;
