Package.describe({
  summary: "Typeahead.js packaged for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/dist/typeahead.js', 'client');
});
