import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  data:any;
  searchKey:string="";
  term:any;


  constructor(private http:HttpClient)
  {

  }

  ngOnInit(): void {
    this.getData()
  }

  getData()
  {
this.http.get('http://localhost:4200/assets/data.json').subscribe((result)=>
{
this.data=result;
console.log(this.data);


})
  }

  search(a:any) //a is the $event
  {
    this.searchKey=a.target.value
    
  }


}
