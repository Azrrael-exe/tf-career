app.controller('resultController', function($scope, formApi) {
    
    $scope.component = "Results";

    // var result = formApi.result()
    // result.$promise.then(function(result){
    //     console.log(result);
    // })

    formApi.result().$promise.then(data => {
        $scope.result = data.message
        console.log(data)
    })

})