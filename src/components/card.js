import { openModalBuy } from './modalBuy';
import { getDayInfo } from './date';

const cardTemplate = document.getElementById('card').content;

const createCard = ({ image, title, date, colors }) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const picture = cardElement.querySelector('.card__img');
  const publicationDate = cardElement.querySelector('.card__date');
  const btnBuy = cardElement.querySelector('.card__btn');

  publicationDate.textContent = getDayInfo(date);
  picture.src = image;
  picture.alt = title;
  cardElement.querySelector('.card__text').textContent = title;
  btnBuy.addEventListener('click', evt => openModalBuy(evt, colors));

  return cardElement;
};

export const renderProductCard = (data, item) => {
  data.filter(data => {
    if (`${data.category}`.trim().toLowerCase() === `${item.id}`.trim().toLowerCase()) {
      const cardElement = createCard(data);
      item.append(cardElement);
    }
  });
};
