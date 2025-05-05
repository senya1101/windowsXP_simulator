import '../pages/index.css'

const time = document.querySelector('.footer__options_date')
const volume = document.querySelector('.footer__options_volume')
const volumeInput = document.querySelector('.volume-wrapper')
const muteInput = document.querySelector('#muted')
const muteIcon = document.querySelector('.footer__options_volume')

const contextMenu = document.querySelector('.context_menu')


function updateTime() {
    const cur_time = new Date()
    const cur_hour = cur_time.getHours().toString().padStart(2, '0')
    const cur_minutes = cur_time.getMinutes().toString().padStart(2, '0')
    time.innerText = `${cur_hour}:${cur_minutes}`
}

updateTime();
setInterval(updateTime, 60000)

time.addEventListener('click', () => {

})

volume.addEventListener('click', () => {
    volumeInput.classList.add('volume-wrapper-animated')
    setTimeout(() => {
        volumeInput.classList.add('volume-wrapper-active')
    })

    document.addEventListener('click', function quitHandler(evt) {
        if (!evt.target.classList.contains('volume-wrapper') && evt.target !== muteIcon) {
            volumeInput.classList.remove('volume-wrapper-active')
            document.removeEventListener('click', quitHandler)
        }
    })
})


muteInput.addEventListener('change', () => {
    muteIcon.classList.toggle('footer__options_volume-muted')
})

document.addEventListener('contextmenu', (evt) => {
    evt.preventDefault()
    const {innerHeight, innerWidth} = window;
    const {offsetHeight, offsetWidth} = contextMenu
    const x = offsetWidth + evt.offsetX + 20 > innerWidth ? evt.offsetX - offsetWidth : evt.offsetX
    const y = offsetHeight + evt.offsetY + 20 > innerHeight ? evt.offsetY - offsetHeight : evt.offsetY
    contextMenu.style.transform = `translateX(${x}px) translateY(${y}px)`

    contextMenu.classList.add('context_menu-animated')
    setTimeout(() => {
        contextMenu.classList.add('context_menu-active')
    })
    document.addEventListener('click', function handlerQuit(evt) {
        if (!evt.target.classList.contains('context_menu-item') && !evt.target.classList.contains('context_menu')) {
            contextMenu.classList.remove('context_menu-active')
            document.removeEventListener('click', handlerQuit)
        }
    })
})

class DragAndDrop {
    selectors = {
        icon: '[data-icon]'
    }

    draggingClass = 'isDragging'

    initialState = {
        offsetX: null,
        offsetY: null,
        isDragging: false,
        currentIcon: null
    }

    constructor() {
        this.state = {...this.initialState}
        this.bindEvents()
    }

    mouseDownHandler(evt) {
        const {target, x, y} = evt
        const iconElement = target.closest(this.selectors.icon);
        if (!iconElement) return;

        iconElement.classList.add(this.draggingClass)

        const {left, top} = target.getBoundingClientRect()

        this.state = {
            offsetX: x - left,
            offsetY: y - top,
            isDragging: true,
            currentIcon: iconElement,
        }
    }

    mouseMoveHandler(evt) {
        if (!this.state.isDragging) {
            return
        }
        const x = evt.pageX - this.state.offsetX
        const y = evt.pageY - this.state.offsetY
        this.state.currentIcon.style.left = `${x}px`
        this.state.currentIcon.style.top = `${y}px`

    }

    mouseUpHandler() {
        if (!this.state.isDragging) {
            return
        }
        this.state.currentIcon.classList.remove(this.draggingClass)
        this.state = {...this.initialState}
    }

    bindEvents() {
        document.addEventListener('pointerdown', evt => this.mouseDownHandler(evt))
        document.addEventListener('pointermove', evt => this.mouseMoveHandler(evt))
        document.addEventListener('pointerup', () => this.mouseUpHandler())
    }
}

new DragAndDrop()