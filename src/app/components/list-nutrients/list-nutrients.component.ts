import { Component, OnInit } from '@angular/core';
import { Nutrients } from '../../model/nutrients';
import { NutrientsService } from '../../services/nutrients.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-nutrients',
  templateUrl: './list-nutrients.component.html',
  styleUrls: ['./list-nutrients.component.css'],
})
export class ListNutrientsComponent implements OnInit {
  nutrientsSet!: Nutrients[];
  nutrientsfil!: Nutrients[];
  idNutrients!: string;
  collectionSize!: number;
  searchTerm!: string;
  maximo!: number;
  minimo!: number;
  closeModal!: string;
  msgError = '';
  currentNutrients: any;
  currentIndex = -1;
  constructor(
    private nutrientsService: NutrientsService,
    private modalService: NgbModal
  ) {
    this.getNutrients();
  }

  ngOnInit(): void {
    this.refreshList();
  }
  triggerModal(content: any, val: Nutrients) {
    this.currentNutrients = val;
    this.retrievenutri(this.currentNutrients.id);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {
          this.closeModal = `Closed with: ${res}`;
        },
        (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  search(value: string): void {
    this.nutrientsfil = this.nutrientsSet.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
    this.collectionSize = this.nutrientsfil.length;
  }

  getNutrients() {
    this.nutrientsService.getAll().subscribe(
      (data) => {
        this.nutrientsSet = data;
        console.log('otra cosa que quiero saber', data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  retrievenutri(val: string): void {
    console.log('Que tiene ', this.currentNutrients, 'otra mas ', val);

    this.nutrientsService.get(val).subscribe(
      (data) => {
        this.currentNutrients = data;
        console.log(data);
      },
      (error) => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error);
      }
    );
  }
  deleteNutrients(id: string): void {
    this.nutrientsService.delete(id).subscribe(
      (data) => {
        this.refreshList();
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.getNutrients();
  }

  updateNutrients(): void {
    this.nutrientsService
      .update(this.currentNutrients.id, this.currentNutrients)
      .subscribe(
        (data) => {
          this.refreshList();
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  buscarrda(min: number, max: number) {
    console.log('Que tiene ', min);
    if (min > max) {
      alert('El primer número debe ser menor al segundo (SUUU)');
    } else {
      if (!(min || max)) {
        this.getNutrients();
      } else {
        this.nutrientsService.getrda(min, max).subscribe(
          (data) => {
            this.nutrientsSet = data;
            console.log(data);
          },
          (error) => {
            this.msgError = error.message + ' \n ' + error.error.message;
            console.log(error);
          }
        );
      }
    }
  }
  setActiveNutrients(nutrients: Nutrients, index: number): void {
    this.currentNutrients = nutrients;
    this.currentIndex = index;
  }
}
