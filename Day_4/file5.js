// Object Destructuring

const band = {
    bandName : "led zeppelin",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherFamousSong : "kashmir"
};

const bandName1 = band.bandName;
const song = band.famousSong;

console.log(bandName1,song);

// Shortcut :- 

const {bandName2, Song} = band ;

console.log(bandName2); // undefined because there is no key bandName2 in band object

// correct way
// let {bandName, famousSong} = band ;
// bandName and famousSong are keys in band object

// store values in new variable names
// let { bandName : bn,  famousSong : fm} = band;
console.log(bn); // led zeppelin
console.log(fm); // stairway to heaven

// if key is not present in object , then undefined will be stored in variable

let {bandName,famousSong, ...restProps}= band ;

console.log(bandName); // led zeppelin
console.log(restProps);
// { year: 1968, anotherFamousSong: 'kashmir' }
// restProps is an object which contains all the remaining key value pairs
// rest operator must be used at last while destructuring