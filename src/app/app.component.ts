import { Component } from '@angular/core';
import { promise } from 'protractor';
import { reject } from 'q';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      "title": "Mon premier poste",
      "content": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla.",
      "loveIts": 1,
      "created_at": "Wed Sep 19 2018 22:02:34 GMT+0200"
    },
    {
      "title": "Mon deuxième poste",
      "content": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla.",
      "loveIts": -1,
      "created_at": "Wed Sep 19 2018 22:02:34 GMT+0200"
    },
    {
      "title": "Encore un  poste",
      "content": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla.",
      "loveIts": 0,
      "created_at": "Wed Sep 19 2018 22:02:34 GMT+0200"
    }

  ]
  
}


