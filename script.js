function getResponse() {
  const input = document.getElementById("input").value.toLowerCase();
  const output = document.getElementById("output");

  const responses = [
    { keywords: ["hai"], response: "Halo! apakah ada yang saya bisa bantu?" },
    { keywords: ["saya mau cari sepatu"], response: "oke disini toko kami menyediakan berbagai jenis sepatu." },
    { keywords: ["sepatu apa aja itu"], response: "disini kami menyediakan sepatu snekers." },
    { keywords: ["kalo begitu saya mau beli sepatu compass apakah ada"], response: "oh tentu ada,untuk sepatu compass sendiri kami redy stok dari size 37-44 ." },
    { keywords: ["untuk harga mulai dari berapa?"], response: "untuk sekarang compass di harga RP.80000." },
    { keywords: ["itu gak bisa kurang"], response: "maaf untuk harga sudah sesuai." },
    { keywords: ["oke kalo begitu saya pesan 1 yang warna hitam"], response:"oke ditunggu untuk pengeriman pengiriman sekitar 4-7 hari."},
    { keywords: ["oke terimakasih"], response:"oke sama-sama ditunggu pesananya."},
  ];

  let matched = false;

  for (const item of responses) {
    if (item.keywords.some(keyword => input.includes(keyword))) {
      output.innerHTML = item.response;
      matched = true;
      break;
    }
  }

  if (!matched) {
    output.innerHTML = "Maaf, saya tidak mengerti apa yang Anda maksud.";
  }
}
