import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medbook';
  checked : boolean;
  show: boolean = true;
  jishow: boolean = true;
  washow: boolean = true;
  
  dishes =  [
    {
    name: 'Salad', 
    choices: [
    { name: 'Santa Fe' },
    { name: 'Greek' },
    { name: 'Asian' },
    ],
    related: [
    {
    name: 'Dressing', choices: [
    { name: 'Italian' },
    { name: 'Blue Cheese' },
    { name: 'Ranch' },
    ]
    },
    {
    name: 'Bread', choices: [
    { name: 'Italian' },
    { name: 'Flat' },
    { name: 'Sourdough' },
    ]
    }
    ]
    },
    {
    name: 'Entree', choices: [
    { name: 'Steak' },
    { name: 'Salmon' },
    { name: 'Rice' },
    ],
    related: [
    ]
    },
    {
    name: 'Soup', choices: [
    { name: 'Minestrone' },
    { name: 'Hot and sour' },
    { name: 'Miso' },
    ],
    related: [
    {
    name: 'Bread', choices: [
    { name: 'Breadsticks'}
    ]
    }
    ]
    }
    ];
    
}
