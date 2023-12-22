import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.css'
})
export class AddPageComponent implements OnInit {
  ngOnInit(): void {
    
  }
  onSubmit(){
    
  }
  title: String;
  desc:String;

}
