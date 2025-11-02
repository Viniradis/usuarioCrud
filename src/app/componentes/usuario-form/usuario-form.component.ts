import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuarios';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Usuario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosUsuario: Usuario | null = null;

  mostrarSenha: boolean = false;
  usuarioForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl(this.dadosUsuario ? this.dadosUsuario.id : 0),
      login: new FormControl(this.dadosUsuario ? this.dadosUsuario.login : '', [Validators.required]),
      senha: new FormControl(this.dadosUsuario ? this.dadosUsuario.senha : '', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
      ])
    });
  }

  submit() {
    this.onSubmit.emit(this.usuarioForm.value);
  }

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  get senha() {
    return this.usuarioForm.get('senha');
  }
}
