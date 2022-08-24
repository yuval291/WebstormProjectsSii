'use strict';


app.controller('RegistrationController', ['$scope', 'RegistrationService', 'SavedDataFactory', '$routeParams', '$location',


  function ($scope, RegistrationService, SavedDataFactory, $routeParams, $location) {

    SavedDataFactory.setPdfName($routeParams.param);


    $scope.registration = function (userDetails) {

      SavedDataFactory.setUserName(userDetails.userName);
      userDetails.pdfName = SavedDataFactory.getPdfName();

      RegistrationService.create(userDetails)
        .then(function () {
          $location.path('/endLicenceAgreement');

        }, function (error) {
          $scope.errorData = error;
        })
    };


    $scope.checkIdNumber = function (idNumber) {
      var incNum;
      var counter = 0;

      for (var i = 0; i < 9; ++i) {
        incNum = (idNumber[i]) * ((i % 2) + 1);//multiply digit by 1 or 2
        counter += (incNum > 9) ? incNum - 9 : incNum;//sum the digits up and add to counter
      }
      if ((counter % 10) !== 0) {
        $scope.isDisabled = true;
        $scope.errorData = 'ת.ז שהוזנה אינה תקינה';
      } else {
        $scope.isDisabled = false;
        $scope.errorData = '';
      }

    };
  }]);
