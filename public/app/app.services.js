app.factory('formApi', function ($resource) {
    return $resource('/api/', {}, {
        get: {
            url: '/api/',
            method: 'GET',
        },
        submit: {
            url: '/api/submit',
            method: 'POST'
        },
        result: {
            url: '/api/result',
            method: 'GET'
        }
    })
})