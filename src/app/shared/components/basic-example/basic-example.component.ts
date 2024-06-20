import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { disconnect } from 'process';
//component: angular tarafından bir görünüm ve işlev için küçük parçalardır.
@Component({
  selector: 'app-root',//template içinde kullanılacak etiket.
  standalone: true,//angular 17 sonrası için varsayılan hale geldi.
  //standalone componentler herhangi bir module yapısına bağlı kalmadan var olabilirler.
  imports: [CommonModule],//import edilecek modülleri ve angular yapılarını belirtir.
  templateUrl: './basic-example.component.html',
  styleUrl: './basic-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BasicExampleComponent {//değişkenler ve fonksiyonlar burada tanımlanır.
  title = 'Northwind Market';//state: angular state değerlerini tutar ve değer değişkenleri canlı olarak takip eder.

  cartCount : number = 0;//sepetteki ürün sayısını tutar.

  products : {name:string; price:number; discontinued:boolean}[]=[
    //Ürün Listesi
    {
      name:"Çay",
      price:100,
      discontinued:false
    },
    {
      name:"Kahve",
      price:200,
      discontinued:true
    },
    {
      name:"Su",
      price:50,
      discontinued:false
    },
    {
      name:"Meyve Suyu",
      price:20,
      discontinued:true
    },
    {
      name:"Maden Suyu",
      price:30,
      discontinued:false
    },

  ]
  
  onAddProductToCart(): void{//sepete ürün ekleme işlemi.
    this.cartCount += 1 ;
    console.log("Ürün sepete eklendi.");
  }
}