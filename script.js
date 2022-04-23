const box = document.querySelector('.box_news')

async function getNews(){
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=73c77832728541b2a180f10351b465ce';

    const response = await fetch(url);

    const data = await response.json();

    const newsBox = data.articles;

    let i = 0;
      
    for (i = 1; i < 9; i++) {
      console.log(i);
        const author = newsBox[i].author;
        const content = newsBox[i].content;
        const description = newsBox[i].description;
        const title = newsBox[i].title;
        const urlpage = newsBox[i].url;
        const urlToImage = newsBox[i].urlToImage;


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
        newTask.append(descriptionBox);

        

}
}
getNews();
