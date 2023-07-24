const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1)* 100}vh`

upBtn.addEventListener('click', () => {
    changeSlaide('up')
})

downBtn.addEventListener('click', () => {
    changeSlaide('down')
})


document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlaide('up')
    }else if (event.key === 'ArrowDown') {
        changeSlaide('down')
    }
})

function changeSlaide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    }else if (direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slidesCount - 1
        }
    }


    const height = container.clientHeight


    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
