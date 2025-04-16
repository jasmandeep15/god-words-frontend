// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import TaskCard from "../components/TaskCard";
import QuoteCard from "../components/QuoteCard";
import ReligionSelector from "../components/ReligionSelector";
import ThemeToggle from "../components/ThemeToggle";
import SoundToggle from "../components/SoundToggle";
import {
  getTodayTask,
  getTodayQuote,
  getYesterdayQuote,
} from "../services/api";

function Home({ toggleTheme, mode }) {
  const [religion, setReligion] = useState("SIKHISM");
  const [task, setTask] = useState(null);
  const [todayQuote, setTodayQuote] = useState(null);
  const [yesterdayQuote, setYesterdayQuote] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    fetchData();
  }, [religion]);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const taskResponse = await getTodayTask();
      if (taskResponse.success) {
        setTask(taskResponse.data);
      } else {
        setError(taskResponse.message);
      }

      const todayQuoteResponse = await getTodayQuote(religion.toLowerCase());
      if (todayQuoteResponse.success) {
        setTodayQuote(todayQuoteResponse.data);
      } else {
        setError(todayQuoteResponse.message);
      }

      const yesterdayQuoteResponse = await getYesterdayQuote(
        religion.toLowerCase()
      );
      if (yesterdayQuoteResponse.success) {
        setYesterdayQuote(yesterdayQuoteResponse.data);
      } else {
        setError(yesterdayQuoteResponse.message);
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSound = () => {
    setMuted(!muted);
    if (audio) audio.muted = !muted; // Toggle mute on current audio
  };

  const playRingtone = (religion) => {
    if (audio) {
      audio.pause(); // Stop previous ringtone
      audio.currentTime = 0; // Reset to start
    }
    const newAudio = new Audio(`/ringtones/${religion.toLowerCase()}.mp3`);
    newAudio.loop = true; // Loop the ringtone
    newAudio.muted = muted; // Apply mute state
    newAudio.play().catch((err) => console.log("Audio play failed:", err));
    setAudio(newAudio);
  };

  useEffect(() => {
    playRingtone(religion);
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [religion, muted]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Single header div with centered title, ThemeToggle, and SoundToggle */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={2}
          sx={{
            "& > :first-child": {
              flexGrow: 1,
              textAlign: "center",
            },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            color="primary"
            sx={{ display: "inline-block" }}
          >
            God Words
          </Typography>
          <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
          <SoundToggle muted={muted} toggleSound={toggleSound} />
        </Box>

        {error && (
          <Typography color="error" mb={2}>
            {error}
          </Typography>
        )}

        <ReligionSelector religion={religion} setReligion={setReligion} />

        <Typography variant="h5" mb={2} fontWeight="medium">
          Today's Quote
        </Typography>
        <QuoteCard quote={todayQuote} loading={loading} />

        <Typography variant="h5" mb={2} mt={4} fontWeight="medium">
          Yesterday's Quote
        </Typography>
        <QuoteCard quote={yesterdayQuote} loading={loading} />

        <Typography variant="h5" mb={2} mt={4} fontWeight="medium">
          Ignite Your Day
        </Typography>
        <TaskCard task={task} loading={loading} />
      </motion.div>
    </Container>
  );
}

export default Home;
