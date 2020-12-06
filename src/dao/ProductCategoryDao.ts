import connection from "../database";
import ProductCategory from "../model/ProductCategory";

class ProductCategoryDao {
  private table = "product_categories";

  constructor() {}

  /**
   * get
   */
  public async get(
    id: number,
    companyId: number
  ): Promise<ProductCategory | null> {
    const category = await connection(this.table)
      .where("id", id)
      .where("companyId", companyId)
      .first();
    if (category) {
      return new ProductCategory(
        category.id,
        category.name,
        category.companyId
      );
    } else {
      return null;
    }
  }

  /**
   * getAllFromCompany
   */
  public async getAllFromCompany(companyId: number): Promise<any[]> {
    const categories = await connection(this.table)
      .where("companyId", companyId)
      .orderBy("name");
    return categories;
  }
  /**
   * create
   */
  public async create(
    productCategory: ProductCategory
  ): Promise<ProductCategory> {
    const insertedRow = await connection(this.table)
      .insert({
        name: productCategory.name,
        companyId: productCategory.companyId,
      })
      .returning("id");
    productCategory.id = Number(insertedRow);
    return productCategory;
  }

  /**
   * destroy
   */
  public async destroy(id: number): Promise<boolean> {
    const destroyed = await connection(this.table).delete().where("id", id);
    return destroyed === 0 ? false : true;
  }

  /**
   * update
   */
  public async update(productCategory: ProductCategory): Promise<boolean> {
    const updated = await connection(this.table)
      .update(productCategory.toJson())
      .where("id", productCategory.id);
    return updated === 0 ? false : true;
  }
}

export default new ProductCategoryDao();
