import { Component, OnInit } from '@angular/core';
import { SpacexService } from './spacex.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, // We're using the standalone feature, so we don't need a module here.
  styleUrls: ['./app.component.css'],
  imports: [HttpClientModule,CommonModule] 
})
export class AppComponent implements OnInit {
  crewData: any[] = [];  // To hold crew data


  // Here we inject our SpaceX service so we can use it to fetch the crew data.
  constructor(private spacexService: SpacexService) {}

  // This function runs when the component is initialized.
  ngOnInit(): void {
    this.spacexService.getCrewData().subscribe(
      (data) => {
        this.crewData = data;  // This will store the crew data we get from the API.
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
