import {Component, Input} from "@angular/core";
import {Nuz} from "./nuz";

@Component({
  selector: 'nuz-detail',
  templateUrl: './nuz-detail.component.html'
})

export class NuzDetailComponent{
  @Input() nuz: Nuz;
}
