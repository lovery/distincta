(function () {
	'use strict';

	angular.module('distincta').service('MetaInformation', function() {
		var title = 'Distincta - IntelectualProperty Agency';
		var metaDescription = '';
		var metaKeywords = '';
		return {
			title: function() { return title; },
		metaDescription: function() { return metaDescription; },
		metaKeywords: function() { return metaKeywords; },
		reset: function() {
			title = '';
			metaDescription = '';
			metaKeywords = '';
		},
		setTitle: function(newTitle) { title = newTitle; },
		setMetaDescription: function(newMetaDescription) {
			metaDescription = newMetaDescription;
		},
		setMetaKeywords: function(newKeywords) {
			metaKeywords = newKeywords;
		}
		};
	});
}());
