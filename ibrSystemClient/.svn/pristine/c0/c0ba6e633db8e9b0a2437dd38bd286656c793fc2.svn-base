'use strict';


app.service('StandardsService', function ($http, $q, RESOURCES) {

  this.getData = function (standardsType) {

    var deferred = $q.defer();

    $http(
      {
        method: 'GET',
        url: RESOURCES().GET_DATA + standardsType,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Accept": "application/json"
        }

      }
    ).success(function (data) {
        deferred.resolve(data);

      }).error(function (error) {
        deferred.reject("אירעה תקלה,אנא נסה שנית");
      });

    return deferred.promise;

  },


    this.getBySearchStandard = function (standardNumber, standardFullName, standardsType) {

      var deferred = $q.defer();

      $http(
        {
          method: 'GET',
          url: RESOURCES().GET_BY_SEARCH_STANDARDS + standardNumber + '/standardFullName/' + standardFullName + '/standardsType/' + standardsType,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json",
          }
        }
      ).success(function (data) {
          deferred.resolve(data);

        }).error(function (error) {
          deferred.reject("אירעה תקלה,אנא נסה שנית");
        });

      return deferred.promise;
    };


});
