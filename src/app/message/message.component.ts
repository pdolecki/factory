import { Component, Input } from '@angular/core';

@Component({
  selector: 'message',
  template: `
    <section>
      <h1>Message {{ type }}</h1>
    </section>
  `,
})
export class MessageComponent {
  @Input() type: string = 'success';
}
