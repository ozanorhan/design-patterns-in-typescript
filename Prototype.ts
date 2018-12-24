class Sheep {
  protected name: string;
  protected category: string;

  constructor(name: string, category: string = "Mountain Sheep") {
    this.name = name;
    this.category = category;
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setCategory(category: string) {
    this.category = category;
  }

  getCategory(): string {
    return this.category;
  }

  getClone(): Sheep {
    return new Sheep(this.name, this.category);
  }
}

const og = new Sheep("Jolly");
console.log(og.getName());
console.log(og.getCategory());

const clone = og.getClone();
clone.setName("Dolly");
console.log(clone.getName());
console.log(clone.getCategory());
