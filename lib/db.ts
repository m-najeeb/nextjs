import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI!, {
      dbName: "nextjs",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (err: unknown) {
    console.log("Error: ", err);
    throw new Error(
      `Error: ${err instanceof Error ? err.message : String(err)}`
    );
  }
};

export default connect;
