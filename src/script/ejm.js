// const pro = [
//   {
//     id: 1,
//     name: "A",
//     cate: "serie",
//   },
//   {
//     id: 2,
//     name: "A",
//     cate: "serie",
//   },
//   {
//     id: 3,
//     name: "A",
//     cate: "movie",
//   },
//   {
//     id: 4,
//     name: "A",
//     cate: "movie",
//   },
// ];


// let movie = [];
// let serie = [];
// let map = [];

// pro.reduce((acc, produc) => {
//   // console.log("data.... ", produc);
//   produc.cate == "movie" ? movie.push(produc) : serie.push(produc);
//   console.log("PELIS... ", movie);
//   console.log("SERIES.... ", serie);
// }, {});

// const mape = pro.map((value, acc) => {
//   // console.log("VALORES... ", value);
//   if (value.cate == "serie") map.push(value);
//   return value.id;
// });

// console.log("elemnetos desde el map... ", mape);

// const series = pro.filter((ele) => {
//   console.log("elemnetos... ", ele);
//   return ele.cate == "serie";
// });
// console.log("usando filtes ... ", Object.values(series));

// let rep = ["Licores", "Licores", "Licores", "Viveres", "Comida"];
// let result = new Set(rep);
// let ar = [];
// ar.push(result);
// console.log("VALRES UNICOS... ", ar);

// pro.reduce((result, field, index) => {
//   console.log("props... ", result, field, index);
// }, {});

// console.log("string".match(/[i-n]+/));
// console.log("string".match(/(r)[i-n]+/));

// let ejm = {
//   licores: [1,2,3],
//   general: [1,2,3]
// }

// let padre = Object.keys(ejm);
// padre.indexOf('licores') > -1 ? console.log( padre.sort() ) : console.log("NO ESTA LA CATEGORIA");

// console.log(ejm.licores.some((ele) => {
//   console.log(ele);
//   ele < 2
//   return 'si'
// }));

let a = ['total', 'licores']
a.splice(a.indexOf('total'), 1);

console.log("items... ",a[0].search(1) );
let info = {
  licores: {
    total: 20
  }
}

console.log(info[a]);