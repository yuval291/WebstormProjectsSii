'use strict';


app.controller('FileController', ['$scope', 'FileService', 'SavedDataFactory', '$window',


  function ($scope, FileService, SavedDataFactory, $window) {

    $scope.fileData = SavedDataFactory.getSavedData();

    $scope.downloadFile = function (pdfName, userName) {

      $scope.isDownloadStarted = true;
      $scope.waitIndicate = 'אנא המתן ...';

      FileService.downloadFile(addDigits(pdfName), userName)
        .then(function (data) {
          $scope.isDownloadFinish = true;
          $scope.waitIndicate = '';
          $scope.filePath = data;

        }, function (err) {
          $scope.isDownloadFinish = false;
          $scope.errorData = err;
          $scope.waitIndicate = '';
        })

    };


    $scope.getFile = function (filePath, pdfName) {
      FileService.getFile(filePath, pdfName);
    };

    $scope.disabledClick = function () {
      $scope.isDisabled = true;
    };

  }]);
