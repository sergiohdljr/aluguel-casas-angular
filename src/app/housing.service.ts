import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})

export class HousingService {
  housingLocationList: Housinglocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo:
        'https://static01.nyt.com/images/2019/06/02/realestate/31EXCLUSIVE-SOPRANOS-slide-4SEN/31EXCLUSIVE-SOPRANOS-slide-4SEN-superJumbo.jpg',
      avaliableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo:
        'https://static01.nyt.com/images/2019/06/02/realestate/31EXCLUSIVE-SOPRANOS-slide-4SEN/31EXCLUSIVE-SOPRANOS-slide-4SEN-superJumbo.jpg',
      avaliableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo:
        'https://static01.nyt.com/images/2019/06/02/realestate/31EXCLUSIVE-SOPRANOS-slide-4SEN/31EXCLUSIVE-SOPRANOS-slide-4SEN-superJumbo.jpg',
      avaliableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo:
        'https://static01.nyt.com/images/2019/06/02/realestate/31EXCLUSIVE-SOPRANOS-slide-4SEN/31EXCLUSIVE-SOPRANOS-slide-4SEN-superJumbo.jpg',

      avaliableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo:
        'https://static01.nyt.com/images/2019/06/02/realestate/31EXCLUSIVE-SOPRANOS-slide-4SEN/31EXCLUSIVE-SOPRANOS-slide-4SEN-superJumbo.jpg',

      avaliableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://static01.nyt.com/images/2019/06/02/realestate/31EXCLUSIVE-SOPRANOS-slide-4SEN/31EXCLUSIVE-SOPRANOS-slide-4SEN-superJumbo.jpg',

      avaliableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://static01.nyt.com/images/2019/06/02/realestate/31EXCLUSIVE-SOPRANOS-slide-4SEN/31EXCLUSIVE-SOPRANOS-slide-4SEN-superJumbo.jpg',

      avaliableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://static01.nyt.com/images/2019/06/02/realestate/31EXCLUSIVE-SOPRANOS-slide-4SEN/31EXCLUSIVE-SOPRANOS-slide-4SEN-superJumbo.jpg',

      avaliableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://static01.nyt.com/images/2019/06/02/realestate/31EXCLUSIVE-SOPRANOS-slide-4SEN/31EXCLUSIVE-SOPRANOS-slide-4SEN-superJumbo.jpg',

      avaliableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo:
        'https://static01.nyt.com/images/2019/06/02/realestate/31EXCLUSIVE-SOPRANOS-slide-4SEN/31EXCLUSIVE-SOPRANOS-slide-4SEN-superJumbo.jpg',

      avaliableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];

  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find((housingLocation) => {
      housingLocation.id === id;
    });
  }

  constructor() {}
}
