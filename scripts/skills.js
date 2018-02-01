app.controller('SkillsCtrl', function($scope) {

  var data = [{
    name: 'Web UI',
    y: 25,
    color: '#EB795C',
    details: [
      ['HTML', 15],
      ['CSS', 10],
      ['JavaScript', 25],
      ['Angular', 20],
      ['ReactJS', 20],
      ['Bootstrap', 10]
    ]
  }, {
    name: 'Database',
    y: 35,
    color: '#9DCF67',
    details: [
      ['MySQL', 10],
      ['Cassandra', 30],
      ['InfluxDB', 25],
      ['MongoDB', 20],
      ['Hive', 15]
    ]
  }, {
    name: 'Server End',
    y: 40,
    color: '#6795B5',
    details: [
      ['Python', 18],
      ['PHP', 18],
      ['Java', 40],
      ['Spring<br/>Framework', 24]
    ]
  }];
  var majorCategories = [];
  var minorCategories = [];
  angular.forEach(data, function(category) {
    var clone = angular.extend({}, category);
    delete clone.details;
    majorCategories.push(clone);

    angular.forEach(category.details, function(subcategory, index) {
      var brightness = (index / category.details.length) / 7;
      clone = {
        name: subcategory[0],
        y: subcategory[1] / 100 * category.y,
        color: Highcharts.Color(category.color).brighten(brightness).get()
      };
      minorCategories.push(clone);
    });
  });

  $scope.portfolio = {
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: 'Contribution to total value: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
      data: majorCategories,
      size: '50%',
      dataLabels: {
        distance: -60
      }
    }, {
      data: minorCategories,
      size: '100%',
      innerSize: '60%',
      dataLabels: {
        distance: -40
      }
    }]
  };

});