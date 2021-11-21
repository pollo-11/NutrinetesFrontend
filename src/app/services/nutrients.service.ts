import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nutrients } from '../model/nutrients';
@Injectable({
  providedIn: 'root',
})
export class NutrientsService {
  private apiUrl = 'http://localhost:8080/api/v1/Nutrients';
  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  getAll(): Observable<Nutrients[]> {
    return this.http.get<Nutrients[]>(this.apiUrl);
  }
  get(id: String): Observable<Nutrients> {
    return this.http.get<Nutrients>(`${this.apiUrl}/${id}`);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  update(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  getrda(min: number, max: number): Observable<Nutrients[]> {
    return this.http.get<Nutrients[]>(`${this.apiUrl}/${min}/${max}`);
  }
}
