let result = 2 + 7;
document.writeln("Penjumlahan: 2 + 7 = " + result + "</br>");
let lastResult = result;

result = result - 3;
document.writeln("Pengurangan: " + lastResult + " - 3 = " + result + "</br>");
lastResult = result;

result = result * 2;
document.writeln("Perkalian: " + lastResult + " * 2 = " + result + "</br>");
lastResult = result;

result = result ** 2;
document.writeln("Eksponensial: " + lastResult + " ** 2 = " + result + "</br>");
lastResult = result;

result = result / 4;
document.writeln("Pembagian: " + lastResult + " / 4 = " + result + "</br>");
lastResult = result;

result = result % 2 === 0;
document.writeln("Sisa Bagi: " + lastResult + " % 2 === 0 = " + result + "</br>");
lastResult = result;
