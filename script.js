






  const box = document.querySelector('.box_news')
  const catBox = document.querySelector('.categiries_box')
  const btn = document.querySelector('.btn')

  let categ = 0;
  
function getNews(categ){
  async function connect(){
    const api = '&apiKey=73c77832728541b2a180f10351b465ce';
    // Записываем адрес
    const addres = 'https://newsapi.org/v2/top-headlines'
    // обьявляем страну (язык)
    const country = '?country=ru'
    // обьявляем категорию
    let list_cat = '&category='

    let url = `${addres}${country}${list_cat}${categ}${api}`;
    let req = new Request(url);

    const response = await fetch(req);
    const data = await response.json();
    const newsBox = data;

    console.log(url)
    console.log(response)
    console.log(data)
    console.log(newsBox)
    startNews(newsBox.articles);
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
      const publishedAt = newsBox[i].publishedAt;
      console.log(urlToImage)
      console.log('создаем элементы на страницу')

      const newTask = document.createElement('div');
      newTask.classList.add('news_box');
      box.appendChild(newTask);
  
      const imageBox = document.createElement('img');
      imageBox.classList.add('image');
      imageBox.setAttribute('src', urlToImage);
      imageBox.setAttribute('alt', '');
      newTask.append(imageBox);
      
      

      const titleBox = document.createElement('a');
      titleBox.classList.add('title');
      titleBox.setAttribute('href', urlpage);
      titleBox.setAttribute('target', '_blank');

      titleBox.innerText = title;
      newTask.append(titleBox);

      const urlBox = document.createElement('a');
      urlBox.classList.add('urlBox');
      urlBox.innerText = description;
      newTask.append(urlBox);
    }
 } 
function detele22(){
  let i = 0;
  for (i = 0; i < document.querySelectorAll('.news_box').length; i++) {
    document.querySelector('.news_box').remove();
    detele22();
}
}

function go(){
  detele22();
  check();
}

function check(){
    if(document.querySelector('.news_box')){
      console.log('newsBox найден!');
      go();
    }else{
      console.log('newsBox не найден!');
      console.log('добавляем новые компоненты... ');
      connect();
    }
}
check();
}

function delete1(categ, indexmass){
  console.log(`delete1 даные об аргументах  ${categ} + ${indexmass}`)
  console.log(`число для сравнения ${indexmass}`);
}

function elem1(categ, indexmass){
  delete1(categ, indexmass)
  getNews(categ);
}

const mass = [ '' ,'business', 'entertainment', 'general', 'science', 'sports', 'technology'];

btn.onclick = function(categ, newTask){
  categ = mass[catBox.value]
  indexmass = catBox.value;
  if(indexmass == 0){
    alert('Выберите категорию');
    
  }else{
    elem1(categ, indexmass);
  }
}
getNews();