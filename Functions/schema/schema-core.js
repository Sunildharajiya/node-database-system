

// class defination
export class Schema {
  constructor(definition) {
    this.definition = definition;
  }
}

//type system
export const types = {
  string: (v) => typeof v === "string",

  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),

  password: (v) => typeof v === "string" && v.length >= 6,

  text: (v) => typeof v === "string",

  id: (v) => typeof v === "string"
};



