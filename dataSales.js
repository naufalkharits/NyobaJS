const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
]

function getDataSales(dataPenjualan) {
  if (dataPenjualan) {
    let newObj = {}

    const rupiah = (item) =>
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(item)

    const terlaris = Math.max(...dataPenjualan.map((x) => x.totalTerjual))
    const terbaik = dataPenjualan.find((x) => x.totalTerjual === terlaris)

    const totalKeuntungan = dataPenjualan
      .map(
        (obj) =>
          obj.hargaJual * obj.totalTerjual -
          obj.hargaBeli * (obj.sisaStok + obj.totalTerjual)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue)
    newObj.totalKeuntungan = rupiah(totalKeuntungan)

    const totalModal = dataPenjualan
      .map((obj) => obj.hargaBeli * (obj.sisaStok + obj.totalTerjual))
      .reduce((previousValue, currentValue) => previousValue + currentValue)
    newObj.totalModal = rupiah(totalModal)

    // NOTE Math.trunc is rounding down, use Math.round instead of Math.trunc
    newObj.persentaseKeuntungan =
      Math.round((totalKeuntungan / totalModal) * 100) + `%`

    newObj.produkBukuTerlaris = terbaik.namaProduk

    newObj.penulisTerlaris = terbaik.penulis

    return newObj
  } else {
    return `ERROR :`
  }
}

console.log(getDataSales(dataPenjualanNovel))
console.log(getDataSales())