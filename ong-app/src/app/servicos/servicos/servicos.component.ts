import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicosService } from 'src/app/services/servicos/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
  obterServicos: Subscription;
  modelServicos: any;
  erros = false;
  mensagemErro: string;

  constructor(private servicosService: ServicosService) { }

  ngOnInit() {
    this.buscarServicos();
  }

  private buscarServicos(): void {
    this.obterServicos = this.servicosService.buscarServicos().subscribe(
      (data: any) => {
         if (data != null) {
          this.modelServicos = data;
         }
      },
      (error) => {
        this.erros = true;
        this.mensagemErro = 'Ocorreu um erro inesperado!';
      }
    );
  }
}
