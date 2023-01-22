import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const ListItemsMarkup = createListItemsMarkup(galleryItems);

function createListItemsMarkup(items) {
  return items
    .map((item) => {
      return `
<li>
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
</li>`;
    })
    .join("");
}

galleryEl.innerHTML = ListItemsMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  nav: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  //   console.log(event.target);
  //   console.log(event.target.alt);
  //   console.log(event.target.nodeName);

  lightbox.open(event.target);
}
