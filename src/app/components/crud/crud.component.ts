import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{
SubmitForm() {
console.log(this.userForm.value);
}
userForm: any;

constructor(public fb:FormBuilder){
  this.userForm = this.fb.group({
    Text:[""],
    Description:[""],
  })
}
  ngOnInit(): void {
    
  }

}
