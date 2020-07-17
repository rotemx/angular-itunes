import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Song}                                           from "../../services/api.service";

@Component({
  selector: 'app-song',
  templateUrl: 'song.component.html',
  styleUrls: ['song.component.css']
})
export class SongComponent {

  @Input() song:Song
  @Output() playClicked = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  
  }
  
  play(){
    this.playClicked.emit(this.song.name)
  }

}
