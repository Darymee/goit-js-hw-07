import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const imageContainer = document.querySelector(".gallery");
const imageMarkup = creacteGalleryMarkup(galleryItems);

function creacteGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__li"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
}

imageContainer.insertAdjacentHTML("beforeend", imageMarkup);

imageContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
