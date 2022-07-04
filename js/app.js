fetch('https://raw.githubusercontent.com/csslick/animal-mobile/main/animal-data.json')
  .then(function (res) {
    return res.json();
  })
  .then(function (obj) {
    showAnimals(obj);
  });

function showAnimals(obj) {

  const quary = location.search;
  console.log(quary);
  const params = new URLSearchParams(quary).get('category');
  console.log(params);

  let string = 'category=cat';
  let category = "cat";

  obj.forEach(function (animal) {

    if (params == animal.category) {
      let html =
      `
      <div class="col">
        <img src=${animal.imgUrl} alt="dog">
          <p class="name">${animal.name}</p>
      </div>
      `
      $('.row').append(html);
    }

  });
  
}