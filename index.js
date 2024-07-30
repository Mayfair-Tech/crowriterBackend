require("dotenv").config();
const express = require("express");
const app = express();
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const setupSwagger = require("./swagger");
//git testing
//getting git status
const corsOptions = require("./config/corsOptions");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
setupSwagger(app);
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Handle Socket.IO connections
io.on("connection", async (socket) => {
  console.log("a user connected");

  // Retrieve the userId from the socket connection query
  const userId = socket.handshake.query.userId;
  if (userId) {
    try {
      // Fetch unread notifications for the connected user
      const unreadNotifications = await prisma.notification.findMany({
        where: {
          userId: userId,
          read: false,
        },
      });
      console.log("user id found");
      console.log("unread notification is", unreadNotifications);

      // Send unread notifications to the client
      socket.emit("unreadNotifications", unreadNotifications);

      // Optionally mark notifications as read after sending
      // await prisma.notification.updateMany({
      //   where: {
      //     userId: userId,
      //     read: false,
      //   },
      //   data: {
      //     read: true,
      //   },
      // });
    } catch (error) {
      console.error("Error fetching unread notifications:", error);
      console.log("there was an error reading unread notifications");
    }
  }

  // Optionally handle disconnection
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("welcome to crowwriter");
});

const ordersRouter = require("./routes/orderRoutes");
app.use("/orders", ordersRouter(io));

const authRouter = require("./routes/authRoutes");
app.use("/auth", authRouter);

const userRouter = require("./routes/userRoutes");
app.use("/users", userRouter);

const bidsRouter = require("./routes/bidsRoutes");
app.use("/bids", bidsRouter);

const submissionsRouter = require("./routes/submissionsRoutes");
app.use("/uploads", submissionsRouter);

const finesRouter = require("./routes/fineRoutes");
app.use("/fines", finesRouter);

const reviewsRouter = require("./routes/ratingRoutes");
app.use("/reviews", reviewsRouter);

const invoiceRouter = require("./routes/invoiceRoutes");
app.use("/invoice", invoiceRouter);

const paymentRouter = require("./routes/paymentRoutes");
app.use("/payments", paymentRouter);

app.use(errorHandler);
const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
