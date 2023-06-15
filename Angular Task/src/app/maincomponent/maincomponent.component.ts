import { Component } from '@angular/core';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent {
  tittles =[
    {title:"Header",content:"The core of our DNA: our values A common set of values helps us to define how we operate, how we create the products and services we provide, and, most notably, how we view and treat both our customers and each other."},
    {title:"Sub-header",content:"The 21st Century Challenge of Healthcare Living a healthy life is a basic human need. Research shows that health care services are only one of a range of factors affecting peoples’ health. As multiple research reports show, an individual’s health behaviours and physical environment are the key drivers, with health services themselves only influencing 10% to 20% of health outcomes."}
    
  ];

  headertitie:string[]=["Home","Product","Clients","Contact"]
}
