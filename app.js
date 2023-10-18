
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));

const pageWrapper = document.querySelector('#wrapper');


document.querySelector('.moon').addEventListener('click', (e)=>{
    pageWrapper.classList.toggle('dark')
    console.log(pageWrapper)

})
