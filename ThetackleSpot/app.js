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

            const $newsDiv = $('#col1')
            const $h5 = $('<h5>').text(news.title)
           
            const $image = $(`<img>`).attr('src',news.urlToImage);
            $image.attr('width',200);
           

            const $aTag = $(`<a>`).attr("class","readMore");
            $aTag.attr("data-toggle","modal" );
            $aTag.attr("href","#" );
            $aTag.attr("data-target","#exampleModalLong" );
            $aTag.text("Read More");
            $aTag.attr("id",`${i-1}`)

            $newsDiv.append($image);
            $newsDiv.append($h5);
            $newsDiv.append($aTag);
            
          }
          if(i> 5 && i<10){
            const $newsDiv = $('#col2')
            const $h5 = $('<h5>').text(news.title)
           
            const $image = $(`<img>`).attr('src',news.urlToImage);
            $image.attr('width',200);
           
            const $aTag = $(`<a>`).attr("class","readMore");
            $aTag.attr("data-toggle","modal" );
            $aTag.attr("href","#" );
            $aTag.attr("data-target","#exampleModalLong" );
            $aTag.text("Read More");
            $aTag.attr("id",`${i-1}`)

            $newsDiv.append($image);
            $newsDiv.append($h5);
            $newsDiv.append($aTag);
          }
          if(i> 10 && i<15){
            const $newsDiv = $('#col3')
            const $h5 = $('<h5>').text(news.title)
           
            const $image = $(`<img>`).attr('src',news.urlToImage);
            $image.attr('width',200);
           
            const $aTag = $(`<a>`).attr("class","readMore");
            $aTag.attr("data-toggle","modal" );
            $aTag.attr("href","#" );
            $aTag.attr("data-target","#exampleModalLong" );
            $aTag.text("Read More");
            $aTag.attr("id",`${i-1}`)

            $newsDiv.append($image);
            $newsDiv.append($h5);
            $newsDiv.append($aTag);
          }
          if(i> 15 && i<20){
            const $newsDiv = $('#col4')
            const $h5 = $('<h5>').text(news.title)
           
            const $image = $(`<img>`).attr('src',news.urlToImage);
            $image.attr('width',200);
           
            const $aTag = $(`<a>`).attr("class","readMore");
            $aTag.attr("data-toggle","modal" );
            $aTag.attr("href","#" );
            $aTag.attr("data-target","#exampleModalLong" );
            $aTag.text("Read More");
            $aTag.attr("id",`${i-1}`)

            $newsDiv.append($image);
            $newsDiv.append($h5);
            $newsDiv.append($aTag);
          }
          else{

          }
    }
}


//RenderModal  Function to Show Modal and News Title and Content.
function renderModal (newsArticle){
  //console.log("Modal works 1");
$('.readMore').on('click', function (e) {
  //Empty Title and Body on Click 

  $(".modal-body").empty();
  $(".modal-title").empty();

  for(let i = 0; i< newsArticle.length;i++){
  const news = newsArticle[i];

  if(Number(e.target.id) === i){
    const $content = $(`<p>`);
    $content.text(news.content);
    const $title= news.title;

    $(".modal-body").append($content);
    $(".modal-title").append($title);
  }

  $('.readMore').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
  
  })
}
})
  }

$("#news-Search").submit(function(e){

    e.preventDefault(); //Prevent Auto Refresh
    const userInput = $('#userInput').val();
    //console.log(userInput);
  const newsRequest= {
  url :`https://newsapi.org/v2/everything?q=${userInput}&apiKey=9baa6a46e2934aa0ad1687539cc29bb6&source=bbc-sport`,
    success: (response)=>{
             newsArticle = response.articles;
             //Calling ghe Render news Article Function
             renderNewsArticle (newsArticle);

             renderModal(newsArticle);
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
