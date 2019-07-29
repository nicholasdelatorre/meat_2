import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from 'app/app.error-handler';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantService {


  constructor(private _http: Http) { }

  restaurants(): Observable<Restaurant[]>{
    return this._http.get(`${environment.meat_api}/restaurants`)
    .map(response => response.json() as Restaurant[])
    .catch(ErrorHandler.handlerError);
  }


  getRestaurantById(id: string) : Observable<Restaurant>{
    return this._http.get(`${environment.meat_api}/restaurants/${id}`)
    .map( response => response.json() as Restaurant)
    .catch(ErrorHandler.handlerError);
  }

  getReviewsOfRestaurants(id: string) : Observable<any>{
    return this._http.get(`${environment.meat_api}/restaurants/${id}/reviews`)
    .map( response => response.json())
    .catch( ErrorHandler.handlerError);
  }

  getMenuOfRestaurant(id: string) : Observable<MenuItem[]>{
    return this._http.get(`${environment.meat_api}/restaurants/${id}/menu`)
    .map( response => response.json() as MenuItem[])
    .catch( ErrorHandler.handlerError);
  }

}
