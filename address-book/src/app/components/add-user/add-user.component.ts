import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [HttpClientModule,FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  http=inject(HttpClient);
  router=inject(Router)

  userData:any={
    "fullname": "",
    "address": "",
    "city": "",
    "state": "",
    "zipCode": "",
    "phoneNumber": ""
  }

  isEditMode=false;

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { userData?: any };
    if (state?.userData) {
      this.userData = { ...state.userData };
      this.isEditMode = true;
    }
  }
  route = inject(Router);
  saveUserData(){
    if(this.isEditMode){
      this.http.put("http://localhost:8080/api/contacts/dto" + this.userData.id, this.userData).subscribe(() => {
        alert("User updated successfully!");
        this.router.navigate(['/dashBoard']);
      });
    }else{
      this.http.post("http://localhost:8080/api/contacts/dto",this.userData).subscribe((result:any)=>{
        alert("Data added successfully!")
        this.router.navigate(['/dashBoard']);
      });
    }
  }
}