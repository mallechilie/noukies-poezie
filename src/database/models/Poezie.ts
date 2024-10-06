import { ObjectId } from "mongodb";

export default class Poezie {
  constructor(
    public titel: string,
    public prijs: number,
    public omschrijving: string,
    public link: string,
    public _id?: ObjectId
  ) {}
}
