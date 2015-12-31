app.directive('cvHeader', function() {
  return {
    restriction:'E',
    transclude: {
      'name': 'cvHeaderName',
      'email': 'cvHeaderEmail',
      'phone': 'cvHeaderPhone'
    },
    template:
      '<div class="cv-header">' +
      '  <pre class="mono">' +
      '  /**\n' +
      '   * Author: <span ng-transclude="name"></span>\n' +
      '   * E-Mail: <span ng-transclude="email"></span>\n' +
      '   * Phone: <span ng-transclude="phone"></span>\n' +
      '   */' +
      '  </pre>' +
      '</div>'
  }
});