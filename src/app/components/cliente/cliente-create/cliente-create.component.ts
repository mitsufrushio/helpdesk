import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  
  nome: FormControl = new FormControl(null, Validators.minLength(3));
  idade: FormControl = new FormControl(null, Validators.required);
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  fone: FormControl = new FormControl(null, Validators.minLength(3));
  constructor () {

  }

  ngOnInit(): void {
   
  }

  validaCampos(): boolean {
    return  this.nome.valid  && 
            this.cpf.valid   && 
            this.email.valid && 
            this.idade.valid &&
            this.fone.valid;
  }
}
