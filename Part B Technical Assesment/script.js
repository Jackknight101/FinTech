var currentImage = 0
const image1 = "https://s2.coinmarketcap.com/static/img/coins/200x200/1831.png"
const image2 = "https://dynamic-assets.coinbase.com/dbf675ba34815d8c76f42a481729953d83c0665c4ed4a38b68074b84b65bbd7be179817b818dfc490175e9061b3471d2375e23ae726a7d07cfe88c734d2e09e1/asset_icons/1d23bd6ffcbb743c32d080b850684215ec089964c7c12c6ccc40c4032ecf7c28.png"

function changeImage() {
    if (currentImage == 0) {
        document.getElementById("image").src = image1;
        currentImage = 1
    } else {
        document.getElementById("image").src = image2;
        currentImage = 0
    }
    
}