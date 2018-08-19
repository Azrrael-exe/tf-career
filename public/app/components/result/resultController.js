app.controller('resultController', function ($scope, formApi) {

    $scope.component = "Results";

    // var result = formApi.result()
    // result.$promise.then(function(result){
    //     console.log(result);
    // })

    function radarCharResults(results, municipios, variables){
        var iter = range(results.length)
        labels = variables
        datasets = []
        iter.forEach(function(index){
          dataset = {
            label : municipios[index],
            data : results[index],
            fill : false,
            hidden: true,
            borderColor : colors[index],
            backgroundColor: colors[index],
            pointBorderColor: colors[index],
            pointBackgroundColor: colors[index],
            pointStyle : 'circle'
          }
          datasets.push(dataset)
        })
        options = {
          animation: {
            duration: 0
          },
          legend: {
            display : true,
            position : 'right'
          },
          responsive : true,
          maintainAspectRatio : false,
          scale : {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 1,
              stepSize: 0.2
            },
          }
        };
        return {
          data : {
            labels : labels,
            datasets : datasets,
          },
          options : options
        }
      }

    
      var labels = [];
      var gdata = [];


    

    formApi.result().$promise.then(data => {
        $scope.result = data.result

        gdata = {
            data : {
                labels : [],
                datasets : [{
                    label: 'Resultados!',
                    data : [],
                    borderColor : "#00bab1",
                    backgroundColor: "rgba(0, 186, 177, 0.1)",
                }],
            },
            options : {
              }
        }
  
        for (var key in data.result) {
            gdata.data.labels.push(key)
            gdata.data.datasets[0].data.push(data.result[key])
        }
        console.log(gdata)
        $scope.gdata = gdata
    })
})