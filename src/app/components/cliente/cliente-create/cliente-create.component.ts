import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    idade: '',
    nome: '',
    tipo: '',
    cpfCnpj: '',
    email: '',
    fone: '',
    whatsapp: ''
  }
  
  nome: FormControl = new FormControl(null, Validators.minLength(3));
  idade: FormControl = new FormControl(null, Validators.required);
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  fone: FormControl = new FormControl(null, Validators.minLength(11));
  whatsapp: FormControl = new FormControl(null, Validators.minLength(11));
  
  constructor (
    private service: ClienteService,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
   
  }

  
  create(): void {
    this.service.create(this.cliente).subscribe(() => {
      this.toast.success('Cliente cadastrado com sucesso!', 'Cadastro');
    }, ex => {
      console.log(ex);
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  addPerfil(tipo: any): void {

    if (this.cliente.tipo == tipo) {
      this.cliente.tipo = null;
      console.log(this.cliente.tipo);
    } else {
      this.cliente.tipo = tipo;
      console.log(this.cliente.tipo);
    }
    
/*     if(this.cliente.tipo.includes(tipo)) {
      this.cliente.tipo.splice(this.cliente.tipo.indexOf(tipo), 1);
      console.log(this.cliente.tipo);
    } else {
      this.cliente.tipo.push(tipo);
      console.log(this.cliente.tipo);
    } */
  }

  validaCampos(): boolean {
    return  this.nome.valid  && 
            this.cpf.valid   && 
            this.email.valid && 
            this.idade.valid &&
            this.fone.valid;
  }
}
