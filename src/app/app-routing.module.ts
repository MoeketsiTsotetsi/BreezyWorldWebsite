import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { VoiceUpComponent } from './voice-up/voice-up.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"products",component:PurchaseComponent},
  {path:"faq",component:FaqComponent},
  {path:'voice-up',component:VoiceUpComponent},
  {path:'product-detail/:id',component:ProductDetailComponent},
  {path:'promotion',component:PromotionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
