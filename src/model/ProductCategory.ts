class ProductCategory {
  private _id;
  private _name;
  private _companyId;

  constructor(id: number | null, name: string, companyId: number) {
    this._id = id;
    this._name = name;
    this._companyId = companyId;
  }

  public get id(): number | null {
    return this._id;
  }
  public set id(v: number | null) {
    this._id = v;
  }

  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  public get companyId(): number {
    return this._companyId;
  }
  public set companyId(v: number) {
    this._companyId = v;
  }

  public toJson() {
    return {
      id: this._id,
      name: this._name,
      companyId: this._companyId,
    };
  }
}

export default ProductCategory;
