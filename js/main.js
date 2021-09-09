import { divisions } from './divisions.js';
import { districts } from './districts.js';
import { upazillas } from './upazillas.js';
import { unions } from './unions.js';
// let division = divisions;
// let district = districts;
// let upazilla = upazillas;
// let union = unions;
// console.log(districts);
let allAreaOfBD = new Map();
// console.log(allAreaOfBD);

// setting divisions

let div = 1, i = 0;
for (let division in divisions) {
    if (div == divisions[division].id) {
        let newDiv = divisions[division].name;
        allAreaOfBD.set(newDiv, divisions[division]);
        // console.log(newDiv);
        div++;
    }
}
// setting all district to each divisions

div = 1;
let dist = 0;
for (let district in districts) {
    if (districts[district].division_id != div) {
        div++;
    }
    // console.log(districts[district]);
}
console.log(allAreaOfBD);
