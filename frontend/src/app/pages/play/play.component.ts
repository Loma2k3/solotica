import { Component } from '@angular/core';
import { StatusComponent } from '../../shared/components/status/status.component';
import { HabitsComponent } from '../../shared/components/habits/habits.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [StatusComponent,HabitsComponent,FooterComponent, NavigationComponent],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent {
    Task:boolean = true
    Inventory:boolean = false
    Shops:boolean = false
    Party:boolean = false
    Group:boolean = false
    Challenges:boolean = false
    Help:boolean = false
}
