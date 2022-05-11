const getColor = () => {
    let randomNum = Math.floor(Math.random() * 16777215);
    const hexCode = "#" + randomNum.toString(16);
    document.querySelector('.container').style.backgroundColor = hexCode;
    document.getElementById('color-code').innerText = hexCode;
    navigator.clipboard.writeText(hexCode);
    document.getElementById('myTooltip').innerHTML = "Copied " + hexCode;
}

document.getElementById('btn').addEventListener(
    "click",
    getColor,
)

getColor();
