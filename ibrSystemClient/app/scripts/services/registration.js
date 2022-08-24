'use strict';

app.service('RegistrationService', function ($http, $q, RESOURCES) {


  this.create = function (user) {
    var deferred = $q.defer();

    $http(
      {
        method: 'POST',
        url: RESOURCES().CREATE,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Accept": "application/json",
        },
        data: user
      }
    ).success(function (data) {
        deferred.resolve(data);

      }).error(function (error) {
        deferred.reject("אירעה תקלה,אנא נסה שנית");
      });

    return deferred.promise;

  }


});
