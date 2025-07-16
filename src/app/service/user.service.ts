import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    throw new Error('Method not implemented.');
  }


  constructor(
    private commonService: CommonService,
    private httpClient: HttpClient
  ) { }

  getAllUsers(status: string) {
    return this.httpClient.get(this.commonService.apiRoute + "/user/getAll?status=" + status);
  }
  
  getUserById(id: number){
    return this.httpClient.get(this.commonService.apiRoute+ "/user/get/"+id );
  }


  save(user: User){
    return this.httpClient.post(this.commonService.apiRoute+ "/user/save", user);
  }

 editUser(user: User) {
  return this.httpClient.post(this.commonService.apiRoute + "/user/update/" + user.id, user);
}
 deleteUser(user: User) {
  return this.httpClient.delete(this.commonService.apiRoute + "/user/delete/" + user.id);
}

}
