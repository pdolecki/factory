import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  @ViewChild('messageContainer', { read: ViewContainerRef }) container: any;
  componentRef!: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  createMessageComponent(type: string) {
    this.container.clear();
    const factory: ComponentFactory<any> =
      this.resolver.resolveComponentFactory(MessageComponent);

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
