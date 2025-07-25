import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MyDropdown } from './components/my-dropdown';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MyDropdown],
  template: `
    <h1>Colour dropdown</h1>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
      <div>Select subject...</div>
      <div>Selected subject:</div>
      <div><my-dropdown></my-dropdown></div>
      <div></div>
    </div>
    <p>Please select your favourite subject above.</p>
  `,
})
export class App {
  selectedSubject = 0;
  subjects = [
    { Name: 'Art', Colour: '#e91e63' },
    { Name: 'History', Colour: '#673ab7' },
    { Name: 'Geography', Colour: '#4caf50' },
    { Name: 'Maths', Colour: '#2196f3' },
  ];
}

bootstrapApplication(App);
