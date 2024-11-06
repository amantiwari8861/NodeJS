// console.log("Hello World");
import QRCode from 'qrcode'
const generateQR = async text => {
    try {
        console.log(await QRCode.toDataURL(text))
    } catch (err) {
        console.error(err)
    }
}
generateQR("https://github.com/amantiwari8861")