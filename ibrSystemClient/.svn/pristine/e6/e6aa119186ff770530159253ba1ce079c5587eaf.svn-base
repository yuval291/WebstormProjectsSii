'use strict';


app.controller('StandardsController', ['$scope', 'StandardsService', 'SavedDataFactory', '$routeParams',

  function ($scope, StandardsService, SavedDataFactory, $routeParams) {


    $scope.standardsType = $routeParams.param;
    $scope.waitIndicate = 'אנא המתן ...';
    SavedDataFactory.setStandardsType($routeParams.param);


    StandardsService.getData($routeParams.param)
      .then(function (data) {
        SavedDataFactory.setStandards(data);
        if (data.length === 0) {
          $scope.errorData = 'לא נמצאו תוצאות';
        } else {
          $scope.errorData = '';
          if($routeParams.param == 1 || $routeParams.param == 2) {
            $scope.fromYears = 'משנת ';
            $scope.standardType = 1;
          }else if($routeParams.param == 3){
            $scope.standardType = 3;
          }else if($routeParams.param == 4){
            $scope.standardType = 4;
          }

        }
        $scope.waitIndicate = '';
        $scope.$emit('LoadPaginationEvent');

      }, function (error) {
        $scope.waitIndicate = '';
        $scope.errorData = error;
      });


    // search
    $scope.getBySearchStandard = function (standardNumber, standardFullName) {

      $scope.errorData = '';
      if (standardNumber == null || standardNumber == '') {
        standardNumber = -1;
      }
      if (standardFullName == null || standardFullName == '') {
        standardFullName = 'null';
      }
      $scope.waitIndicate = 'אנא המתן ...';


      StandardsService.getBySearchStandard(standardNumber, standardFullName, SavedDataFactory.getStandardsType())
        .then(function (data) {

          SavedDataFactory.setStandards(data);
          $scope.$emit('LoadPaginationEvent');
          $scope.waitIndicate = '';

          if (data.length === 0) {
            $scope.errorData = 'לא נמצאו תוצאות';
          } else {
            $scope.errorData = '';
          }
        }, function (error) {
          $scope.waitIndicate = '';
          $scope.errorData = error;
        })

    };

    // Listener
    $scope.$on('LoadPaginationEvent', function () {
      $scope.onLoad();
    });


    $scope.onLoad = function () {
      $scope.maxSize = 5;
      $scope.currentPage = 1;
      $scope.totalItems = SavedDataFactory.getStandards().length;
      $scope.standards = SavedDataFactory.getStandards();
      var begin = (($scope.currentPage - 1) * $scope.maxSize),
        end = begin + $scope.maxSize;
      $scope.standardsForPage = $scope.standards.slice(begin, end);

    };

    // page changed
    $scope.pageChanged = function (currentPage) {
      $scope.totalItems = $scope.standards.length;
      var begin = ((currentPage - 1) * $scope.maxSize),
        end = begin + $scope.maxSize;
      $scope.standardsForPage = $scope.standards.slice(begin, end);

    };

  }]);
