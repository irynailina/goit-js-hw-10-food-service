// import { _ } from "core-js";

const lazyLoad = target => {

    const options = {};

    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        console.log(entry.target);
    });
    }, options);

    io.observe(target)
    
}

const images = document.getElementsByTagName('img')
console.log(images)

images.forEach(image => {
    lazyLoad(image)
});