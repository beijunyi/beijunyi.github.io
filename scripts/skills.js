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
    name: 'Exp & Vision',
    y: 35,
    color: '#9DCF67',
    details: [
      ['Agile', 10],
      ['TDD', 25],
      ['Algo & DS', 35],
      ['System Design', 30]
    ]
  }, {
    name: 'Server Side',
    y: 40,
    color: '#6795B5',
    details: [
      ['Java', 35],
      ['Elasticsearch', 25],
      ['Spring', 22],
      ['Hibernate', 10],
      ['SQL', 8]
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

  $scope.options = {
    title: {
      text: ''
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