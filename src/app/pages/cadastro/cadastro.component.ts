import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  btnAcao = "Cadastrar!"
  btnTitulo = "Cadastrar Usuário!"

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  createUsuario(usuario: Usuario) {
    this.usuarioService.CreateUsuario(usuario).subscribe(() => {
      this.router.navigate(['/'])
    });
  }

}
