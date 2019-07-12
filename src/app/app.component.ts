import { Component , OnInit } from '@angular/core';
import { FormControl , FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Regex Search';
  regPat=new FormControl('');
  textAr=new FormControl('');
  fileIn=new FormControl('');
  
  constructor(private http: Http){
    
  }

  
  ngOnInit(){

  }
}
