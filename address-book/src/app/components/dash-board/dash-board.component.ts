import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,HttpClientModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashboardComponent {
  userData:any[]=[];
  http=inject(HttpClient);
  constructor(private router:Router){
    this.loadUsers();
  }
  loadUsers(){
    this.http.get("http://localhost:8080/api/contacts/dto").subscribe((result:any)=>{
      this.userData=result;
    })
  }
  deleteUser(userId:number){
    this.http.delete("http://localhost:8080/api/contacts/dto"+userId).subscribe((res:any)=>{
      alert("This record is deleted!")
      this.loadUsers();
    })
  }
  editUser(user: any) {
    this.router.navigate(['/add_user'], { state: { userData: user } });
  }
  
}
