import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { TargetState, StateService } from '@uirouter/core';

import {
    MdMenu,
    MdSidenav,
    MdToolbar,
    MdSidenavContainer
  } from '@angular/material/';



@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    titulo: String;

    constructor(private authService: AuthService,
        private $state: StateService) { }

    ngOnInit() {
        this.titulo = 'Página Inicial';
    }

    logOut() {
        this.authService.logOut();
        this.$state.go('login');
    }

}
