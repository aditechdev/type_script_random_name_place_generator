/** @format */

import { faker } from "@faker-js/faker/.";
import { Mappable } from "./CustomMaps";

export class Company implements Mappable{
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};
	constructor() {
		this.companyName = faker.company.name();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		};
	}
    cole: string = 'green';

	markerContent(): string {
		return `<H1>Company Name: ${this.companyName}</H1>
        <H3>CatchPhrase: ${this.catchPhrase}</H3>
        `;
	}
}
