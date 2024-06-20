import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { authRoutes } from './routes/auth/auth.routes';
import { productsRoutes } from '../app/features/products/products.routes';

export const routes: Routes = [
    {
    path:'',//Route belirtilen path ile eşleştiğinde 
    component:HomePageComponent //ilgili componenti AppComponent'ten başlayarak ilk karşılaştığı <router-outlet></router-outlet> etiketine yerleştirir.
    },
    ...authRoutes,//authRoutes içindeki tüm route'ları routes'a ekler.
//... spread operator ile bir array içindeki tüm elemanları tek tek dışarı çıkarır.
    ...productsRoutes,
];