import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [DropDownsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input()
  data?: DropdownData[];

  selectedValue?: DropdownData; 

  constructor(private cdr: ChangeDetectorRef) {}

  onChange(value: DropdownData) {
    this.selectedValue = value;
    this.cdr.detectChanges();
  }

}

export interface DropdownData {
  id: number;
  name: string;
}