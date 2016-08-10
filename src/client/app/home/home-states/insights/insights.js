(function() {
  'use strict';
  angular.module('app.home.insights', []).controller('InsightsController',
    InsightsController);

  function InsightsController($scope, homeFactory, $http, store) {
    /*jshint validthis: true */
    var insights = this;

    insights.userMetrics = store.get('userData').userMetrics;

    insights.currentCorrelationData = [{'Null': 'null'}];

    insights.getCorrelations = function(selection) {
      var profile = store.get('userData');
      return $http({
          method: "POST",
          url: '/user/correlation',
          data: {
            email: profile.email,
            datums: selection
          }
        })
      .then(function(response){
          return response.data
        })
    }

    insights.submitSelection = function(selection) {
      insights.getCorrelations(selection)
      .then(function(returnedData){
        console.log('This is the correl data', returnedData)
          store.set('currentCorrelationData', returnedData);
          insights.currentCorrelationData = returnedData;
      })
      .catch(function(err){
        console.log("There was an error getting your correlations friendo!", err);
      })
    }

  }
})();
