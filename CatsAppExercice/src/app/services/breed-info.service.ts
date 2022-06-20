import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Breed } from '../shared/models/breed.model';

@Injectable({
  providedIn: 'root'
})
export class BreedInfoService {

  private breeds: Breed[] = [];
  private breed!: Breed;
  private total!: number;
  private page!: number;

  constructor() { }

  getBreedsList(): Breed[] {
    return this.breeds;
  }

  setBreedsList(breeds: Breed[]): void {
    this.breeds = breeds;
  }

  getBreed(): Breed {
    return this.breed;
  }

  setBreed(breed: Breed): void {
    this.breed = breed;
  }

  getTotal(): number {
    return this.total;
  }

  setTotal(totalBreeds: number): void {
    this.total = totalBreeds;
  }

  getPage(): number {
    return this.page;
  }

  setPage(page: number): void {
    this.page = page;
  }
}
