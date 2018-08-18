app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : 'app/components/home/homeView.html',
      controller  : 'homeController'
    })
    .when('/form', {
        templateUrl : 'app/components/form/formView.html',
        controller  : 'formController'
      })
    .when('/result', {
      templateUrl : 'app/components/result/resultView.html',
      controller  : 'resultController'
    })
  });