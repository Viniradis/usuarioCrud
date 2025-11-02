import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  usuario? :Usuario;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuarioService.GetUsuario(id).subscribe((data) => {
      this.usuario = data.dados;
    })
  }

}
