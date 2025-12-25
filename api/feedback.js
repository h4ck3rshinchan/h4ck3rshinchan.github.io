import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

const FeedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  try {
    await connectDB();

    const { name, message } = req.body;

    await Feedback.create({ name, message });

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
}
