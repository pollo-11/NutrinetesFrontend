import { Component, OnInit } from '@angular/core';
import { Nutrients } from '../../model/nutrients';
import { NutrientsService } from '../../services/nutrients.service';

@Component({
  selector: 'app-add-nutrients',
  templateUrl: './add-nutrients.component.html',
  styleUrls: ['./add-nutrients.component.css'],
})
export class AddNutrientsComponent implements OnInit {
  nutrients = new Nutrients();
  submitted = false;
  msgError = '';

  constructor(private nutrientsService: NutrientsService) {
    // this.getDuenos();
  }

  ngOnInit(): void {}

  suaveNutriente(): void {
    const data = {
      name: this.nutrients.name,
      rda: this.nutrients.rda,
      wiki: this.nutrients.wiki,
      required: this.nutrients.required,
      type: this.nutrients.type,
      tui: this.nutrients.tui,
    };
    console.log('que contiene', this.nutrients.name);
    this.nutrientsService.create(data).subscribe(
      (data) => {
        this.submitted = true;
        console.log(data);
      },
      (error) => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error);
      }
    );
  }
  newNutriente() {
    this.submitted = false;
    this.nutrients.name = '';
    this.nutrients.rda = 0;
    this.nutrients.wiki = '';
    this.nutrients.required = true;
    this.nutrients.type = '';
    this.nutrients.tui = 0;
  }
}
