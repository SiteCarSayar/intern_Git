import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id!: number;
newrecord: boolean = false;
  status?: string;
  user:User = new User();
  userList:User[] = [];
  constructor
  (private userService: UserService,private router: Router)
   {  }

  ngOnInit(): void {
    this.getAllUsers();
    

  }

  getAllUsers() {
    this.status ='ACTIVE';
    debugger
    this.userService.getAllUsers(this.status).subscribe((response:any) => {
      if(response.status){
        this.userList = response.data;
      }else{
        window.alert("No data found");
      }
      
    });

  }
  
  editUser(id: number) {
    this.router.navigate(['/user/create-user', id]);
  }
  deleteUser(user: User) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(user).subscribe((response: any) => {
        if (response.status) {
          window.alert("User deleted successfully!");
          this.getAllUsers(); // Refresh the user list
        } else {
          window.alert(response.message);
        }
      });
    }
  }
  


}
