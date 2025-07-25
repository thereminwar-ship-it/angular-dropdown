import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-dropdown',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="dropdown-preview">
      <div>
    </div>
      <div>&#x25BC;</div>
    </div>`,
})
export class MyDropdown {}
