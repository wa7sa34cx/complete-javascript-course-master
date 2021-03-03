'use strict';

const str = '---what-is----your-name--';
console.log(str.replace(/^-+|-+(?=-|$)/g, ''));
