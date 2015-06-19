app.filter('dependency', function() {
  return function(project, type) {
    switch(type) {
      case 'maven':
        return '' +
          '<dependency>\n' +
          '  <groupId>' + project.groupId + '</groupId>\n' +
          '  <artifactId>' + project.artifactId + '</artifactId>\n' +
          '  <version>' + project.version + '</version>\n' +
          '</dependency>';
      case 'ivy':
        return '' +
          '<dependency org="' + project.groupId + '" name="' + project.artifactId + '" rev="' + project.version + '"/>';
      case 'gradle':
        return '' +
          '\'' + project.groupId + ':' + project.artifactId + ':' + project.version +  '\'';
    }
  }
});