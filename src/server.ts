import { Server } from "http";
import mongoose = require("mongoose");
import app from "./app";
import { envVars } from "./app/config/env";
import { seedAdmin } from "./app/utils/seedAdmin";
import { seedData } from "./app/utils/seedData";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("Connected to DB");

    const port = Number(envVars.PORT) || 5001;
    server = app.listen(port, "0.0.0.0", () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await startServer();
  await seedAdmin();
  await seedData();
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
