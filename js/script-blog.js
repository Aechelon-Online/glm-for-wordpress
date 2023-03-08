const mobileMenu = document.querySelector(".mobile-menu")
const menuWrapper = document.querySelector(".menu-wrapper")
const cross = document.querySelector(".cross")
const menuBox = document.querySelector(".menu-box")
const spotMark = document.querySelector(".spot-mark")


menuWrapper.addEventListener('click', () => {
    mobileMenu.classList.toggle("reveal");
    menuWrapper.classList.toggle("move-tab");
    menuBox.classList.toggle("hide-lines");
    spotMark.classList.toggle("cross");
})


// Blog article post

const post = document.querySelector(".blog__wrapper")
const headlines = [{
    title: "10 Reasons Not To Hire A Cheap DJ",
    image: "https://media.tenor.com/bmNSAjZPhKsAAAAC/bassbrain-dj-bassbrain.gif",
    link: "https://greglucemusic.com/blog/articles/10-reasons-not-to-hire-a-cheap-dj/index.html",
    article: "There are so many things to decide for your big day, but sometimes it’s hard to budget for everything and make it work perfectly. A wedding DJ doesn’t seem like it should be as much of a deal when it comes to cost. Besides, they are all pretty much the same, right? You may be in for a rude awakening when you thought you were saving money in place of the experience you are hoping for. Here are 10 reasons you would want to strongly consider NOT lowballing your entertainment needs."
  }, 
  {
    title: "Cheap DJs ≠ Experience!",
    image: "../img/cheap-dj.jpg",
    link: "https://greglucemusic.com/blog/articles/a-cheap-dj-does-not-equal-experience/index.html",
    article: "You want the best entertainment, and weddings aren't cheap. But, hey, one DJ is just good as the next, right?. And let's face it, no one wants a boring reception with bad music. So why on earth would you hire a cheap DJ? That's like trying to save money by buying a used toilet seat at a garage sale. It's just a bad idea."
  }]

let snippets = headlines.map(headline => {
  return post.innerHTML += `
  <div class="blog__dj-section">
    <a class="blog__link" href='${headline.link}'><h1 class="blog__title">${headline.title}</h1></a>
      <div class="blog__worst-dj blog__worst-dj-front">
        <a class="blog__link" href='${headline.link}'><img class="blog__img" src="${headline.image}" /></a>
      </div>
    <section class="blog__section blog__section-front">
      <p class="blog__header">${headline.article.split(" ").splice(0, 20).join(" ") + "..."} <a class="blog__link" href='${headline.link}'>(see article)</p>
    </section>
    </div>`
});
