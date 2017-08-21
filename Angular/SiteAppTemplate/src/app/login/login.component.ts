import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { TargetState, StateService } from '@uirouter/core';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    @Input() returnTo: TargetState;

    model: any = {};
    loading = false;
    error = '';

    constructor(
            private authService: AuthService,
            private $state: StateService) {
            }

    ngOnInit() {
    }

    login() {
        this.loading = true;

        const returnToOriginalState = () => {
            const state = this.returnTo.state();
            const params = this.returnTo.params();
            const options = Object.assign({}, this.returnTo.options(), { reload: true });
            this.$state.go(state, params, options);
            this.error = '';
          };

          this.authService.authenticate(this.model.username, this.model.password).subscribe(result => {
            if (result === true) {
                returnToOriginalState();
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
            this.loading = false;
        });
    }
}
