const app = "I don't do much."


//* Create a function, `bumpCounter()`, that has a variable called `counter`. This variable should *not* be accessible outside of the function!
//* The `bumpCounter()` function has two inner functions: `addBump()` and `getBumps()`. These two functions need to be returned since they will be used to increase the counter and get the counter value.
//* The `addBump()` function should increase the counter by 1.
//* The `getBumps()` function should return the current count.
function bumpCounter(){
  var counter = 0;
  function addBump(){
    counter++;
  }
  function getBumps(){
    return counter;
  }
  return { addBump, getBumps };
}

/* Create a function, createAnimal(), that takes one parameter, animalType.
Create an inner function in this createAnimal() function that also has one parameter, deadlyDevice. This function then returns an object that forms our diabolical creation. This object has two properties, animalType and deadlyDevice that are the given arguments to both functions.
An example of the output: { animalType: 'Monkey', deadlyDevice: 'Lightsaber' }
Create a shark creator function by calling createAnimal() with the 'Shark' string. This should be assigned to a variable called sharkCreator.
Add a variable called sharkWithFrickinLaserbeam that is a combination of a 'Shark' and 'Laserbeam'.
Add a variable called sharkWithFrickinCannon that is a combination of a 'Shark' and 'Cannon'.*/

function createAnimal(animalType){
  function deadlyDevice(deadlyDevice){
      return { animalType: animalType, deadlyDevice: deadlyDevice };
  }
  return deadlyDevice;
}
var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
