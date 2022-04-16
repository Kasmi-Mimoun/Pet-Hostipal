//* toggle menu method */
const toggleBtn = document.querySelector(".toggle");
const menu = document.querySelector(".nav");
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
})


//* create to top button */

let toTopBtn = document.querySelector('.to-top-btn');
document.addEventListener('scroll' , () => {
    if(window.scrollY > 1000) {
      toTopBtn.classList.add('display');
    }else{
      toTopBtn.classList.remove('display');
    }
  }
)
toTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})


// * create animation when scrolling on large screen  */
const sections = document.querySelectorAll("section");

if (window.screen.width >= 1024){
  // to display the boxes in the view port before scrolling 
  fadeInSection();
  // function when scrolling display hide boxes 
  document.addEventListener('scroll' , () => {
      fadeInSection();
    }
  )
    
}else {
  showAllInMobile();
}

// function to display all in mobile
function showAllInMobile(){
  sections.forEach(box => {
    box.classList.add('fade');
  })
}

function fadeInSection(){
    // get the point of display/hide the boxes
    const triggerBottom = screen.height - 400;
    sections.forEach((box) => {
        // get the position of the box from the top of window 
        const boxTop = box.getBoundingClientRect().top;
        // check if the box position is inf to the window height to display it 
        if(boxTop < triggerBottom){
            box.classList.add('fade');
        }else{
            box.classList.remove('fade');
        }
    })
}

// * testimonial slide */
const prevTest = document.getElementById('prev-test');
const nextTest = document.getElementById('next-test');
const testimonials = document.querySelectorAll('.test');
const testimonialWrapper = document.getElementById('client-test');
const testWrapper = document.querySelector('.test-wrapper');
let testimonialWrapperWidth = testimonialWrapper.getBoundingClientRect().width;
let testWidth = testimonialWrapperWidth / testimonials.length ;


function testToLeft(){

  if (testWrapper.scrollLeft < 860){
    testWrapper.scrollBy(testWidth, 0);
    nextTest.classList.add('active');
    prevTest.classList.add('active');
  } else {
    nextTest.classList.remove('active');
  }
}

function testToRight(){

  if (testWrapper.scrollLeft > 0){
    testWrapper.scrollBy(-testWidth, 0);
    nextTest.classList.add('active');
    prevTest.classList.add('active');
  } else {
    prevTest.classList.remove('active');
  }
}

nextTest.addEventListener('click', testToLeft);
prevTest.addEventListener('click', testToRight);

// * blog slide */
const prevBlog = document.getElementById('prev-blog');
const nextBlog = document.getElementById('next-blog');
const blogWrapper = document.querySelector('.blog-wrapper');
const article = document.querySelector('.article')

function blogToLeft(){
  if (blogWrapper.scrollLeft < 500){
    blogWrapper.scrollBy(testWidth, 0);
    nextBlog.classList.add('active');
    prevBlog.classList.add('active');
  } else {
    nextBlog.classList.remove('active');
  }
}
function blogToRight(){
  if (blogWrapper.scrollLeft > 0){
    blogWrapper.scrollBy(-testWidth, 0);
    nextBlog.classList.add('active');
    prevBlog.classList.add('active');
  } else {
    prevBlog.classList.remove('active');
  }
}

nextBlog.addEventListener('click', blogToLeft);
prevBlog.addEventListener('click', blogToRight);

