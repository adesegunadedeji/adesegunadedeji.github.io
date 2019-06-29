function renderModal(){
  console.log("Modal works 1");
  $('.readMore').on('click', function () {
    $('.readMore').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  })
}




//Create Empty Array to Store NewsArticle
let newsArticle= [];

//render News Function
function renderNewsArticle (newsArticle){
  // const $Column = $(".col");
  //
    for(let i = 0; i< newsArticle.length;i++){
        const news = newsArticle[i];
        //console.log(news);
          if(i> 0 && i<5){
            const $newsDiv = $('#col1').append($(`<div class="FirstImage">`));
            $newsDiv.append($(` <h5> ${news.title}<h5>  <img src = ${news.urlToImage} width= "200"> <a  data-toggle="modal" data-target="#exampleModalLong" class ="readMore">Read More</a>`));
          }
          if(i> 5 && i<10){
            const $newsDiv = $('#col2').append($(`<div class="FirstImage">`));
            $newsDiv.append($(` <h5> ${news.title}<h5>  <img src = ${news.urlToImage} width= "200"> <a class = "readMore">Read More</a>`));
          }
          if(i> 10 && i<15){
            const $newsDiv = $('#col3').append($(`<div class="FirstImage">`));
            $newsDiv.append($(` <h5> ${news.title}<h5>  <img src = ${news.urlToImage} width= "200"> <a  class = "readMore">Read More</a>`));
          }
          if(i> 15 && i<20){
            const $newsDiv = $('#col4').append($(`<div class="FirstImage">`));
            $newsDiv.append($(` <h5> ${news.title}<h5>  <img src = ${news.urlToImage} width= "200"> <a class = "readMore">Read More</a>`));
          }
          else{

          }
    }
}

$("#news-Search").submit(function(e){

    e.preventDefault(); //Prevent Auto Refresh
    const userInput = $('#userInput').val();
    //console.log(userInput);
  const newsRequest= {
  url :`https://newsapi.org/v2/everything?q=${userInput}&apiKey=9baa6a46e2934aa0ad1687539cc29bb6&source=bbc-sport`,
    success: (response)=>{
             newsArticle = response.articles;
             renderNewsArticle (newsArticle);
             renderModal();
           //console.log(response);
             //let $div = $('body').append('<div id="search-container">');
           // $div.append(data.articles);
         },
         error: ()=>{
             console.log('bad request');
         }
     }
     $.ajax(newsRequest);
    })
