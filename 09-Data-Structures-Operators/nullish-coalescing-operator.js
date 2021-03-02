'use strict';

let guests;
//guests = 0;
// guests = undefined;
guests = '';

// Nullish: null and underfined (NOT 0 or '')
let numGuests = guests ?? 10;
console.log(numGuests);
