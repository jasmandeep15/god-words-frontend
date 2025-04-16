// src/components/QuoteCard.jsx
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import ShareButton from "./ShareButton";

function QuoteCard({ quote, loading }) {
  const getShareContent = (quote) => {
    let content = `Quote for ${quote.date}: ${quote.verse}`;
    if (quote.verseEng) content += `\nEnglish: ${quote.verseEng}`;
    if (quote.verseEngMean) content += `\nMeaning: ${quote.verseEngMean}`;
    return content;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card sx={{ bgcolor: "background.paper", boxShadow: 3 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            minHeight: "100px",
          }}
        >
          {loading ? (
            <Box display="flex" justifyContent="center" width="100%">
              <CircularProgress />
            </Box>
          ) : quote ? (
            <>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {quote.verse}
                </Typography>
                {quote.verseEng && (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    English: {quote.verseEng}
                  </Typography>
                )}
                {quote.verseEngMean && (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    Meaning: {quote.verseEngMean}
                  </Typography>
                )}
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {quote.date}
                </Typography>
              </Box>
              <ShareButton
                content={getShareContent(quote)}
                title="Share This Quote"
                sx={{ ml: 2 }}
              />
            </>
          ) : (
            <Typography color="text.secondary" width="100%">
              No quote available.
            </Typography>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default QuoteCard;
