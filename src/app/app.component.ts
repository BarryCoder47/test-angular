import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataHandleService } from './data-handle.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
  mockData: any;
  postData : any;

  constructor(
    private service: DataHandleService
  ) {

  }

  ngOnInit(): void {
    this.service.fetchAndLogData();
    this.getData();
    this.getPost();
  }

  getData() {
    this.service.getData().subscribe((data) => {
      this.mockData = data;
      console.log('mock data is >>', this.mockData)
    })
  }

  getPost(){
    this.service.getProduct().subscribe((data) => {
      this.postData = data;
      console.log('post data for >>>>', this.postData)
    })
  }

  refreshData(){
     this.getPost();
  }   
  
}
