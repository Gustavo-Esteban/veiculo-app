import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export interface Veiculo {
  id: string;
  placa: string;
  chassi: string;
  renavam: number;
  modelo: string;
  marca: string;
  ano: number;
}

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  private apiUrl = 'http://localhost:3000/veiculos';

  constructor(private http: HttpClient) {}

  listarVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  buscarVeiculoPorId(id: string): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  criarVeiculo(veiculo: Omit<Veiculo, 'id'>): Observable<Veiculo> {
    const novoVeiculo = { ...veiculo, id: uuidv4() };
    return this.http.post<Veiculo>(this.apiUrl, novoVeiculo).pipe(catchError(this.handleError));
  }

  atualizarVeiculo(id: string, veiculo: Veiculo): Observable<Veiculo> {
    return this.http
      .put<Veiculo>(`${this.apiUrl}/${id}`, veiculo)
      .pipe(catchError(this.handleError));
  }

  deletarVeiculo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Código do erro: ${error.status}, Mensagem: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
