   

function countryBack(name, page) {
  const myKey = '19710630-7a075c48acce7d09c67ce0055';
  return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=${myKey}`)
     .then(response => response.json())
   }
  export default countryBack;