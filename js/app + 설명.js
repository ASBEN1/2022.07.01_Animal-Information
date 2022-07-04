
// 데이터 요청(data request)
fetch('https://raw.githubusercontent.com/csslick/animal-mobile/main/animal-data.json')
  .then(function (res) {
    return res.json(); // JSON 객체 변환
  })
  .then(function (obj) {
    // obj 동물데이터
    showAnimals(obj);
    // 만약 showAnimals의 이름을 변경하고 싶으면 EDIT -> Replace(Ctrl + H)


    // 최종 데이터 출력( object  /  .then(function (obj)로 설정 )
    /*console.log(obj);*/
    /*let name = obj[0].name;
    let category = obj[0].category;
    let imgUrl = obj[0].imgUrl;*/

    // *let html =* 에 무조건 백탭(`html에 쓰인 div...`)추가하고 밑에 append로 추가

    /* 예전 방식
    for (let i = 0; i < obj.length; i++) {
      let html = `
      <div class="col">
        <img src=${obj[i].imgUrl} alt="dog01">
          <p class="name">${obj[i].name}</p>
      </div>
      `

      $('.row').append(html);

    };*/

  });

function showAnimals(obj) {

  // URL quary parameter(매개변수)
  const quary = location.search;
  console.log(quary);
  // ? URL quary문을 object(변수)로 변경
  let params = new URLSearchParams(quary).get('category'); // const는 상수라 변경이 불가라서 let으로 변경해준다
  console.log(params);

  // params == null 이면 시작 페이지 dog 출력
  if(params == null){
    params = 'dog'
  };

  let string = 'category=cat'; // URL전달은 문자 형태로 (문자열)
  let category = "cat"; // 카테고리 변수에 cat이 있다. (변수형)

  // [동물 데이터 출력] forEach() 반복문
  obj.forEach(function (animal) {

    // 카테고리 구분 dog | cat | bird
    // 요청한 params와 animal.category 명이 일치하는 데이터만 출력한다.
    if (params == animal.category) {
      
      let html = `
      <div class="col">
        <img src=${animal.imgUrl} alt="dog">
          <p class="name">${animal.name}</p>
      </div>
      `
      $('.row').append(html);
    }

  });
}

//https://www.fun25.co.kr/blog/javascript-url-query-parameter-reading-updating-urlsearchparams/?page=5


/*
  매개변수(parameter)란 함수의 정의에서 전달받은 인수를
  함수 내부로 전달하기 위해 사용하는 변수를 의미한다.
  인수(argument)란 함수가 호출될 때 함수로 값을 전달해주는 값을 말한다.
*/

/*
  파라미터(매개변수(parameter))를 전달하여 요청하기
  홈페이지주소?name=유저 = ~.html?매개변수=이름
  매개변수 (URL parameter) name = '유저' <- 변수값

  (각 페이지마다 매개변수를 사용하겠다.)

  index.html -> index.html?category=dog -> 개를 보여줘라 
  cat.html -> cat.html?category=cat -> 고양이를 보여줘라 
  bird.html -> bird.html?category=bird -> 새를 보여줘라 
*/