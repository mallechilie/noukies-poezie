import { ObjectId } from "mongodb";

export default class ProductType {
  constructor(
    public type: string,
    public verzending: string,
    public verzendkosten: number,
    public _id?: ObjectId
  ) {}
}