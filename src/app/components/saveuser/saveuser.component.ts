import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-saveuser',
  templateUrl: './saveuser.component.html',
  styleUrls: ['./saveuser.component.css']
})
export class SaveuserComponent implements OnInit {

  newrecord: boolean = true;
  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

   
     const id = Number(this.router.url.split('/').pop());
    if (id) {
      this.newrecord = false;
      this.userService.getUserById(id).subscribe((response: any) => {
        if (response.status) {
          this.user = response.data;
          this.newrecord = false;
          this.findById(id);
        }
      });
  }
   }
   findById(id: number) {
    this.userService.getUserById(id).subscribe((response: any) => {
      if (response.status) {
        this.user = response.data;
      } else
        window.alert(response.message);
    });
  }

  save() {
    if (!this.user || !this.user.userName || !this.user.email || !this.user.address) {
      window.alert("Please fill in all required fields.");
      return;
    }
    this.userService.save(this.user).subscribe((response: any) => {
      if (response.status) {
        window.alert("Successed !!");
        this.router.navigate(['/users']);
      } else {
        window.alert(response.message);
      }
    });
  }

  edit() {
    if (!this.user.id) {
      window.alert("User ID Invalid.");
        return;
    }

    this.userService.editUser(this.user).subscribe((response: any) => {
      if (response.status) {
        window.alert("User updated successfully");
        this.router.navigate(['/users']);
      } else {
        window.alert("Failed to update user");
      }
    });

  }




}
