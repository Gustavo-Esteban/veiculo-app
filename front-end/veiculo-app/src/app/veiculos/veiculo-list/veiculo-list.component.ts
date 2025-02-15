import { Component, OnInit } from '@angular/core';
import { VeiculosService, Veiculo } from '../veiculos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-veiculo-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.scss'],
})
export class VeiculoListComponent implements OnInit {
  veiculos: Veiculo[] = [];

  constructor(private veiculosService: VeiculosService) {}

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.veiculosService.listarVeiculos().subscribe({
      next: (data) => (this.veiculos = data),
      error: (error) => console.error('Erro ao carregar veículos:', error),
    });
  }

  deletarVeiculo(id: string): void {
    if (confirm('Tem certeza que deseja excluir este veículo?')) {
      this.veiculosService.deletarVeiculo(id).subscribe({
        next: () => this.carregarVeiculos(),
        error: (error) => console.error('Erro ao excluir veículo:', error),
      });
    }
  }
}
