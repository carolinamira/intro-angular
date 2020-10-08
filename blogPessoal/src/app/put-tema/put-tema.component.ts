import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-tema',
  templateUrl: './put-tema.component.html',
  styleUrls: ['./put-tema.component.css']
})
export class PutTemaComponent implements OnInit {

  tema: Tema = new Tema()
  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    let id: number = this.route.snapshot.params["id"]
    this.findByIdTema(id)
    window.scroll(0,0)
  }

  salvar() {
    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      this.router.navigate(['/cadastro-tema'])
      this.alert.showAlertSuccess('Tema alterado com sucesso!')
    })

  }

  findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp})
  }

}
