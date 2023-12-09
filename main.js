const toggle_theme = document.querySelector('.toggle-theme')
const theme = document.querySelector('.theme')

toggle_theme.onclick = () => {
    document.body.classList.toggle('light-theme')
    toggle_theme.classList.toggle('light')
    if(theme.innerHTML === 'Dark Mode'){
        theme.innerHTML = 'Light Mode'
    }
    else{
        theme.innerHTML = 'Dark Mode'
    }
} 