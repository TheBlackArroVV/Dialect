/*var changeSize = function(){

  var articles = $(".article").toArray();
  articles = _.chunk(articles, 3);

  articles.map(function(articles){
    articles.sort( function(a,b) {
        if (a.offsetHeight > b.offsetHeight) return 1;
        if (a.offsetHeight < b.offsetHeight) return -1;
    });
  });
  // console.log(articles);

  articles.forEach(function(articles, i, articles) {
    console.log(articles  [articles.length-1].offsetHeight);
    articles.map(function(article)   {
      var heigth = article[article.length-1].offsetHeight;
      console.log(heigth);
      $(article).css('height', heigth);
      height = 0;
    });
  });

}


window.addEventListener('resize', function(event){
  changeSize();
});

changeSize();
*/