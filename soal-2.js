/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"

  1. tidak boleh menggunakan method array includes, atau sejenisnya (harus looping manual)
  2. JS method array yang boleh digunakan hanya length & push
*/

const filterData = (arr, searchValue) => {
  // di masukan ke searchValue
  const output = []; // membuat penyimpanan sementara untuk array
  for(let i=0;i<arr.length;i++){ // di mulai dari index 0 jika index kurang dari jumlah keseluruhan pada array maka index akan di tambah satu berulang" jika sudah memenuhi pengkodisian maka berhenti mengulang
    if(arr[i] === searchValue[0] ||  arr[i] === searchValue[1] ){ // jika array yang index nya ke i  sama dengan searchValue index nya ke nol atau  array index ke i sama dengan searchValue index ke 1 
      // searchValue index ke nol adalah 5 untuk index array pertama
      // searchValue index ke satu adalah 1 untuk index arrau ke dua
      output.push(arr[i]); // masukan array yang index i ke penyimpanan array sementara 
    }
  }
  // kembalikan output berupa penyimpanan array sementara 
  return output;
}

// oke udah :)

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, [5,1]));  // output: [ 1, 1, 5, 5, 1, 5, 5, 5, 5, 1 ]
// coba perhatikan ini bang [5,1] dalah array  


// nah sini bang 

// belajar array dulu hahaha

//const x = ['hello','romli','horeee'];

//x[0] isi nya hello
//x[1] isinya romli 
//x[2] isinya horeee
// aman bang ?
// total index array nya 3  index di mulai dari angka nol

// kalau ini paham bang, lanjut dlu dah aku mencerna, ke no.-3 nanti ku tanya
// oke
