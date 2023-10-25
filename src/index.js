import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const elems = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  cat: document.querySelector('.cat-info'),
};
elems.loader.classList.remove('is-hidden');
elems.select.classList.add('is-hidden');
elems.error.classList.add('is-hidden');
fetchBreeds()
  .then(response => {
    elems.select.classList.remove('is-hidden');
    const markup = response
      .map(
        ({ id, name }) =>
          `<option value = "${id}">${name}
    </option>`
      )
      .join('');
    elems.select.innerHTML = markup;
  })
  .then(() => {
    new SlimSelect({ select: `.breed-select` });
  })
  .catch(() => {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  })
  .finally(() => elems.loader.classList.add('is-hidden'));

elems.select.addEventListener('change', handlerSelect);

function handlerSelect(event) {
  elems.cat.classList.add('is-hidden');
  elems.loader.classList.remove('is-hidden');
  const id = event.currentTarget.value;
  fetchCatByBreed(id)
    .then(response => {
      elems.cat.classList.remove('is-hidden');
      elems.loader.classList.add('is-hidden');
      const { breeds, url } = response[0];
      const { name, temperament, description } = breeds[0];
      console.log(temperament);
      const markup = `
      <img src = ${url} class="cat-photos" width = 600/>
      <h1 class="cat-heading">${name}</h1>
      <p class="cat-description">${description}</p>
      <h2 clss="cat-temp">${temperament}</h2>
      `;
      elems.cat.innerHTML = markup;
    })
    .catch(() => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => elems.loader.classList.add('is-hidden'));
}
4;
