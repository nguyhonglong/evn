import { express } from "express";
const route = express.Router();

import homeController from "../app/controller/homeController";

route.use('/', homeController.index)

