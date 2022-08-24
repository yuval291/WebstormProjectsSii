'use strict';


app.service('FileService', function ($http, $q, RESOURCES, $window) {

  this.downloadFile = function (pdfName, userName) {

    var deferred = $q.defer();

    $http(
      {
        method: 'GET',
        url: RESOURCES().DOWNLOAD_FILE + pdfName + '/userName/' + userName ,
        headers: {
          "Content-Type": "text/html;charset=utf-8",
          "Accept": "text/html",
        }
      }
    ).success(function (data) {
        deferred.resolve(data);

      }).error(function (error) {
        deferred.reject("אירעה תקלה,אנא נסה שנית");
      });

    return deferred.promise;

  },


    this.getFile = function (filePath, pdfName) {
      $window.open(RESOURCES().LOCAL_ADDRESS+"/ibr/fileopen/index.html?secureFileName="+filePath);
    }
});
