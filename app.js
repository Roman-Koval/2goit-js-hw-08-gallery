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

const refs = {
    imgModal: document.querySelector('.lightbox__image'),
    buttonClose: document.querySelector('.lightbox__button'),
    divLightbox: document.querySelector('.js-lightbox'),
    galeryEl: document.querySelector('.js-gallery'),
    divOverlay: document.querySelector('.lightbox__overlay')
  }
  
  
  refs.galeryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
  
  function createGalleryItems() {
      const galleryMarkup = galleryItems.map(({ original, preview, description }) => {
          return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" data-source="${original}" 
                  alt="${description}"/>
              </a>
          </li>`
      }
      ).join('');
      return galleryMarkup;
      
  }
  
  refs.galeryEl.addEventListener('click', onGalleryContainerClick);
  
  function onGalleryContainerClick(e) {
    e.preventDefault();
    
    if (!e.target.classList.contains('gallery__image')) {
      return
    } 
    refs.divLightbox.classList.add('is-open');
    addImageAttribute( e.target.alt, e.target.closest('.gallery__link').href );
    window.addEventListener('keydown', onEskKeyPress);
  }
  
  function addImageAttribute(alt, src) {
    refs.imgModal.src = '';
    if (refs.divLightbox.classList.contains('is-open')) {
      refs.imgModal.src = src;
      refs.imgModal.alt = alt;
    } else {
      refs.imgModal.src = '';
    }
  }
  
  refs.buttonClose.addEventListener('click', onCloseElClick);
  
  function onCloseElClick() {
    window.removeEventListener('keydown', onEskKeyPress);
    if (refs.divLightbox.classList.contains('is-open')){
      refs.divLightbox.classList.remove('is-open')
    }
    
  }
  
  refs.divOverlay.addEventListener('click', onCloseElClick);
  
  function onEskKeyPress(e) {
    if (e.code === 'Escape') { onCloseElClick() 
    }
    
    refs.divOverlay.addEventListener("click", arrowLeft);
    refs.divOverlay.addEventListener("click", arrowRight);
    window.addEventListener("keydown", (e) => {
  
  if (e.key === "ArrowLeft") {
    arrowLeft()
  }
  if (e.key === "ArrowRight") {
    arrowRight()
  }

});

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




    







    
  }

  