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
      '   * Author: <span ng-transclude="name"></span ng-transclude>\n' +
      '   * E-Mail: <span ng-transclude="email"></span ng-transclude>\n' +
      '   * Phone: <span ng-transclude="phone"></span ng-transclude>\n' +
      '   */' +
      '  </pre>' +
      '</div>'
  }
});