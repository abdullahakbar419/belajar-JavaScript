// Konversi String dan Number
// Operasi Aritmatika dengan value salah satunya NaN
const value1 = parseInt("a");
const value2 = 1;

const sum = value1 + value2;

console.info(`menggunakan parseInt() dan salah satu valuenya Nan = ${sum}`);

// parseInt() = mengkonversi string ke Int(bilangan bulat)
console.info("menggunakan parseInt() = " + parseInt("1.1"));

//parseFloat() = mengkonversi string ke Float(bilangan Pecahan)
console.info("menggunakan parseFloat() = " + parseFloat("1.1"));

//Number() = mengkonversi string ke bilangan bulat maupun pecahan
console.info("menggunakan Number = " + Number("1.1"));
console.info("menggunakan Number = " + Number("1"));

// nameVariable.toString() = mengkonversi number ke string

const a = 0;
const b = 1;

const summ = a.toString() + b.toString();

console.info("menggunakan toString = " + summ + "\n");

//NaN (Not a Number) =  memberitahukan bahwa yang dikonversikan itu bukan number
//Note: untuk operasi aritmatika jika salah satu variable menghasilakan NaN maka hasil operasi aritmatika tersebut juga NaN contoh ada diline 3-8

console.info("menggunakan value (a) dikonversi parseInt = " + parseInt("a"));

console.info("menggunakan value (1.a) dikonversi parseInt = " + parseInt("1.a"));

console.info("menggunakan value (1.1 abc) dikonversi parseFloat = " + parseFloat("1.1 abc"));

console.info("menggunakan value (sf 1.3) dikonversi parseFloat = " + parseFloat("sf 1.3"));

console.info("menggunakan value (fn 1.2 df) dikonversi Number = " + Number("1.2 df"));

console.info("menggunakan value (fd 4 df) dikonversi Number =" + Number("fd 4 df"));

/* untuk konversi parseInt dan parseFloat jika kesalahan tulisan itu masih dibelakang angka itu masih ditoleransi
    contoh: parseInt("1 asf") ini masih ditoleransi
            parseFloat(("1.4 sfra") ini masih ditoleransi

    tetapi untuk Number itu tidak ada toleransi
*/
