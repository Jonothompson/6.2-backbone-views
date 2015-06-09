import likeView from '../views/likes';

(function(){
  'use strict';
  
  

  $(document).ready(function(){
    $('body').prepend(JST.likes());
    $('body').append(JST.loading());
    
    
  });
  

  
})();
