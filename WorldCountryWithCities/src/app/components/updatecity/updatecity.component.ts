import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/models/common';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-updatecity',
  templateUrl: './updatecity.component.html',
  styleUrls: ['./updatecity.component.css']
})
export class UpdatecityComponent implements OnInit {
  cityForm: FormGroup;
  city: City = new City()

  constructor(private fb: FormBuilder, private cityService: CommonService) {
    this.cityForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lat: ['', Validators.required],
      lon: ['', Validators.required],
      countryId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  
  fetchCityData() {
    
    this.city = {
      id: 1,
      name: '',
      lat: 12.345,
      lon: 67.890,
      countryId: 123,
      countryName: ''
    };

    
    this.cityForm.patchValue(this.city);
  }

  onSubmit() {
    if (this.cityForm.valid) {
      const updatedCityData: City = this.cityForm.value;
      this.cityService.updateCity(updatedCityData).subscribe(
        (response) => {
          
          console.log('City updated successfully:', response);
        },
        (error) => {
          
          console.error('Error updating city:', error);
        }
      );
    }
  }
}