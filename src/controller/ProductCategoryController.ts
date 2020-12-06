import { Request, Response } from "express";
import ProductCategoryDao from "../dao/ProductCategoryDao";
import ProductCategory from "../model/ProductCategory";

class ProductCategoryController {
  constructor() {}

  /**
   * getAllFromCompany
   */
  public async getAllFromCompany(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { companyId } = request.params;
      const categories = await ProductCategoryDao.getAllFromCompany(
        Number(companyId)
      );
      return response.json(categories);
    } catch (error) {
      console.log("error", error);
      return response.status(400).json({ error });
    }
  }

  /**
   * create
   */
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, companyId } = request.body;
      const productCategory = new ProductCategory(null, name, companyId);
      const newProductCategory = await ProductCategoryDao.create(
        productCategory
      );
      return response.json(newProductCategory.toJson());
    } catch (error) {
      console.log("error", error);
      return response.status(400).json({ error });
    }
  }

  /**
   * destroy
   */
  public async destroy(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { id } = request.body;
      const destroyed = await ProductCategoryDao.destroy(Number(id));
      if (!destroyed) throw { destroyed: false };
      return response.json({ destroyed });
    } catch (error) {
      console.log("error", error);
      return response.status(403).json(error);
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id, name, companyId } = request.body;
      const updatedProductCategory = new ProductCategory(id, name, companyId);
      const updated = await ProductCategoryDao.update(updatedProductCategory);
      if (!updated) throw { updated: false };
      return response.json({ updated });
    } catch (error) {
      console.log("error", error);
      return response.status(403).json(error);
    }
  }
}

export default new ProductCategoryController();
