import express from "express";

const app = express();
const PORT = 3001;

// Allows the server to read JSON sent in request bodies.
app.use(express.json());

// A simple endpoint to verify the backend is working.
app.get("/api/health", (req, res) => {
  res.json({ message: "Backend is running!" });
});

// Starts the server, accessible from your own computer.
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Backend running at http://127.0.0.1:${PORT}`);
});