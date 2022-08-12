import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageContainer = document.querySelector(".gallery");
const imageMarkup = creacteGalleryMarkup(galleryItems);

function creacteGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

imageContainer.insertAdjacentHTML("beforeend", imageMarkup);

imageContainer.addEventListener("click", onGalleryClick);

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});
