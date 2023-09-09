import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/common';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-deletecity',
  templateUrl: './deletecity.component.html',
  styleUrls: ['./deletecity.component.css']
})
export class DeletecityComponent implements OnInit {
  city: City = new City()

  constructor(private cityService: CommonService) { }

  ngOnInit(): void {
    
    this.city = {
      id: 1,
      name: 'Sample City',
      lat: 12.345,
      lon: 67.890,
      countryId: 123,
      countryName: 'Sample Country'
    };
  }

  onDelete() {
    if (this.city && this.city.id) {
      this.cityService.deleteCity(this.city.id).subscribe(
        (response) => {
         
          console.log('City deleted successfully:', response);
        },
        (error) => {
        
          console.error('Error deleting city:', error);
        }
      );
    }
  }
}