app.directive('cvPiechart', function() {
  return {
    restrict: 'E',
    template: '<div></div>',
    replace: true,
    scope: {
      options: '=?',
      title: '=?',
      data: '=?'
    },
    link: function (scope, element) {
      scope.data = scope.data || [];
      scope.title = scope.title || 'Untitled';
      var options = angular.merge({}, {
        credits: {
          enabled: false
        },
        chart: {
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
        title: {
          text: scope.title,
          align: 'center',
          verticalAlign: 'middle'
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
        },
        series: [{
          size: '100%',
          type: 'pie',
          name: scope.title,
          innerSize: '40%',
          data: scope.data
        }]
      }, scope.options);
      Highcharts.chart(element[0], options);
    }
  };
});