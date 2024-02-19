
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  
//   template: `
//   <input type="text" #myInput>
//   <button (click)="logMessage(myInput.value)"></button>
// `,
})
export class TestComponent {
//  public name = 'Abu'
//  public hasError = false;
//  public number = 0;
//   public styleTwo  = {
//     color: "red",
//     fontStyle: "italic"
//   }.
// public greet = "";


// onClick(event) {
//   console.log(event);
//   this.greet = event.type;
// }
// hello = null;
// color = 'not';
// public red = 'this is red';
// public green = 'this is green';
// public blue = 'this is blue';
// @Input() public parentData;
// public name = 'Abu abdurakhimov'
  // imgUrl:string = ''
  // alt:string = 'hi'
  // func() {
  //   console.log('clicked')
  // }
  // name:string = ''
  // func() {
  //   console.log(this.name)
  // }
  // name:string = '';
  // surName:string = '';
  // email:string = '';
  // password:string | number = '';
  
  // func() {
  //   console.log(this.name,this.surName,this.email, this.password);
    
  //   this.name= '';
  //   this.surName= '';
  //   this.email= '';
  //   this.password= '';
  // }

  // imgUrl:string = 'https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg=';
  // clicked() {
  
  //   const imageElement = document.querySelector('img');
    
  //   if (imageElement) {
  //     imageElement.style.width = '500px'; 
  //     console.log(`${imageElement.width}px`)
  //   }

  //1. Removing class
added: boolean = true;
  clicked() {
    this.added = false;
    console.log('removed')
  }


  // 2. Conditional Styling
  red:boolean = true;
  
  // 3. Hover Effect
  size:string = '500px';

  // 4. click change
change:string = '';

  changed() {
    this.change = 'red'
    console.log('changed')
  }
  
//5. two buttons changes 
  sizee:string = '';
  colour:string = '';
  increased() {
    this.sizee ='150px'
    this.colour = 'green'
  }
  decreased() {
    this.sizee = '70px';
    this.colour = 'red'
  }

  // 6.Random apply
  colors: string[] = ['red', 'green', 'black', 'white'];
  randomColors: string[] = [];
  
  randomly() {
    this.randomColors = [];
    for (let i = 0; i < this.colors.length; i++) {
      const randomIndex = Math.floor(Math.random() * this.colors.length);
      this.randomColors.push(this.colors[randomIndex]);
    }
  }
  

  }
  
  

