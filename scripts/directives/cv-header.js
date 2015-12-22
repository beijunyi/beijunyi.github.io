/**
 *
 */

app.directive('cvHeader', function() {
  return {
    restriction:'E',
    transclude: {
      'name': 'cvHeaderName',
      'email': 'cvHeaderEmail'
    },
    template:
      '<div class="cv-header">' +
      '  <pre>' +
      '  /**\n' +
      '   * Author: <span ng-transclude="name"></span ng-transclude>\n' +
      '   * E-Mail: <span ng-transclude="email"></span ng-transclude>\n' +
      '   */' +
      '  </pre>' +
      '</div>'
  }
});