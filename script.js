const countEl = document.getElementById('actual-count')
const incBtn = document.getElementById('increment-btn')
const sBtn = document.getElementById('save-count-btn')
const saveEl = document.getElementById('save-p')
const totalEl = document.getElementById('total-p')
const clearEl = document.getElementById('clear-data-btn')


let count = 0
let totalEntries = 0

incBtn.addEventListener('click', () =>{
    count += 1
    countEl.textContent = count
})


sBtn.addEventListener('click', ()=>{
    saveEl.textContent += ` ${count} - `
    totalEntries += count
    totalEl.textContent = `Total entries: ${totalEntries}`
    count = 0
    countEl.textContent = 0
    
})

clearEl.addEventListener('click', ()=>{
    count = 0
    totalEntries = 0
    countEl.textContent = count
    saveEl.textContent = `Previous entries: `
    totalEl.textContent = `Total entries: `
})

