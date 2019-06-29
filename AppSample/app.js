let newsArticle= [];
function renderNewsArticle (newsArticle){
    for(let i = 0; i< newsArticle.length;i++){
        const news = newsArticle[i];
        const $newsContainer = $('body').append(`<div id=" news-Container">`);
        $newsContainer.append(news.url);
    }
}





$("#news-Search").submit(function(e){
    e.preventDefault(); //Prevent Auto Refresh
   
    const userInput = $('#userInput').val();
    //console.log(userInput);
  const NewsRequest= {
   
  url :`https://newsapi.org/v2/everything?q=${userInput}&apiKey=9baa6a46e2934aa0ad1687539cc29bb6&source=bbc-sport`,
    success: (response)=>{
             //newsArticle = response.articles;
             //renderNewsArticle (newsArticle)
            console.log(response);
             //let $div = $('body').append('<div id="search-container">');
           // $div.append(data.articles);
         },
         error: ()=>{
             console.log('bad request');
         }
     }
     $.ajax(NewsRequest);
    })
