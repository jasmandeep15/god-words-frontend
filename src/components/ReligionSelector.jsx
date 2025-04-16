// src/components/ReligionSelector.jsx
import { useState, useEffect } from "react";
import { Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function ReligionSelector({ religion, setReligion }) {
  const [religions] = useState([
    "SIKHISM",
    "HINDU",
    "BUDDHISM",
    "MUSLIM",
    "CHRISTIANITY",
  ]);

  // Ensure religion is valid on mount
  useEffect(() => {
    if (!religions.includes(religion)) {
      setReligion(religions[0]); // Default to "SIKHISM" if invalid
    }
  }, [religion, setReligion, religions]);

  const handleChange = (event) => {
    setReligion(event.target.value);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="religion-select-label">Religion</InputLabel>
        <Select
          labelId="religion-select-label"
          id="religion-select"
          value={religion}
          label="Religion"
          onChange={handleChange}
          sx={{
            borderRadius: 8,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.dark",
            },
          }}
        >
          {religions.map((rel) => (
            <MenuItem key={rel} value={rel}>
              {rel}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default ReligionSelector;
