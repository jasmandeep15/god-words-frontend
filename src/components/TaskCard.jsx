// src/components/TaskCard.jsx
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import ShareButton from "./ShareButton";

function TaskCard({ task, loading }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: [1, 1.05, 1] }} // Pulse effect
      transition={{ duration: 0.5, scale: { duration: 0.8, repeat: 1 } }}
    >
      <Card
        sx={{
          bgcolor: "background.paper",
          boxShadow: 3,
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)"
              : "linear-gradient(135deg, #37474f 0%, #263238 100%)",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {loading ? (
            <Box display="flex" justifyContent="center" width="100%">
              <CircularProgress />
            </Box>
          ) : task ? (
            <>
              <Box>
                <Typography variant="h5" color="text.primary" gutterBottom>
                  {task.task}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {task.date}
                </Typography>
              </Box>
              <ShareButton
                content={`Task for ${task.date}: ${task.task}`}
                title="Share Today's Inspiration"
              />
            </>
          ) : (
            <Typography color="text.secondary" width="100%">
              No task available.
            </Typography>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default TaskCard;
