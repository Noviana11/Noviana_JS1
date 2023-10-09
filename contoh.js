// Contoh penggunaan if, else, dan nested if
let nilai = 75;

if (nilai >= 80) {
  console.log("Nilai Anda A");
} else if (nilai >= 70) {
  console.log("Nilai Anda B");
} else {
  console.log("Nilai Anda C");
}

// Contoh penggunaan switch case
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Friday":
    console.log("It's almost the weekend");
    break;
  default:
    console.log("It's a regular day");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}

// Contoh penggunaan while
let counter = 1;
while (counter <= 5) {
  console.log("While loop ke-" + counter);
  counter++;
}

// Contoh penggunaan do while
let anotherCounter = 1;
do {
  console.log("Do While loop ke-" + anotherCounter);
  anotherCounter++;
} while (anotherCounter <= 5);

// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasilPenambahan = tambah(5, 3);
console.log("Hasil Penambahan: " + hasilPenambahan);
