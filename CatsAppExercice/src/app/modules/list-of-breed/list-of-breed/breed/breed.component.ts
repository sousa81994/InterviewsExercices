import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Breed } from 'src/app/shared/models/breed.model';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {

  @Input() breed!: Breed;
  @Input() index!: number;
  @Output() breedClicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clicked(breed: number): void {
    this.breedClicked.emit(breed);
  }
}
