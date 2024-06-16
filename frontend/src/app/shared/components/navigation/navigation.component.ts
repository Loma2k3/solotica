import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  Task:boolean = true

  Inventory:boolean = false

  Shops:boolean = false

  Party:boolean = false

  Group:boolean = false

  Challenges:boolean = false

  Help:boolean = false

}
