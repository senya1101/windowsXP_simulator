import '../pages/index.css'

const time = document.querySelector('.footer__options_date')

function updateTime() {
    const cur_time = new Date()
    const cur_hour = cur_time.getHours().toString().padStart(2, '0')
    const cur_minutes = cur_time.getMinutes().toString().padStart(2, '0')
    // const cur_date = cur_time.toLocaleDateString("en-US")
    time.innerText = `${cur_hour}:${cur_minutes}`
}
updateTime();
setInterval(updateTime, 60000)

time.addEventListener('click', ()=>{
    
})