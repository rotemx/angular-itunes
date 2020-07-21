import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Song}                                           from "../../services/api.service";


@Component({
  selector: 'app-song',
  templateUrl: 'song.component.html',
  // template : `<b>
  //   blah blah blah
  // </b>`,
  styleUrls: ['song.component.css']
})
export class SongComponent {

  
  @Input() song:Song
  @Output() playClicked = new EventEmitter()
  
  constructor() {
    // window['songComponents'] = window['songComponents'] || [];
    // window['songComponents'].push(this)
  }

  ngOnInit(): void {
  
  }
  
  play(){
    this.playClicked.emit(this.song.name)
  }

}
