/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"
*/

// const filterData = (arr, searchValue) => {
//   // tulis code di sini
  
// }

// let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
// console.log(filterData(data_array, 5));  // output: [ 5, 5, 5, 5, 5, 5 ] (ada 6 kali)


/*

{1
  {2
    {3
      yang kaya gini nama nya nested bang  
    }
  }
}
*/ 
// ini arrow function bang 

const hello = (nama)=>`hello world ${nama}`;
console.log(hello("ryugen")); // gini sama kaya php tapi kayak nya abang ga pernah pakai :l

// jadi nested stetmnet hanya buat parameter?? lah ga lah 
// jadi variabel arr sama searchValue bebas bang? iya itukan parameter
/*
sama kaya gini bang 
function filterData (arr,searchValue){

}

const filterData = (arr,serchValue)=>{

}

*/

// jadi arr sama searchvalue bisa di ganti nama ga harus parameter itu? iya bang kan basic pemrograman gitu bang kalau buat parameter itu sama kaya buat variabel nama nya bebas 


const filterData = (arr, searchValue) => {  // nested function
//   searchValue ini parameter 
  let result = [];
  // let i  membuat variabel i biasanya i itu merepresentasikan (index)  index awal di mulai dari nol 
  //  jika index kurang dari jumlah keseluruhan index pada array  maka nilai index akan di tambah satu 
  for (let i = 0; i < arr.length; i++) {  // nested loop
    // 
    if (arr[i] === searchValue) {   // nested statement
      result.push(arr[i]);
    }
  }
  return result;
}

let data_array = [1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1];
console.log(filterData(data_array, 5)); // output: [5, 5, 5, 5, 5, 5] (ada 6 kali)
// ini isi nya 5


// check chat