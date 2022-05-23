import { Component, OnInit } from '@angular/core';
import { arquivos } from './arquivos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  lista_arquivos = arquivos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
