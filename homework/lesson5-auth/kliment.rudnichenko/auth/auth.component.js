angular.module('auth')
    .component('auth', {
        templateUrl: 'auth/auth.component.html',
        controller: AuthCtrl
    });

function AuthCtrl(authService, $state) {
    this.$onInit = function () {
        this.authUser = authService;

        this.regexp = {
            emial: /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/
        }
    };

    this.auth = function (auth) {
        this.authUser.auth = auth;

        if (auth) {
            $state.go('currency')
        }
    }
}