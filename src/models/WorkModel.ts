export class WorkModel {
  title: string;
  price: string;
  image: string;

  constructor(title: string, price: string, image: string) {
    this.title = title;
    this.price = price;
    this.image = image;
  }
}
