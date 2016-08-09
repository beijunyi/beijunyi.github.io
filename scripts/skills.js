app.controller('SkillsCtrl', function($scope) {

  var data = [{
    name: 'Web UI',
    y: 25,
    color: '#EB795C',
    details: [
      ['HTML', 15],
      ['JavaScript', 30],
      ['AngularJS', 35],
      ['CSS', 10],
      ['Bootstrap', 10]
    ]
  }, {
    name: 'CS Concepts',
    y: 35,
    color: '#9DCF67',
    details: [
      ['TDD', 10],
      ['Algorithm', 30],
      ['Data<br/>Structure', 25],
      ['System<br/>Design', 20],
      ['Reverse<br/>Engineering', 15]
    ]
  }, {
    name: 'Server Side',
    y: 40,
    color: '#6795B5',
    details: [
      ['Hibernate', 10],
      ['MongoDB', 8],
      ['Java', 40],
      ['Elasticsearch', 20],
      ['Spring<br/>Framework', 22]
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
      pointFormat: 'Approximate time spent <b>{point.percentage:.1f}%</b>'
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