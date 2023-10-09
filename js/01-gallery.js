import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulList = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  const liElement = document.createElement("li");
  liElement.innerHTML = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
  ulList.append(liElement);
});
ulList.addEventListener("click", viewImage);
function viewImage(event) {
  event.preventDefault();
  const clickOn = event.target.dataset.source;

  basicLightbox
    .create(
      `
  <img width="1400" height="900" src="${clickOn}">
`
    )
    .show();
}
console.dir(galleryItems);
