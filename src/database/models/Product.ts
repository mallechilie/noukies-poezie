import { ObjectId } from "mongodb";

export default class Product {
  constructor(
    public titel: string,
    public omschrijving: string,
    public afbeeldingen: string[],
    public categorie: string,
    public productType: string,
    public prijs?: number,
    public _id?: ObjectId
  ) {}
}