import refs from './refs';
import card from '../src/card.hbs';
import countryBack from '../js/requestBack';
import notifications from './notifications';


refs.form.addEventListener('submit', onSearch);


let page = 1;
let value = "";

function onSearch(e) {
  e.preventDefault();
  page = 1;
  value = refs.form.elements.query.value;
  refs.listCard.innerHTML = "";
  countryBack(value, page).then(imagesCard).catch(); 
}
refs.button.addEventListener('click', () => {
  page += 1;
  countryBack(value, page).then(imagesCard).catch();
  
 
});
function imagesCard(nameCountry) {
 if(nameCountry.hits.length === 0){
   notifications.errorNotFound();
   return
 }
  nameCountry.hits.map(c =>
    refs.listCard.insertAdjacentHTML('beforeend', card(c)));

  loadMore();
  button();
}

function button (){
  refs.button.classList.remove('hiden');
  refs.form.reset();
}
function loadMore (){
  setTimeout(() => {
    window.scrollTo({
      top:  refs.listCard.scrollHeight,
      behavior: "smooth"
  });
  }, 0)
}