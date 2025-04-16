// src/components/SoundToggle.jsx
import { IconButton } from "@mui/material";
import { VolumeUp, VolumeOff } from "@mui/icons-material";

function SoundToggle({ muted, toggleSound }) {
  return (
    <IconButton
      onClick={toggleSound}
      color="inherit"
      sx={{
        borderRadius: 8,
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}
    >
      {muted ? <VolumeOff /> : <VolumeUp />}
    </IconButton>
  );
}

export default SoundToggle;
