import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {API} from '../app/config/apiconstant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpService) { }

  login(data) {
    return this.http.post(API.login.post.url, data);
  }

  boardSelection(data) {
    return this.http.post(API.boardSelection.post.url, data);
  }

  forgotPass(data) {
    return this.http.post(API.forgotPass.post.url, data);
  }

  changePass(data) {
    return this.http.post(API.changePass.post.url, data);
  }

  getAcademicYear(data) {
    return this.http.post(API.academicYear.post.url, data);
  }

  addTeacher(data) {
    return this.http.post(API.teacherAdd.post.url, data);
  }

  listTeacher(data) {
    return this.http.post(API.teacherlist.post.url, data);
  }

  editTeacher(data) {
    return this.http.post(API.teacherEdit.post.url, data);
  }

  deleteTeacher(data) {
    return this.http.post(API.teacherDelete.post.url, data);
  }

  inqueryManagerAdd(data) {
    return this.http.post(API.inqueryManager.post.url, data);
  }

  inqueryList(data) {
    return this.http.post(API.inqueryList.post.url, data);
  }

  inqueryEdit(data) {
    return this.http.post(API.inqueryedit.post.url, data);
  }

  udiseList(data) {
    return this.http.post(API.udiseList.post.url, data);
  }

  udiseadd(data) {
    return this.http.post(API.udiseAdd.post.url, data);
  }

  udiseDelete(data) {
    return this.http.post(API.udiseDelete.post.url, data);
  }

  gtrac(data) {
    return this.http.post(API.gtrac.post.url, data);
  }

  addDriver(data) {
    return this.http.post(API.addDriver.post.url, data);
  }

  editDriver(data) {
    return this.http.post(API.editDriver.post.url, data);
  }

  listDriver(data) {
    return this.http.post(API.listDriver.post.url, data);
  }

  deleteDriver(data) {
    return this.http.post(API.deleteDriver.post.url, data);
  }

  addBusRoute(data) {
    return this.http.post(API.busPointAdd.post.url, data);
  }

  editBusRoute(data) {
    return this.http.post(API.busPointEdit.post.url, data);
  }

  listBusRoute(data) {
    return this.http.post(API.busPointList.post.url, data);
  }

  deleteBusRoute(data) {
    return this.http.post(API.busPointDelete.post.url, data);
  }

  busMap(data) {
    return this.http.post(API.busMap.post.url, data);
  }

  listMapping(data) {
    return this.http.post(API.busMap.post.url, data);
  }

  addRole(data) {
    return this.http.post(API.addRole.post.url, data);
  }

  roleToggle(data) {
    return this.http.post(API.toggleRole.post.url, data);
  }

  updateRole(data) {
    return this.http.post(API.editRole.post.url, data);
  }

  listRole(data) {
    return this.http.post(API.listRole.post.url, data);
  }

}

