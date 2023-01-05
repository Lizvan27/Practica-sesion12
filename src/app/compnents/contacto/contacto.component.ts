import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  public formContacto! : FormGroup;

  nombre! : String;
  email! : String;
  empresa! : String;
  message! : String;
  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formContacto = this.formBuilder.group({
      nombre:["",
      [
        Validators.required
      ]
    ],
    email:["",
      [
        Validators.required
      ]
    ],
    empresa:["",
      [
        Validators.required
      ]
    ],
    message:["",
      [
        Validators.required
      ]
    ]
    })
    
  }
  loadAPI():any{
    const response = {
      Nombre: 'docente',
      email: 'docente@gmail.com',
      empresa: "Monitalia",
      Mensaje: "Hola Mundo"
    };

    this.formContacto.patchValue(response);


    this.formContacto.patchValue(
      {
        nombre: response.Nombre,
        email:response.email,
        empresa: response.empresa,
        message: response.Mensaje
      }
    )
  }    
  sendEmail(){
    console.log(this.formContacto.value)
  }
}
