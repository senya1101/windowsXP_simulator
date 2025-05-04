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

time.addEventListener('click', ()=>{
    
})

volume.addEventListener('click', ()=>{
    volumeInput.classList.add('volume-wrapper-animated')
    setTimeout(()=>{
        volumeInput.classList.add('volume-wrapper-active')
    })
    document.onclick = (evt)=>{
        if (!evt.target.classList.contains('volume-wrapper')) {
            volumeInput.classList.remove('volume-wrapper-active')
        }
    }
})

muteInput.addEventListener('change', ()=>{
    muteIcon.classList.toggle('footer__options_volume-muted')
})

document.addEventListener('contextmenu', (evt)=>{
    evt.preventDefault()
    contextMenu.style.transform = `translateX(${evt.offsetX}px) translateY(${evt.offsetY}px)`
    contextMenu.classList.add('context_menu-animated')
    setTimeout(()=>{
        contextMenu.classList.add('context_menu-active')
    })
    document.onclick = (evt)=>{
        if (!evt.target.classList.contains('context_menu-item') && !evt.target.classList.contains('context_menu')) {
            contextMenu.classList.remove('context_menu-active')
        }
    }
})