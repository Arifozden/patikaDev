/*
Daire Modüler Dosyası
Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
*/

const arguments = process.argv.slice(2);

function circleAreaCalc(r) {
    const pi = 3.14159265359;
    let alan = pi * Math.pow(r, 2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${parseFloat(alan.toFixed(2))}`);
};

function circleCircumference(r) {
    const pi = 3.14159265359;
    let alan = 2 * pi * r;
    console.log(`Yarıçapı ${r} olan dairenin cevresi: ${parseFloat(alan.toFixed(2))}`);
};

module.exports = {
    circleAreaCalc,
    circleCircumference
};
