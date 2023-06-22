const row_link = document.querySelectorAll('.row-links a');
const link1 = row_link[0];
const link2 = row_link[1];
const link3 = row_link[2];


row_link.forEach(elem => {
    elem.addEventListener('click', ()=>{
        if (!elem.classList.contains('active')){
            link1.classList.remove('active');
            link2.classList.remove('active');
            link3.classList.remove('active');
            elem.classList.add('active');
        }
    })
})

array.forEach(element => {
    
});