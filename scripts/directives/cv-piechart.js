app.directive('cvPiechart', function() {
  return {
    restrict: 'E',
    template: '<div></div>',
    replace: true,
    scope: {
      options: '=?'
    },
    link: function (scope, element) {
      var options = angular.merge({}, {
        credits: {
          enabled: false
        },
        chart: {
          type: 'pie',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
          margin: [0, 0, 0, 0],
          spacingBottom: 0,
          spacingTop: 0,
          spacingLeft: 0,
          spacingRight: 0
        },
        plotOptions: {
          pie: {
            allowPointSelect: false,
            animation: false,
            dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0px 1px 2px black'
              }
            },
            center: ['50%', '50%']
          }
        }
      }, scope.options);
      Highcharts.chart(element[0], options);
    }
  };
});