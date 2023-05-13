import { Router } from "express";

import { getMostPopularRepos } from "../controllers/getMostPopularRepos.controller";

const mainRouter = Router();

mainRouter.get("/repositories/mostPopular/", getMostPopularRepos);

export default mainRouter;
