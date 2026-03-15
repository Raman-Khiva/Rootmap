import express from "express";
import { addProject } from "../controllers/projects.controller.js";

const projectsRouter = express.Router();

projectsRouter.post("/", addProject);

export default projectsRouter;
