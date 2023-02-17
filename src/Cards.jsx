import React from "react";
import moment from "moment"
const Cards = ({ item }) => {
  return (
    <figure class="snip1216">
      <div class="image">
        <img
          src={item.jetpack_featured_media_url||"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"}
          alt="sample69"
          height={200}
          width={"100%"}
        />
      </div>
      <figcaption>
        <div class="date">
          <span class="day">{moment(item.date).format('Do')}</span>
          <span class="month">{moment(item.date).format('MMM')}</span>
        </div>
     
       <h3> <div style={{height:100}} dangerouslySetInnerHTML={{__html:item.title.rendered}}/></h3>
        <div style={{height:250}} dangerouslySetInnerHTML={{__html:item.excerpt.rendered}}/>
      
        
      </figcaption>
      <footer>
        <div class="views">
          <i class="ion-eye"></i>2,907
        </div>
        <div class="love">
          <i class="ion-heart"></i>623
        </div>
        <div class="comments">
          <i class="ion-chatboxes"></i>23
        </div>
      </footer>
      <a href="#"></a>
    </figure>
  );
};

export default Cards;
