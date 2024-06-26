import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-angular-project';
  inputValue = '';
  apiResponse = '';
 
  constructor(private http: HttpClient) {}
 
  callApi() {
this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      (response: any) => {
        this.apiResponse = JSON.stringify(response);
      }
    );
  }
}
