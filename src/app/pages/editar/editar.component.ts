import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  btnAcao: string = 'Editar!'
  btnTitulo: string = 'Editar Usuário'
  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router : Router){}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuarioService.GetUsuario(id).subscribe((data) => {
      this.usuario = data.dados;
    })
  }

  editarUsuario(usuario: Usuario) {
    this.usuarioService.EditarUsuario(usuario).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }

}
