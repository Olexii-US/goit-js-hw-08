import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery')

const markupGallery = galleryItems.map(({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`  
).join('')

galleryBox.innerHTML = markupGallery;

new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay: 250});

console.log('hi')