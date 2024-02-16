import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ FormsModule,FooterComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent extends FooterComponent  {
// name!:string = 'hello;'

}
