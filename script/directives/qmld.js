angular.module("mainModule")
    .directive('ciQuestionMaker', ['$timeout', function ($timeout) {
        return {
            scope: {
                question: '='
            },
            link: function (scope, element, attrs) {
            },
            templateUrl: 'base.html',
            controller: 'questionMakingLibraryController',
        }
    }]);