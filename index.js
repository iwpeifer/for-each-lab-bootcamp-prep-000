var iterativeLog = (array) => {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  })
}

var iterate = (callback) => {
  var newArray = ["dog", "cat", "fish"];
  newArray.forEach(callback);
  return newArray;
}

var doToArray = (array, callback) => array.forEach(callback);
