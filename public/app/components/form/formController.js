app.controller('formController', function($scope,  $location, formApi) {
    
    $scope.component = "Form";

    $scope.submitData = function(input){
        formApi.submit(input).$promise.then(res => {
            console.log(res)
            $location.path( "/result" );
        })
    }

})