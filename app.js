const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];
// - Создание и рендер разметки по массиву данных `galleryItems` из `app.js` и
// предоставленному шаблону.
const galeryEl = document.querySelector(".gallery");
const divLightbox = document.querySelector(".lightbox");
const divOverlay = document.querySelector(".lightbox__overlay");
const imgModal = document.querySelector(".lightbox__image");
const buttonClose = document.querySelector(".lightbox__button");
galleryItems.map((el, index) => {
  galeryEl.innerHTML += `<li class="gallery__item">
  <a class="gallery__link" href="${el.preview}">
  <img class="gallery__image" src="${el.preview}" data-source="${el.original}"
   alt="${el.description}" data-index="${index}"/></a></li>`;
});

galeryEl.addEventListener("click", (e) => {
  e.preventDefault();
  let modalLink = e.target.dataset.source;
  divLightbox.classList.add("is-open");
  imgModal.src = modalLink;
  imgModal.dataset.index = e.target.dataset.index
});


buttonClose.addEventListener("click", closeOverlay);
divOverlay.addEventListener("click", closeOverlay);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeOverlay()
  }
  if (e.key === "ArrowLeft") {
    arrowLeft()
  }
  if (e.key === "ArrowRight") {
    arrowRight()
  }

});

function closeOverlay() {
  divLightbox.classList.remove("is-open");
  imgModal.src = "";
}

function setNewSrc(step, index) {
  imgModal.dataset.index = `${index + step}`
  imgModal.src = galleryItems[index + step].original
}
function arrowLeft() {
  let index = +imgModal.dataset.index
  if (index === 0) {
    setNewSrc(0, galleryItems.length - 1)
    return
  }
  console.log(index);
  setNewSrc(-1, index)
}
function arrowRight() {
  let index = +imgModal.dataset.index
  if (index === galleryItems.length - 1) {
    setNewSrc(0, 0)
    return
  }
  console.log(index);
  setNewSrc(1, index)
}