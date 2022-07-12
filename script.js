const content = [{
        title: "Discover innovative ways to decorate",
        body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        img: "./images/desktop-image-hero-1.jpg",
    },
    {
        title: "We are available all across the globe",
        body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        img: "./images/desktop-image-hero-2.jpg",
    },
    {
        title: "Manufactured with the best materials",
        body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        img: "./images/desktop-image-hero-3.jpg",
    }
];

const title = document.getElementById("slider-title");
const body = document.getElementById("slider-content");
const image = document.getElementById("slider-image");
const drawer = document.getElementById("drawer");

let curr = 0;

function next() {
    curr++;
    if (curr > 2)
        curr = 0;

    title.innerText = content[curr].title;
    body.innerText = content[curr].body;
    image.setAttribute("src", content[curr].img);

}

function prev() {
    curr--;
    if (curr < 0)
        curr = 2;

    title.innerText = content[curr].title;
    body.innerText = content[curr].body;
    image.setAttribute("src", content[curr].img);
}
drawer.style.display = "none";

function openDrawer() {
    if (drawer.style.display == "flex") {
        drawer.style.display = "none";
    } else {
        drawer.style.display = "flex";
    }
}

function closeDrawer() {
    drawer.style.display = "none";
}