import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EmptyViewModule } from './components/empty-view/empty-view.module';
import { Ng2ImgFallbackModule } from 'ng2-img-fallback';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicModule,
    EmptyViewModule,
    Ng2ImgFallbackModule,
    LazyLoadImageModule,
    Ionic2RatingModule,
  ],
  exports: [
    EmptyViewModule,
    Ng2ImgFallbackModule,
    LazyLoadImageModule,
    Ionic2RatingModule,
  ]
})
export class SharedModule {}
