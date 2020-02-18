var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kittens, name) {
  return (kittens.push(name));
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
