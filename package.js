Package.describe({
  name: 'djedi:jmpress',
  version: '0.4.5',
  // Brief, one-line summary of the package.
  summary: 'jmpress port to Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/djedi23/meteor-jmpress',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles(['client/lib/jmpress.js'],
      ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('djedi:jmpress');
  api.addFiles('jmpress-tests.js', 'client');
});
