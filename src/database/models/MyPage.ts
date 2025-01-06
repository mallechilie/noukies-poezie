import { ObjectId } from "mongodb";

export default class MyPage {
  constructor(
    public titel: string,
    public inhoud: string,
    public _id?: ObjectId
  ) {}
}
