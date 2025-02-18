import { Injectable } from "@angular/core";
import { HousingLocation } from "../interfaces/housing-location";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: "Warm Beds Housing Support",
      city: "Juneau",
      state: "AK",
      photo: "/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: "Homesteady Housing",
      city: "Chicago",
      state: "IL",
      photo: "/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: "Happy Homes Group",
      city: "Gary",
      state: "IN",
      photo: "/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
  ];
  constructor() {}

  getAllHousingLocation(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
