import LikeView from '../views/likes';
import LoadingView from '../views/loading';
import Like from './models/likes';

(function(){
  'use strict';
  
  

  $(document).ready(function(){
    $('#content').html(JST.likes());
    renderLike();
    renderLoading();
    
  function renderLike(){
    var like = new Like();
    var likeView = new LikeView({model: like})
    $('.likes').html(likeView.el);
  }
  
  function renderLoading() {
    var loadingButton = new LoadingView();
    $('.loading').html(loadingButton.el)
  }
    
  });
})();
