const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft >= distanceToPump) {
        return true
    } else {
        return false
    }
};
console.log(zeroFuel(1255, 25, 2));


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return mpg * fuelLeft >= distanceToPump
//    if (zeroFuel>1){
//      return true
//      } else{
//        return false
//      }
//  };