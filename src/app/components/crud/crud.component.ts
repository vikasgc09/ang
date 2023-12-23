import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../common.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{
  
SubmitForm() {
console.log(this.userForm.value);
this.service.AddUpdateUser(this.userForm.value).subscribe(data=>{
  alert("added");
  console.log(data);
}
)
}
userForm: any;

constructor(public fb:FormBuilder, private service: CommonService){
  this.userForm = this.fb.group({
    
    Text:[""],
    Description:[""],
  })
}
  ngOnInit(): void {
    
  }

}
