import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Dayjs } from "dayjs";

import {
  Paper,
  Button,
  TextField,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputAdornment from "@mui/material/InputAdornment";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Popover from "@mui/material/Popover";

import SearchChip from "../searchChip/SearchChip";
import { priceRanges } from "../../utils/constants";
import { searchLocations } from "../../utils/constants";
import "./Explore.css";

const formControlStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": { border: "none" },
  },
  "& .MuiInputBase-input": { color: "##75778B" },
};

const StyledDatePicker = styled(StaticDatePicker)(({ theme }) => ({
  "& .MuiPickersDay-root": {
    borderRadius: 8,
    backgroundColor: "transparent !important",
    "&.Mui-selected": {
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      backgroundColor: "transparent !important",
    },
    "&.Mui-disabled": {
      color: theme.palette.text.disabled,
      backgroundColor: "transparent !important",
    },
    "&:hover": {
      borderRadius: 8,
      backgroundColor: "transparent !important",
    },
  },
}));

const Explore = () => {
  const [priceRange, setPriceRange] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

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

  const handleCalendarOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setAnchorEl(null);
  };

  const handleEndDateDisable = (date: Dayjs) => {
    return startDate ? date.isBefore(startDate, "day") : false;
  };

  const open = Boolean(anchorEl);
  const id = open ? "calendar-popover" : undefined;

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
                <FormControl fullWidth sx={formControlStyles}>
                  <TextField
                    id='outlined-basic'
                    label='Where you want to go?'
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
                <h3>Choose Date</h3>
              </div>
              <div className='explore-input'>
                <FormControl
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { border: "none" },
                    },
                    "& .MuiInputBase-input": { color: "#75778B" },
                  }}
                >
                  <TextField
                    id='outlined-basic'
                    label='Choose Here'
                    variant='outlined'
                    className='explore-input-field'
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position='end'>
                            <ArrowDropDownIcon />
                          </InputAdornment>
                        ),
                      },
                    }}
                    fullWidth
                    onClick={handleCalendarOpen}
                    value={
                      startDate
                        ? `${startDate.format("MM/DD/YYYY")} - ${
                            endDate ? endDate.format("MM/DD/YYYY") : ""
                          }`
                        : ""
                    }
                  />
                </FormControl>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleCalendarClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" }, // Responsive layout
                      justifyContent: "space-between",
                      padding: 1,
                      gap: 2,
                    }}
                    ref={calendarRef}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StyledDatePicker
                        displayStaticWrapperAs='desktop'
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                        disablePast
                      />
                      <StyledDatePicker
                        displayStaticWrapperAs='desktop'
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
                        disablePast
                        shouldDisableDate={handleEndDateDisable}
                      />
                    </LocalizationProvider>
                  </Box>
                </Popover>
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
                <FormControl
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { border: "none" },
                    },
                    "& .MuiInputBase-input": { color: "#75778B" },
                  }}
                >
                  <Select
                    labelId='demo-simple-select-label'
                    label=''
                    id='demo-simple-select'
                    value={priceRange}
                    displayEmpty
                    onChange={handleChange}
                  >
                    <MenuItem value='' disabled>
                      Choose Here
                    </MenuItem>
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
