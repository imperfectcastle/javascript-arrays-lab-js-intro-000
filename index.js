var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array, name) {
  array.push(name);
  return(array)
}

function destructivelyPrependKitten(array, name) {
  array.unshift(name);
  return(array)
}
function destructivelyRemoveLastKitten(array) {
  array.pop()
  return(array)
}

function destructivelyRemoveFirstKitten(array) {
  array.shift()
  return(array)
}

function appendKitten(name)
