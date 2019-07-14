import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    try {
      await this.apiService.getIndex();
      await this.apiService.getHome();

    } catch (e) {
      console.log(e);
    }
  }

}
