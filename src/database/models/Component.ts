import { ObjectId } from "mongodb";

export default class ComponentData {
  constructor(
    public name: string,
    public title: string,
    public subtitle: string,
    public img_link: string,
    public _id?: ObjectId
  ) {}
}
