import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1Ijoiam9yZ2VwYXJlZGVzIiwiYSI6ImNsdjVqMXN5bDA0NjQyaW9iaWNzN3FyeHEifQ.8VPWC5xzIHwmZNJku6S6Tg';

import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { MiniMapsComponent } from './components/mini-maps/mini-maps.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

@NgModule({
	declarations: [
		FullScreenPageComponent,
		MapsLayoutComponent,
		MarkersPageComponent,
		MiniMapsComponent,
		PropertiesPageComponent,
		ZoomRangePageComponent,
	],
	imports: [CommonModule, MapsRoutingModule, CounterAloneComponent, SideMenuComponent],
})
export class MapsModule {}
