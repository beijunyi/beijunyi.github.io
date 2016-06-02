app.controller('SkillsCtrl', function($scope) {

  function makeColors(base, max, offset, multiplier) {
    var colors = [];
    max = max || 10;
    offset = offset || -3;
    multiplier = multiplier || 1 / 7;
    for(var i = 0; i < max; i++) {
      colors.push(Highcharts.Color(base).brighten((i + offset) * multiplier).get());
    }
    return colors;
  }

  $scope.serverData = [
    ['Plain Java', 35],
    ['Elasticsearch', 25],
    ['Spring', 22],
    ['Hibernate', 10],
    ['SQL', 8]
  ];

  $scope.serverOptions = {
    chart: {
      width: 410,
      height: 400
    },
    title: {
      text: 'Server Side',
      x: 0,
      y: -30
    },
    plotOptions: {
      pie: {
        startAngle: -70,
        endAngle: 70,
        colors: makeColors('rgb(11, 110, 182)'),
        center: ['50%', '50%']
      }
    }
  };

  $scope.webData = [
    ['HTML', 15],
    ['JavaScript', 30],
    ['AngularJS', 35],
    ['CSS', 10],
    ['Bootstrap', 10]
  ];

  $scope.webOptions = {
    chart: {
      width: 410,
      height: 400
    },
    title: {
      text: 'Web UI',
      x: 30,
      y: 30
    },
    plotOptions: {
      pie: {
        startAngle: 74,
        endAngle: 160,
        colors: makeColors('rgb(253, 218, 62)'),
        center: ['50%', '50%']
      }
    }
  };

  $scope.othersData = [
    ['Agile', 10],
    ['TDD', 25],
    ['Algo & DS', 35],
    ['Design', 30]
  ];

  $scope.othersOptions = {
    chart: {
      width: 410,
      height: 400
    },
    title: {
      text: 'Vision',
      x: -25,
      y: 45
    },
    plotOptions: {
      pie: {
        startAngle: 164,
        endAngle: 286,
        colors: makeColors('rgb(146, 209, 79)'),
        center: ['50%', '50%']
      }
    }
  };

});