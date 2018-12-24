class President {
  private static _instance: President | undefined;
  private constructor() {
    console.log("instance is here");
  }

  static getInstance(): President {
    if (this._instance === undefined) {
      this._instance = new President();
    }
    return this._instance;
  }
}

const pre = President.getInstance();
console.log(pre);

// const pre2 = new President()
// Constructor of class 'President' is private and only accessible within the class declaration.ts(2673)
