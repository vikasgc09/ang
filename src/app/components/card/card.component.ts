import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  
  dummyData = [
    {
      imageLink:"../../../assets/virat.jpg",
      title: "SEO management",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum asperiores voluptatum harum? Voluptatum quae, ratione earum a natus quas libero harum repellendus, cum perspiciatis possimus in, dolores deleniti maxime."
    },
    {
      imageLink:"../../../assets/virat.jpg",
      title: "SEO management",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum asperiores voluptatum harum? Voluptatum quae, ratione earum a natus quas libero harum repellendus, cum perspiciatis possimus in, dolores deleniti maxime."
    },
    {
      imageLink:"../../../assets/virat.jpg",
      title: "SEO management",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum asperiores voluptatum harum? Voluptatum quae, ratione earum a natus quas libero harum repellendus, cum perspiciatis possimus in, dolores deleniti maxime."
    },
    {
      imageLink:"../../../assets/virat.jpg",
      title: "SEO management",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum asperiores voluptatum harum? Voluptatum quae, ratione earum a natus quas libero harum repellendus, cum perspiciatis possimus in, dolores deleniti maxime."
    },
    {
      imageLink:"../../../assets/virat.jpg",
      title: "SEO management",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum asperiores voluptatum harum? Voluptatum quae, ratione earum a natus quas libero harum repellendus, cum perspiciatis possimus in, dolores deleniti maxime."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


