import {Component, OnInit} from '@angular/core';
import {Nuz} from "./nuz";
import {NuzService} from "./nuz.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NuzService]
})
export class AppComponent implements OnInit{
  ngOnInit(): void{
    this.getNoze();
  }

  title = 'Noze-nuz';
  selectedNuz: Nuz;
  noze: Nuz[];

  constructor (private nuzService: NuzService){}

  onSelect(nuz: Nuz): void {
    this.selectedNuz = nuz;
  }

  getNoze(): void{
    this.nuzService.getNoze().then(noze => this.noze = noze);
}
}
