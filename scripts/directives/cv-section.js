app.directive('cvSection', function() {

  return {
    restriction:'E',
    transclude: {
      'title': 'cvSectionTitle',
      'description': '?cvSectionDescription',
      'body': 'cvSectionBody'
    },
    template:
      '<div>'
      +
      '  <div class="cv-section-title mono">' +
      '    <span class="cv-section-title-text cv-section-title-text-main" ng-transclude="title"></span>' +
      '    <span class="cv-section-title-text cv-section-title-text-decoration">()</span>' +
      '    <span class="cv-section-brace">{</span>' +
      '  </div>'
      +
      '  <div class="cv-section-description mono">' +
      '    <span class=cv-section-text-decoration">/*</span>' +
      '    <span class=cv-section-text-main" ng-transclude="description"></span>' +
      '    <span class=cv-section-text-decoration">*/</span>' +
      '  </div>'
      +
      '  <div ng-transclude="body"></div>'
      +
      '  <div class="cv-section-footer mono">' +
      '    <span class="cv-section-brace">}</span>' +
      '  </div>'
      +
      '</div>'
  }
});