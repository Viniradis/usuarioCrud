import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent {
  inputdata: any ;
  usuario!: Usuario

  constructor(private usuarioService: UsuarioService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any, private ref:MatDialogRef<ExcluirComponent>) { }

  ngOnInit(): void {
    this.inputdata = this.data;

    this.usuarioService.GetUsuario(this.inputdata.id).subscribe((data) => {
      this.usuario = data.dados;
  });
}

Excluir() {
  this.usuarioService.ExcluirUsuario(this.inputdata.id).subscribe((data) => {
    this.ref.close();
    window.location.reload();
  }) 
  }

  Cancelar() {
    this.ref.close();
  }
}
