import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galaryBoxRef = document.querySelector(".gallery");
const markup = createImagesListMarkup(galleryItems);
galaryBoxRef.insertAdjacentHTML("beforeend", markup);
galaryBoxRef.addEventListener("click", onImageClick);

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
  console.log(evt.target);
  blockStandartAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}"></img>`
  );
  instance.show();
  //   console.log(instance.visible());

  galaryBoxRef.addEventListener("keydown", (evt) => {
    if (instance.visible && evt.code === "Escape") {
      instance.close();
    }
  });
}

function blockStandartAction(evt) {
  evt.preventDefault();
}
