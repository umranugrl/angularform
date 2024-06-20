import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//component: angular tarafından bir görünüm ve işlev için küçük parçalardır.
@Component({
  selector: 'app-root',//template içinde kullanılacak etiket.
  standalone: true,//angular 17 sonrası için varsayılan hale geldi.
  //standalone componentler herhangi bir module yapısına bağlı kalmadan var olabilirler.
  imports: [CommonModule, RouterModule ,NavbarComponent,FooterComponent],//import edilecek modülleri ve angular yapılarını belirtir.
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

// Angular 17 öncesinde varsayılan olarak componentler Module yapısında tanımlanıyorlardı.
// Angular Module Örneği
// @NgModule({
//   declarations: [AppComponent], // Component, Directive ve Pipe'ları tanımlar.
//   imports: [], // Dışarıdan alınan modülleri ekler.
//   providers: [], // Servisleri ekler.
//   bootstrap: [AppComponent], // Uygulamanın başlangıç componentini belirler.
// })
// export class AppModule {}