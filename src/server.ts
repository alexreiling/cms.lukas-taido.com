require("dotenv").config();
import express from "express";
import path from "path";
import payload from "payload";

const app = express();
app.use("/assets", express.static(path.resolve(__dirname, "./assets")));

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    email: {
      fromName: "Admin",
      fromAddress: "admin@example.com",
      logMockCredentials: true, // Optional
    },
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3001);
};

start();
