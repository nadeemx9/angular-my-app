import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountrycodePipe } from '../../pipes/countrycode.pipe';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountrycodePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  @Input() username=""
  @Input({transform:booleanAttribute}) isSigle!: boolean;
  @Input({transform:numberAttribute}) age!:number;
  @Input() mobile=""

  name='Nadeem'
  role='Developer'
  isButtionDisable = false
  inputValue = "test"
  users =[
    {name:'nadeem',age:19, city:'pbr'},
    {name:'jayesh',age:21, city:'pbr'},
    {name:'parth',age:21, city:'pbr'}
  ]

  employees=[
    {name:'jayesh', role:'developer', exp:2},
    {name:'nayan', role:'developer', exp:5},
    {name:'daksh', role:'ui', exp:2}
  ]


  onInput(e:Event){
    console.log("Key Pressed.")
    this.inputValue = (e.target as HTMLInputElement).value
  }
}
