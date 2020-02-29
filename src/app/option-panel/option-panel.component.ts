import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-option-panel',
  templateUrl: './option-panel.component.html',
  styleUrls: ['./option-panel.component.css']
})
export class OptionPanelComponent implements OnInit {

  constructor() { }
  fetch(){
    //fetch the html content from the contenteditable area.
    var x = document.getElementById("textBox")
    alert(x.innerHTML);
  }

  //generic
  add(format : string){
    //execCommand use to reflect format changes in contenteditable area
    document.execCommand(format);
  }
  //for header 
  header(event){

    //execCommand use to reflect format changes in contenteditable area
    document.execCommand("formatBlock",false,"<"+event.target.value+">");
  }
  //for font size and font name
  font(format:string , event : any){
    document.execCommand(format,false,""+event.target.value);
  }
  ngOnInit(): void {
  }

}
