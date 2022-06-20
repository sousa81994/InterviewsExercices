import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { BreedInfoService } from 'src/app/services/breed-info.service';
import { Breed } from 'src/app/shared/models/breed.model';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.scss']
})
export class BreedDetailComponent implements OnInit {
  public breed!: Breed;
  public isLoaded: boolean = false;
  public randomFact!: string;
  public pageFact!: string;
  
  private total!: number;
  private page!: number;

  constructor(private breedsInfo: BreedInfoService,
    private http: HttpClient,
    private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.breed = this.breedsInfo.getBreed();

    if(!this.breed){
      this.router.navigate([`list-of-breeds`]);
    }
    else{
      this.page = this.breedsInfo.getPage();
      this.total = this.breedsInfo.getTotal();

      const requestRandomFact = await this.getRandomFact();
      const requestPageFacts = await this.getPageFacts(this.total);

      this.randomFact = requestRandomFact.fact;
      this.pageFact = requestPageFacts.data[this.page].fact;

      this.isLoaded = true;
    }
    
  }

  async getRandomFact(): Promise<any> {
    const requestOptions = {
      headers: {
        responseType: 'json',
        observe: 'response'
      }
    }

    const request = this.http.get<any>(`https://catfact.ninja/fact`, requestOptions);

    return await lastValueFrom(request);
  }

  async getPageFacts(total: number): Promise<any> {
    const requestOptions = {
      headers: {
        responseType: 'json',
        observe: 'response'
      }
    }

    const request = this.http.get<any>(`https://catfact.ninja/facts?limit=${total}`, requestOptions);

    return await lastValueFrom(request);
  }

  goToHomepage(): void {
    this.router.navigate([`list-of-breeds`]);
  }

}
