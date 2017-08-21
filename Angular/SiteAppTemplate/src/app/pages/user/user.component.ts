import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { TargetState, StateService } from '@uirouter/core';

import {
    MdMenu,
    MdSidenav,
    MdToolbar,
    MdSidenavContainer
  } from '@angular/material/';

import { User } from './user.model';

@Component({
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    users: User[] = [];

    constructor(private authService: AuthService,
        private $state: StateService) { }

    ngOnInit() {
        // get users from secure api end point
        const _user: User = {username: 'Douglas', password: '****', firstName: 'Douglas', lastName: 'Fernandes'};
        this.users.push(_user);
    }

    logOut(){
        this.authService.logOut();
        this.$state.go('login');
    }

}
