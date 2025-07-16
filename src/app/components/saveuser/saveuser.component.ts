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

  id!: number;
  newrecord: boolean = false;
  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.newrecord=true;
    this.id = Number(this.router.url.split('/').pop());
    window.alert("User hello: " + this.id);
    if (this.id) {
      this.userService.getUserById(this.id).subscribe((response: any) => {
        if (response.status) {
          this.user = response.data;
        } else {
          window.alert("User not found");
          this.router.navigate(['/users']);
        }
      });
    } else {
      window.alert("Invalid user ID");
      this.router.navigate(['/users']);
    }

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
