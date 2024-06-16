import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css'
})
export class HabitsComponent {
  @Input()
  title:string=""
}
