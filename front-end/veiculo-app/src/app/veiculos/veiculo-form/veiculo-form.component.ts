import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculosService, Veiculo } from '../veiculos.service';

@Component({
  selector: 'app-veiculo-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.scss'],
})
export class VeiculoFormComponent implements OnInit {
  form: FormGroup;
  isEditMode = false;
  veiculoId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private veiculosService: VeiculosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      placa: ['', Validators.required],
      chassi: ['', Validators.required],
      renavam: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      ano: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
    });
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        if (params['id']) {
          this.isEditMode = true;
          this.veiculoId = params['id'];
          if (this.veiculoId) {
            this.carregarVeiculo(this.veiculoId);
          }
        }
      },
    });
  }

  carregarVeiculo(id: string): void {
    this.veiculosService.buscarVeiculoPorId(id).subscribe({
      next: (veiculo) => this.form.patchValue(veiculo),
      error: (error) => {
        console.error('Erro ao carregar veículo:', error);
        this.router.navigate(['/']);
      },
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const veiculo = this.form.value as Veiculo;

      if (this.isEditMode && this.veiculoId) {
        this.veiculosService.atualizarVeiculo(this.veiculoId, veiculo).subscribe({
          next: () => this.router.navigate(['/']),
          error: (error) => console.error('Erro ao atualizar veículo:', error),
        });
      } else {
        this.veiculosService.criarVeiculo(veiculo).subscribe({
          next: () => this.router.navigate(['/']),
          error: (error) => console.error('Erro ao criar veículo:', error),
        });
      }
    }
  }
}
