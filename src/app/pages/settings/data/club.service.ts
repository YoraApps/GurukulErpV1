import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class ClubService {

 constructor(private http: HttpClient) { }
  baseUrl: string = 'http://testyora-001-site1.itempurl.com';

  getData() {
     return this.http.get<ClubObject>(this.baseUrl+"/api/ClubMaster/GetClubMaster");
  }
}

export interface Club {
        SetAction?: any;
        ClubId: number;
        ClubName: string;
        ClubDescription: string;
        Active: boolean;
        lastupdateddt: Date;
        lastupdatedby: number;
    }

    export interface ClubObject {
        results: Club[];
    }


