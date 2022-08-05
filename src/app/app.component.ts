import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contador: number = 0;

  constructor(){

  }
 

  ngOnInit(){
    
  let interval = setInterval(() => {
	this.contador++;
	if(this.contador === 10) {
		clearInterval(interval);
	}	
  }, 1000)
  }


}
