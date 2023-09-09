import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/models/common';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-createcity',
  templateUrl: './createcity.component.html',
  styleUrls: ['./createcity.component.css']
})
export class CreatecityComponent implements OnInit {
  cityForm: FormGroup;

  constructor(private fb: FormBuilder, private cityService: CommonService) {
    this.cityForm = this.fb.group({
      name: ['', Validators.required],
      lat: ['', Validators.required],
      lon: ['', Validators.required],
      countryId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.cityForm.valid) {
      const cityData: City = this.cityForm.value;
      this.cityService.createCity(cityData).subscribe(
        (response) => {
     
          console.log('City created successfully:', response);
        },
        (error) => {
          
          console.error('Error creating city:', error);
        }
      );
    }
  }
}