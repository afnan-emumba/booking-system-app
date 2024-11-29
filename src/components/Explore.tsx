import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dayjs } from "dayjs";

import {
  Paper,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import SearchChip from "./SearchChip";

const priceRanges = [
  {
    value: "50-200",
    label: "$50 - $200",
  },
  {
    value: "200-500",
    label: "$200 - $500",
  },
  {
    value: "500-1000",
    label: "$500 - $1000",
  },
  {
    value: "1000",
    label: "$1000 & Above",
  },
];

const searchLocations = [
  "Istanbul",
  "Miami",
  "Paris",
  "London",
  "New York",
  "Tokyo",
  "Sydney",
  "Cape Town",
  "Rio de Janeiro",
  "Bali",
  "Dubai",
  "Santorini",
  "Barcelona",
  "Rome",
  "Venice",
  "Prague",
];

const Explore = () => {
  const [priceRange, setPriceRange] = useState<string>("0-100");
  const [location, setLocation] = useState<string>("");

  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setPriceRange(event.target.value);
  };

  const handleLocationClick = (location: string) => {
    setLocation(location);
  };

  const handleSearch = () => {
    if (location) {
      navigate(`/tours/${location}`);
    }
  };

  return (
    <>
      <div className='explore-image'></div>
      <div className='explore-page'>
        <div className='explore-search-container'>
          <Paper
            className='explore-search'
            elevation={4}
            sx={{ height: "auto" }}
          >
            <div className='explore-input-container'>
              <div className='explore-heading'>
                <div className='explore-icon'>
                  <FmdGoodOutlinedIcon />
                </div>
                <h3>Location</h3>
              </div>
              <div className='explore-input'>
                <FormControl fullWidth>
                  <TextField
                    id='outlined-basic'
                    label='Where to?'
                    variant='outlined'
                    className='explore-input-field'
                    fullWidth
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </FormControl>
              </div>
            </div>

            <div className='explore-input-container'>
              <div className='explore-heading'>
                <div className='explore-icon'>
                  <CalendarTodayOutlinedIcon />
                </div>
                <h3>Choose Date Range</h3>
              </div>
              <div
                className='explore-input'
                style={{ display: "flex", gap: "1rem" }}
              >
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label='Start Date'
                      value={startDate}
                      onChange={(newValue) => setStartDate(newValue)}
                    />
                  </LocalizationProvider>
                </FormControl>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label='End Date'
                      value={endDate}
                      onChange={(newValue) => setEndDate(newValue)}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
            </div>

            <div className='explore-input-container'>
              <div className='explore-heading'>
                <div className='explore-icon'>
                  <AttachMoneyOutlinedIcon />
                </div>
                <h3>Price Range</h3>
              </div>
              <div className='explore-input'>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>
                    Choose Price
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={priceRange}
                    label='Choose Price'
                    onChange={handleChange}
                  >
                    {priceRanges.map((range) => (
                      <MenuItem value={range.value}>{range.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>

            <Button
              variant='contained'
              className='search-btn'
              onClick={handleSearch}
            >
              <SearchIcon fontSize='medium' style={{ color: "#fff" }} />
            </Button>
          </Paper>
        </div>

        <div className='search-tags-container'>
          <h2>Popular Searches</h2>
          <div className='search-tags'>
            {searchLocations.map((location) => (
              <SearchChip
                title={location}
                onClick={() => handleLocationClick(location)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
