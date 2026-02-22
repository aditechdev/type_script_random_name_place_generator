/** @format */

import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMaps";

declare global {
	interface Window {
		initMap: () => void;
	}
}

function loadGoogleMapsScript() {
	const script = document.createElement("script");

	script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap`;
	script.async = true;
	script.defer = true;

	document.head.appendChild(script);
}
loadGoogleMapsScript();
const user = new User();
console.log(user);

const company = new Company();
console.log(company);

window.initMap = () => {
	const customMap = new CustomMap("map");
	customMap.addMarker(user);
	customMap.addMarker(company);
};
