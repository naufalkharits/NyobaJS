const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
]

// cara-1
// function getTotalSales(dataPenjualan) {
//     return dataPenjualan.map(obj => obj.totalTerjual).reduce((previousValue, currentValue) => previousValue + currentValue)
// }

// cara-2
const getTotalSales = (dataPenjualan) =>
  dataPenjualan.reduce(
    (previousValue, currentValue) => previousValue + currentValue.totalTerjual,
    0
  )

console.log(getTotalSales(dataPenjualanPakAldi))
