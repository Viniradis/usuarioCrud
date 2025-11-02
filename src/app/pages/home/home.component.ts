import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuariosGeral: Usuario[] = [];
  

  colunas = ['ID', 'Login', 'Senha', 'Ações', 'Excluir']

  constructor(private usuarioService: UsuarioService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.usuarioService.GetUsuarios().subscribe(data => {
      console.log(data);
      const dados = data.dados;

        this.usuarios = dados.map(u => ({ ...u, mostrarSenha: false }));
       this.usuariosGeral = dados.map(u => ({ ...u, mostrarSenha: false }));
    });
  }

  search(event : Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.usuarios = this.usuariosGeral.filter(usuario => {
      return usuario.login.toLocaleLowerCase().includes(value);
    })
  }

  OpenDialog(id: number) {

    this.dialog.open(ExcluirComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    })
  }

  toggleSenha(usuario: Usuario) {
  usuario.mostrarSenha = !usuario.mostrarSenha;
}


}
