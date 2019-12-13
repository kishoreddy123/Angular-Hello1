import { FavoriteChangedEvents } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello1 Angulare';
  post = {
    title: 'title',
    isFavorite: true
  }
  onFavoriteChanged(eventargs: FavoriteChangedEvents) {
    console.log('Fav. Changed: ', eventargs);
    
  }

  tweet = {
    body: '....',
    likesCount: 10,
    isLiked: true
  }
}
