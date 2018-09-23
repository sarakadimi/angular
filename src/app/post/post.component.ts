import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
@Input() unPost;

  constructor() { }
  lastUpdate = new Date();

  ngOnInit() {
  }
  
  getColor() {
    if(this.unPost.loveIts > 0) {
      return 'green';
    } else if(this.unPost.loveIts < 0) {
      return 'red'
    }
}
love(){
  this.unPost.loveIts++;
}
dontLove(){
  this.unPost.loveIts--;
}
}
