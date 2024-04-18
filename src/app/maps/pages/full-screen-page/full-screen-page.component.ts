import { AfterViewInit, Component } from '@angular/core';
import mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken = 'pk.eyJ1Ijoiam9yZ2VwYXJlZGVzIiwiYSI6ImNsdjVqMXN5bDA0NjQyaW9iaWNzN3FyeHEifQ.8VPWC5xzIHwmZNJku6S6Tg';

@Component({
	templateUrl: './full-screen-page.component.html',
	styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit {
	ngAfterViewInit(): void {
		const map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/mapbox/streets-v12', // style URL
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9, // starting zoom
		});
	}
}
