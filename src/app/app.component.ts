import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/button/button.component';
import { DropdownComponent, DropdownData } from './shared/dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'storybook-demo';
  exampleData: DropdownData[] = [{id: 5, name: 'test1'}, {id: 10, name: 'test2'}]

  onClickMethod(e: any) {
    console.log(e)
  }
}
