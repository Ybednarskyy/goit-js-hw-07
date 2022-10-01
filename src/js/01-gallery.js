import { galleryItems } from "./gallery-items.js";
// Change code below this

const galaryBoxRef = document.querySelector(".gallery");
const markup = createImagesListMarkup(galleryItems);
galaryBoxRef.insertAdjacentHTML("beforeend", markup);
galaryBoxRef.addEventListener("click", onImageClick);
let instance;

function createImagesListMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

function onImageClick(evt) {
  blockStandartAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}"></img>`,

    {
      onShow: (instance) => {
        window.addEventListener("keydown", escapeHandler);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", escapeHandler);
      },
    }
  );
  instance.show();
}

function escapeHandler(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}

function blockStandartAction(evt) {
  evt.preventDefault();
}
