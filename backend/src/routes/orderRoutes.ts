import express from "express";
import * as orderController from "../controllers/orderController";
import { checkAuthentication } from "../middleware/middleware";

const orderRoutes = express.Router();

orderRoutes.get("/getorder", checkAuthentication, orderController.getOrder);
orderRoutes.post(
  "/createOrder",
  checkAuthentication,
  orderController.createOrder
);

orderRoutes.post(
  "/cancelPayment",
  checkAuthentication,
  orderController.cancelPayment
);

orderRoutes.post(
  "/successPayment",
  checkAuthentication,
  orderController.successPayment
);

export default orderRoutes;
