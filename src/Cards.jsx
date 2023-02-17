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
          <i class="ion-eye"></i>Click to view <article></article>
        </div>
    
      </footer>
     
    </figure>
  );
};

export default Cards;
