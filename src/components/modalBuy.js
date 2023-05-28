const modalBuy = document.getElementById('modalBuy');

export const openModalBuy = (e, colors) => {
  e.preventDefault();
  fillModalWithData(colors);
  modalBuy.classList.add('pop-up_active');
  document.addEventListener('keydown', closeByEsc);
  modalBuy.addEventListener('click', addOverlayClickHandler(modalBuy));
};

function fillModalWithData(arrOptions) {
  const darkTheme = document.querySelector('.theme__dark');
  const options = modalBuy.querySelector('.options');

  arrOptions.forEach(option => {
    const optionItem = document.createElement('li');
    const radioBtn = document.createElement('input');
    const nameOption = document.createElement('label');
    radioBtn.type = 'radio';
    radioBtn.name = 'color';
    radioBtn.id = option;

    nameOption.for = 'color';
    radioBtn.className = 'form__option';
    nameOption.className = 'options__label';
    nameOption.textContent = option;
    optionItem.className = 'options__item';
    optionItem.append(radioBtn, nameOption);
    options.append(optionItem);

    if (darkTheme != undefined) {
      nameOption.classList.add('theme__dark_options');
    }
  });

  return options;
}

export const closeModalBuy = e => {
  const optionsTitle = document.querySelector('.options__title');
  const options = modalBuy.querySelector('.options');
  const note = document.querySelector('.err__note');

  closePopup(e, modalBuy);
  setTimeout(() => (options.innerHTML = ''), 500);
  optionsTitle.classList.remove('error');
  note.classList.remove('err__note_active');
};

export const addItemInCart = e => {
  e.preventDefault();
  formValidate(e);
};

function formValidate(e) {
  const getSelectedValue = document.querySelector('.form__option:checked');
  const optionsTitle = document.querySelector('.options__title');
  const note = document.querySelector('.err__note');

  if (getSelectedValue != null) {
    alert('Товар добавлен в корзину, можете продолжить покупки \u{1F60A}');
    closeModalBuy(e);
  } else {
    optionsTitle.classList.add('error');
    note.classList.add('err__note_active');
  }
}

const closePopup = (e, popup) => {
  e.preventDefault();
  popup.classList.remove('pop-up_active');
  document.removeEventListener('keydown', closeByEsc);
};

function closeByEsc(e) {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.pop-up_active');
    closeModalBuy(e);
  }
}

function addOverlayClickHandler(popup) {
  popup.addEventListener('click', evt => {
    if (!evt.target.closest('.pop-up__body')) {
      closeModalBuy(evt);
    }
  });
}
