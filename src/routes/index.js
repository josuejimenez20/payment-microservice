import express from "express";
import paymentRoute from "./paypal/paypalRoutes.js";
import healthCheckRouter from "./health_check.js";

const app = express();

app.use('/paypal', paymentRoute);

app.use('/health-check', healthCheckRouter)

export default app;