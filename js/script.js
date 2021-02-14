// array nomor
const nomor = [4, 5, 8, 10, 30, 50, 100];

// cari elemen nomor tertentu
function cariNomor(array, value) {
  return array.every((element) => element > value);
}

// pangil dan masukan hasil pencarian ke dalam variabel
const lebihBesarDari2 = cariNomor(nomor, 2);
const lebihBesarDari150 = cariNomor(nomor, 150);

// cetak hasil pencarian
console.log(lebihBesarDari2);
console.log(lebihBesarDari150);
