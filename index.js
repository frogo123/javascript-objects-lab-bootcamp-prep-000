var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}

function dextructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}