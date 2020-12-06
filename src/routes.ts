import { Request, Response, Router } from "express";
import ProductCategoryController from "./controller/ProductCategoryController";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ hello: "eShop" });
});
routes.get(
  "/company/:companyId/product/category",
  ProductCategoryController.getAllFromCompany
);
routes.put("/product/category", ProductCategoryController.create);
routes.delete("/product/category", ProductCategoryController.destroy);
routes.patch("/product/category", ProductCategoryController.update);

export default routes;
