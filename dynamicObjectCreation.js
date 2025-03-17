const createObject = (keys) => {
  const object = {};
  for (const key of keys) {
    const value = prompt("Enter " + key + ":");

    object[key] = value;
  }

  return object;
}

const keys = ["a", "b", "c", "d"];

console.log(createObject(keys));