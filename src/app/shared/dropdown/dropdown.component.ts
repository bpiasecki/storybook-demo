import { Component, Input } from '@angular/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [DropDownsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @Input()
  data?: DropdownData[];

  selectedValue?: DropdownData; 

}

export interface DropdownData {
  id: number;
  name: string;
}