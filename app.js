const container = document.querySelector('.container')
const img = document.querySelector('.images')
const imgs = document.querySelectorAll('.img')
const prevBtn = document.querySelector('.prev_btn')
const nextBtn = document.querySelector('.next_btn')

console.log(imgs)

imgs.forEach((img, index) => img.style.left = `${index*100}%`)

let counter = 0

nextBtn.addEventListener('click', () => {
    counter++
    carrosel()
})

prevBtn.addEventListener('click', () => {
    counter--
    carrosel()
})

function carrosel() { 
    /*if(counter > imgs.length -1) {
       counter = 0
    }
    if(counter < 0) {
        counter = imgs.length - 1
    }*/
//Methode Two
    if(counter < imgs.length-1) {
      nextBtn.style.display = 'block'
     
    } else {
      nextBtn.style.display = 'none'
    }

    if(counter > 0) {
      prevBtn.style.display = 'block'
    } else {
      prevBtn.style.display = 'none'
    }
    imgs.forEach((img => img.style.transform = `translateX(-${counter*100}%)`))
}

prevBtn.style.display = 'none'






