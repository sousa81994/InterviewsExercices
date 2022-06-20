import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable, of, switchMap } from 'rxjs';
import { Breed } from 'src/app/shared/models/breed.model';
import { Router } from '@angular/router';
import { BreedInfoService } from 'src/app/services/breed-info.service';

@Component({
  selector: 'app-list-of-breed',
  templateUrl: './list-of-breed.component.html',
  styleUrls: ['./list-of-breed.component.scss']
})
export class ListOfBreedComponent implements OnInit {
  public listOfBreeds: Breed[] = []
  public isLoaded: boolean = false;

  constructor(private http: HttpClient,
    private router: Router,
    private breedsInfo: BreedInfoService) { }

  ngOnInit(): void {
    if(this.breedsInfo.getBreedsList().length === 0){
      this.getResp('https://catfact.ninja/breeds').subscribe(finalResults => {
        this.listOfBreeds = finalResults;
        const limit = this.listOfBreeds.length;
        this.breedsInfo.setTotal(limit);
        this.breedsInfo.setBreedsList(this.listOfBreeds);
      });
    }

    else{
      this.listOfBreeds = this.breedsInfo.getBreedsList();
      this.isLoaded = true;
    }
  }

  getResp(url: string, results?: any): Observable<Breed[]> {
    const requestOptions = {
      headers: {
        responseType: 'json',
        observe: 'response'
      }
    }

    if(results === undefined){
      results = [];
    }

    return this.http.get<any>(url, requestOptions).pipe(switchMap((response: any) => {
      if(response.next_page_url) {
        return this.getResp(response.next_page_url, results?.concat(response.data));
      }
      else{
        this.isLoaded = true;
        return of(results?.concat(response.data));
      }
    }));
  }

  breedClicked(event: any): void {
    console.log(this.listOfBreeds[event])
    const breed = this.listOfBreeds[event]
    this.breedsInfo.setBreed(breed);
    this.breedsInfo.setPage(event);
    this.router.navigate([`breed-detail`]);
  }
}
