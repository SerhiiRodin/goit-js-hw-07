import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const ListItemsMarkup = createListItemsMarkup(galleryItems);

function createListItemsMarkup(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryEl.innerHTML = ListItemsMarkup;

//----

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const urlImg = event.target.dataset.source;
  const altImg = event.target.alt;

  const modal = basicLightbox.create(
    ` <img src="${urlImg}" alt="${altImg}"> `,
    {
      onShow: () => {
        document.addEventListener("keydown", onKeyEscapeClick);
      },
      onClose: () => {
        document.removeEventListener("keydown", onKeyEscapeClick);
      },
    }
  );

  function onKeyEscapeClick(event) {
    event.stopPropagation();
    // console.log(event.code);
    if (event.code === "Escape") {
      modal.close();
    }
    // return;
  }

  modal.show();

  //   console.log(urlImg);
  //   console.log(altImg);
}
