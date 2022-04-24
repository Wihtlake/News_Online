let url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-04-24&' +
          'sortBy=popularity&' +
          'apiKey=73c77832728541b2a180f10351b465ce';

let req = new Request(url);

const fetchPost = fetch(req)
    .then(function(response) {
        console.log(response.json());
        const e = response.json();
    })
    
    