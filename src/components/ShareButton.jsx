// src/components/ShareButton.jsx
import { useState } from "react";
import { IconButton, Snackbar, Alert } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

function ShareButton({ content, title }) {
  const [open, setOpen] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: content,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(content);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleShare} color="primary" size="small">
        <ShareIcon />
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}

export default ShareButton;
