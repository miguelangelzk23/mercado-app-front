import { Component } from '@angular/core';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'input-serach',
  standalone: true,
  imports: [HlmInputDirective],
template: `
<input
  class="w-full  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
  hlmInput
  placeholder="¿Qué estás buscando hoy?"
  type="text"
/>`,
})
export class InputSearchComponent {}
