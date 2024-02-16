import { Component } from '@angular/core';
// import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  name:string = '';
  surName:string = '';
  age:number = 0;
  
  func() {
    console.log(this.name,this.surName,this.age);
    
    this.name= '';
    this.surName= '';
    this.age= 0;
  }
}
