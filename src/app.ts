import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    dotenv.config();
  }

  private database(): void {}

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
