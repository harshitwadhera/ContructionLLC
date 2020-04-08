import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap,map,catchError } from 'rxjs/operators';

@Injectable()
export class homeService {

    userHeaders =  new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
    extractData(res:Response){
        if(res.status <200 || res.status>=300){
            throw new Error('Bad response'+res.status);
        }
        const body = res;
        return body;
    };

    constructor (private http:HttpClient){}

    getProjectDataAll():Observable<any>{

        return this.http.get('http://localhost:8080/projects',{
            headers:this.userHeaders,
            withCredentials:true,
        }).pipe(map(this.extractData.bind(this)),catchError((err) => this.handleErrorObservable(err)));
    }
    handleErrorObservable(error: Response | any) {
       return Observable.throw(error.message || error);
        //throw new Error("Method not implemented.");
    }

}