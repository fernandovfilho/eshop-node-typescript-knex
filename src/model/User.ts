class User {
  private _id;
  private _name;
  private _email;
  private _password;
  private _role;
  private _photo;
  private _companyId;

  constructor(
    id: number | null,
    name: string,
    email: string,
    password: string,
    role: string,
    photo: string,
    companyId: number
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._role = role;
    this._photo = photo;
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

  public get email(): string {
    return this._email;
  }
  public set email(v: string) {
    this._email = v;
  }

  public get password(): string {
    return this._password;
  }
  public set password(v: string) {
    this._password = v;
  }

  get role() {
    return this._role;
  }
  set role(v: string) {
    this._role = v;
  }

  get photo() {
    return this._photo;
  }
  set photo(v: string) {
    this._photo = v;
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
      email: this._email,
      password: this._password,
      role: this._role,
      photo: this._photo,
      companyId: this._companyId,
    };
  }
}

export default User;
