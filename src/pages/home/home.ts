import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;

  constructor(public navCtrl: NavController) {
    this.carros = [
      { nome:'Brasilia' ,preco: '900,00'},
      { nome:"Gol",preco: "19000,00" },
      {  nome:"Palio",preco: "11900,00" },
      {  nome:"Uno",preco: "9900,00" },
      {  nome:"Siena",preco:'20000,00' },
      {  nome:"208",preco: '25000,00' },
      {  nome:"408",preco: '20000,00'},
      {  nome:"Sandero",preco: '20000,00'},
      {  nome:"Logan",preco: '20000,00'},
      {  nome:"Tucson",preco: '20000,00'},
      {  nome:"Santa Fé",preco: '20000,00'},
      {  nome:"Sonata",preco: '20000,00'},
      {  nome:"CLio",preco: '20000,00'},
      {  nome:"Parati",preco: '20000,00'},
      {  nome:"Civic",preco: '20000,00'},
      {  nome:"Corolla",preco: '20000,00'},
    ]


  }

}
