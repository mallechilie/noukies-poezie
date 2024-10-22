import { ObjectId } from "mongodb";

export default class Poezie {
  constructor(
    public titel: string,
    public omschrijving: string,
    public link: string,
    public prijs?: number,
    public _id?: ObjectId
  ) {}
}
