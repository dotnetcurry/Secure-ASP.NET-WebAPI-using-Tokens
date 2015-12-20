//1.
app.controller('emplcontroller', function ($scope, empservice) {
    $scope.Employees = [];

    $scope.Message = "";
    $scope.userName = sessionStorage.getItem('userName');


    loadEmployees();

    function loadEmployees() {
        

        var promise = empservice.get();
        promise.then(function (resp) {
            $scope.Employees = resp.data;
            $scope.Message = "Call Completed Successfully";
        }, function (err) {
            $scope.Message = "Error!!! " + err.status
        });
    };
    $scope.logout = function () {
         
        sessionStorage.removeItem('accessToken');
        window.location.href = '/Login/SecurityInfo';
    };
});