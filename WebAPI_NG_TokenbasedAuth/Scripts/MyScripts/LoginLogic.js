 

//The Service Containing functions for Register User and 
//User Login
app.service('loginservice', function ($http) {

    this.register = function (userInfo) {
        var resp = $http({
            url: "/api/Account/Register",
            method: "POST",
            data: userInfo,
        });
        return resp;
    };

    this.login = function (userlogin) {
        
        var resp = $http({
            url: "/TOKEN",
            method: "POST",
            data: $.param({ grant_type: 'password', username: userlogin.username, password: userlogin.password }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return resp;
    };
});

app.controller('logincontroller', function ($scope, loginservice) {

    //Scope Declaration
    $scope.responseData = "";

    $scope.userName = "";

    $scope.userRegistrationEmail = "";
    $scope.userRegistrationPassword = "";
    $scope.userRegistrationConfirmPassword = "";

    $scope.userLoginEmail = "";
    $scope.userLoginPassword = "";

    $scope.accessToken = "";
    $scope.refreshToken = "";
    //Ends Here

    //Functionn to register user
    $scope.registerUser = function () {
        
        $scope.responseData = "";

        //The User Registration Information
        var userRegistrationInfo = {
            Email: $scope.userRegistrationEmail,
            Password: $scope.userRegistrationPassword,
            ConfirmPassword: $scope.userRegistrationConfirmPassword
        };
        
        var promiseregister = loginservice.register(userRegistrationInfo);

        promiseregister.then(function (resp) {
            $scope.responseData = "User is Successfully";
            $scope.userRegistrationEmail="";
            $scope.userRegistrationPassword="";
            $scope.userRegistrationConfirmPassword="";
        }, function (err) {
            $scope.responseData="Error " + err.status;
        });
    };


    $scope.redirect = function () {
        window.location.href = '/Employee/Index';
    };

    //Function to Login. This will generate Token 
    $scope.login = function () {
        //This is the information to pass for token based authentication
        var userLogin = {
            grant_type: 'password',
            username: $scope.userLoginEmail,
            password: $scope.userLoginPassword
        };

        var promiselogin = loginservice.login(userLogin);

        promiselogin.then(function (resp) {
            
            $scope.userName = resp.data.userName;
            //Store the token information in the SessionStorage
            //So that it can be accessed for other views
            sessionStorage.setItem('userName', resp.data.userName);
            sessionStorage.setItem('accessToken', resp.data.access_token);
            sessionStorage.setItem('refreshToken', resp.data.refresh_token);
            window.location.href = '/Employee/Index';
        }, function (err) {
            
            $scope.responseData="Error " + err.status;
        });

    };
});
