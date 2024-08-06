document.addEventListener('DOMContentLoaded', () => {
const inputtext = document.getElementById('txt')
const inputbtn = document.getElementById('adc')
const inputUl = document.getElementById('idUl')

inputbtn.addEventListener('click', () => {
    const valortxt = inputtext.value.trim()
    if ( valortxt !== '') {
        add(valortxt)
        inputtext.value = ''
        inputtext.focus()
    }

    inputUl.addEventListener('click', (e) => {
    if ( e.target.classList.contains('remove')) {
        e.target.parentElement.remove()
    }
    })
})

function add(valortxt) {
    const li = document.createElement('li')
    li.textContent = valortxt
    
    const remove = document.createElement('button')
    remove.textContent = 'remove'
    remove.classList.add('remove') 
    
    li.appendChild(remove)

    inputUl.appendChild(li)

}



}) 
