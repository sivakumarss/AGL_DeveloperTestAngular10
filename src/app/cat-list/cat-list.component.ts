import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../service/rest-api.service";
import { PetOwner } from '../model/pet-owner';
import { ICat } from '../model/cat';
import * as constants from  '../shared/constants';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  PetOwner: any = [];
  MaleCats: ICat[] = [];
  FemaleCats: ICat[] = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadAglDeveloperTestApiData()
  }

    loadAglDeveloperTestApiData() {
      return this.restApi.getAglDeveloperTestApi().subscribe((data: {}) => {

        this.PetOwner = data;

        this.PetOwner.forEach((owner) => {
          if(owner.pets != null){

            owner.pets.forEach((pet) => {
              if(pet.type === constants.CAT ){

                let cat: ICat = {
                  CatName: pet.name,
                  CatOwnerGender: owner.gender
                }
              
                if(cat.CatOwnerGender === constants.MALE){
                  this.MaleCats.push(cat);
                } else if (cat.CatOwnerGender === constants.FEMALE){
                   this.FemaleCats.push(cat);
                }
              }

            });
          }
        });
      
        // console.log(this.MaleCats);
        // console.log(this.FemaleCats);
        // console.log(this.PetOwner);
 
      })
    }
}
