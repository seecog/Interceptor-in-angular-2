import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private user: string;
  constructor(private http : HttpClient){}
  register() {
    this.http.get("http://localhost:3001/api/data").subscribe(
      (res) => {
        console.log("The response is ", res)
      },
      (error) => {
        console.log("The error is ", error)
      }

    )
  }
}
