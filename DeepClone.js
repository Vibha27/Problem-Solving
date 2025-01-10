function deepClone(obj) {

  if (obj === null || typeof obj !== "object") { // if type of argument is primitive
    return obj;
  }

  if (Array.isArray(obj)) { // if type of argument is array
    return obj.map(ele => ele)
  }

  if (obj instanceof Date) { // if type of argument is date
    return new Date(obj.getTime())
  }

  let clonedObj = {}; // if type of argument is an object then iterate

  for (let key in obj) {
    clonedObj[key] = deepClone(obj[key]);
  }

  return clonedObj;

}

const original = {
  name: "Vibha",
  details: {
    age: 25,
    address: {
      city: "Mumbai",
      zip: 400001,
    },
    hobbies: ["reading", "coding"],
  },
  created: new Date(),
};

const cloned = deepClone(original);

console.log(original, cloned)
