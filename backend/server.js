import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Allow CORS for your frontend
app.use(cors());

const token = process.env.PERSONAL_ACCESS_TOKEN;

app.get("/getNotes", async (req, res) => {
  try {
    const username = 'amulyajain2004'; 
    const repo = 'UPES_Courses_through_Notes_and_Codes'; 
    const dirPath = req.query.dirPath || '';
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${dirPath}`;
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `token ${token}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notes", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
