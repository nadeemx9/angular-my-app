import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  @Input() username=""


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
