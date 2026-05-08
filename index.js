const getClrSchBtn = document.getElementById('get-clr-scheme-btn')
const seedColor = document.getElementById('seed-color')
const clrModeSelector = document.getElementById('clr-mode-selector')
const clrSchemeContainer = document.getElementById('clr-scheme-container')

getClrSchBtn.addEventListener('click', function() {
    fetch(
        `https://www.thecolorapi.com/scheme?hex=${(seedColor.value).slice(1)}&mode=${clrModeSelector.value}`
    ).then(res => res.json())
    .then(data => {
       const colorImgs = data.colors.map(color => {
        return `
            <div>
                <img src='${color.image.bare}' alt='' class='clr-img'/>
                <p class='hex-value'>${color.hex.value}</p>
            </div>
        `
       })

       clrSchemeContainer.innerHTML = colorImgs.join('')
    })
})

