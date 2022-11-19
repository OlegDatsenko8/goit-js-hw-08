import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

galleryItems.forEach(galleryItem => {
  galleryRef.innerHTML += `
        <div class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img
                class="gallery__image"
                src="${galleryItem.preview}"
                data-source="${galleryItem.original}"
                alt="${galleryItem.description}"
                />
            </a>
        </div>
    `;
});

const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 1,
  animationSpeed: 200,
  fadeSpeed: 200,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
