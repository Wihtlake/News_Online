






  const box = document.querySelector('.box_news')
  const catBox = document.querySelector('.categiries_box')
  const btn = document.querySelector('.btn')

  let categ = 0;

async function getNews(categ){
  async function connect(){
        // записываем не изменяемый ключ api
    const api = '&apiKey=73c77832728541b2a180f10351b465ce';
    // Записываем адрес
    const addres = 'https://newsapi.org/v2/top-headlines'
    // обьявляем страну (язык)
    const country = '?country=ru'
    // обьявляем категорию
    let list_cat = '&category='
    // обьявляем значение категории 
    console.log(`getNews даные об аргументах  ${categ}  и номер ${indexmass}`);
    // создаем массив для категорий
    

    let url = `${addres}${country}${list_cat}${categ}${api}`;
    const response = await fetch(url);
    const data = await response.json();
    const newsBox = data.articles;
    startNews(newsBox);
  }

function startNews(newsBox){
  let i = 0;
  for (i = 1; i < newsBox.length; i++) {
    const author = newsBox[i].author;
    const content = newsBox[i].content;
    const description = newsBox[i].description;
    const title = newsBox[i].title;
    const urlpage = newsBox[i].url;
    const urlToImage = newsBox[i].urlToImage;

    console.log('создаем элементы на страницу')

    const newTask = document.createElement('div');
    newTask.classList.add('news_box');
    box.appendChild(newTask);

    const imageBox = document.createElement('img');
    imageBox.classList.add('image');
    imageBox.setAttribute('src', urlToImage);
    newTask.append(imageBox);

    const titleBox = document.createElement('h2');
    titleBox.classList.add('title');
    titleBox.innerText = title;
    newTask.append(titleBox);
    
    const urlBox = document.createElement('a');
    urlBox.innerText = description;
    urlBox.setAttribute('href', urlpage);
    newTask.append(urlBox);

    const contentBox = document.createElement('p');
    contentBox.classList.add('content');
    contentBox.innerText = content;
    newTask.append(contentBox);

    const descriptionBox = document.createElement('p');
    descriptionBox.classList.add('description');
    descriptionBox.innerText = description;
  }
} 
function detele22(){
  let i = 0;
  console.log(document.querySelectorAll('.news_box').length);

  for (i = 0; i < document.querySelectorAll('.news_box').length; i++) {
    console.log(i);
    document.querySelector('.news_box').remove();
    detele22();
    // ещё выражения
}
}

// example1.js
function go(){
  setTimeout(
    () => {
        console.log('удаляем старые компоненты... ');
        detele22();
        check();
      },
      1
    );
}

function check(){
  setTimeout(
() => {
    
    if(document.querySelector('.news_box')){
      console.log('newsBox найден!');
      go();
    }else{
      console.log('newsBox не найден!');

      console.log('добавляем новые компоненты... ');
      connect();
    }
    
  },
  1
);
}
check();
}


function delete1(categ, indexmass){
  console.log(`delete1 даные об аргументах  ${categ} + ${indexmass}`)
  console.log(`число для сравнения ${indexmass}`);
}

 const mass = [ '' ,'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

function elem1(categ, indexmass){
  delete1(categ, indexmass)
  console.log(`elem1 даные об аргументах  ${categ} и ${indexmass}`)
  console.log(`запускаем getNews`);
  getNews(categ);
}


btn.onclick = function(categ, newTask){
  categ = mass[catBox.value]
  indexmass = catBox.value;
  console.log(` нажали на кнопку и присвоили значение categ: ${categ}`);
  console.log(` нажали на кнопку и нашли значение массива indexmass: ${indexmass}`);
  console.log(`передели два значения в elem1 ${categ} ${indexmass}`)
  elem1(categ, indexmass);
}