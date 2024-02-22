
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.aboutme');

for (let elm of elements) {
  observer.observe(elm);
}
let optionss = {
  threshold: [0.5] };
let observerr = new IntersectionObserver(onEntry, options);
let elementss = document.querySelectorAll('.title_main');

for (let elm of elementss) {
  observer.observe(elm);
}
let optionsss = {
  threshold: [0.5] };
let observerrr = new IntersectionObserver(onEntry, options);
let elementsss = document.querySelectorAll('.title_project');

for (let elm of elementsss) {
  observer.observe(elm);
}
let optionscard = {
  threshold: [0.5] };
let observercard = new IntersectionObserver(onEntry, options);
let elementscard = document.querySelectorAll('.card');

for (let elm of elementscard) {
  observer.observe(elm);
}
let optionsfaqt = {
  threshold: [0.5] };
let observerfaqt = new IntersectionObserver(onEntry, options);
let elementsfaqt = document.querySelectorAll('.faq_title');

for (let elm of elementsfaqt) {
  observer.observe(elm);
}
let optionsfaq = {
  threshold: [0.5] };
let observerfaq = new IntersectionObserver(onEntry, options);
let elementsfaq = document.querySelectorAll('.faq');

for (let elm of elementsfaq) {
  observer.observe(elm);
}

const openPopUp = document.getElementById('pop_up_open');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
openPopUp.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');
})
closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})