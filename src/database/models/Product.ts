import { ObjectId } from "mongodb";

export default class Product {
  constructor(
    public titel: string,
    public omschrijving: string,
    public afbeeldingen: Afbeelding[],
    public categorie: string,
    public productType: string,
    public prijs?: number,
    public _id?: ObjectId
  ) {}
}

export class Afbeelding {
  constructor(
    public link: string,
    public width: number,
    public height: number,
  ) {}
}