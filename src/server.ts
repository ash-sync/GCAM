import { Server } from "http";
import mongoose = require("mongoose");
import app from "./app";
import { envVars } from "./app/config/env";
import { seedAdmin } from "./app/utils/seedAdmin";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("Connected to DB");

    server = app.listen(5001, "0.0.0.0", () => {
      console.log("Server is listening to the port 5001");
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await startServer();
  await seedAdmin();
})();

//unhandled rejection error

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection detected...Server shutting down... ", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// uncaught exception
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception detected... Server shutting down...", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// Signal termination
process.on("SIGTERM", () => {
  console.log("SIGTERM signal recieved... Server shutting down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// sigint for manually check for that so this is why we use it here and sigterm for cloud managers
process.on("SIGINT", () => {
  console.log("SIGINT signal recieved... Server shutting down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
