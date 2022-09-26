let x = prompt("Nhap gia tri");
let donVi = x % 10;
let y = Math.floor(x/10);
let chuc = y % 10;
let z = Math.floor(y/10);
let tram = z % 10;
console.log("Don vi:", donVi);
console.log("chuc:", chuc);
console.log("tram:", tram);