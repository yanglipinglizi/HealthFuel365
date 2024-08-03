import express from "express";
import * as UserController from "../controllers/userController";
import { checkAuthentication } from "../middleware/middleware";

/**
 * router refers to http://localhost:8081/user/...route
 */
const userRoutes = express.Router();

userRoutes.post("/register", UserController.register);
userRoutes.post("/login", UserController.login);
userRoutes.get("/getuser", checkAuthentication, UserController.getUser);
userRoutes.put("/AvatarEdit",checkAuthentication,UserController.avatarEdit)

userRoutes.put("/profileedit",checkAuthentication, UserController.profileEdit);
userRoutes.get("/profileget",checkAuthentication, UserController.profileGet);

userRoutes.get("/addressget",checkAuthentication,UserController.addressGet);
userRoutes.post("/addressadd",checkAuthentication,UserController.addressAdd);
userRoutes.delete("/addressdelete",checkAuthentication,UserController.addressDelete);
userRoutes.put("/addressedit",checkAuthentication, UserController.addressEdit);

userRoutes.get("/getorder",checkAuthentication,UserController.getOrder)
userRoutes.get("/getorderbyid",checkAuthentication,UserController.getOrderById)
userRoutes.get("/getServiceByOrderId",checkAuthentication,UserController.getServicesByOrderId)
userRoutes.get("/getPaymentByOrderId",checkAuthentication,UserController.getPaymentByOrderId)
userRoutes.get("/getPromocodeByOrderId",checkAuthentication,UserController.getPromocodeByOrderId)

export default userRoutes;
