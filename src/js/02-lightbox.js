import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galaryBoxRef = document.querySelector(".gallery");
const markup = createImagesListMarkup(galleryItems);
galaryBoxRef.insertAdjacentHTML("beforeend", markup);

function createImagesListMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
    </li>`;
    })
    .join("");
}

const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
