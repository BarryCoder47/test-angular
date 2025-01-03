import { Component } from '@angular/core';
import { DataHandleService } from '../data-handle.service';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-signal',
  imports: [ButtonModule, FloatLabelModule, InputTextModule, FormsModule],
  templateUrl: './test-signal.component.html',
  styleUrl: './test-signal.component.css'
})
export class TestSignalComponent {
  title = 'test-angular';
  mockData: any;
  postData : any;
  public value : any;

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
