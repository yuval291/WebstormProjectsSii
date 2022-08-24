"use strict";

app.constant('RESOURCES', function() {

  // Define your variable // ibr.sii.org.il // 172.16.1.203:9124 // 172.16.1.36:9095 // 172.16.18.222:9091 // http://localhost:8081/IBRSystemWEB/rest http://172.16.101.188:8090/IBRSystemWEB/rest
  // storage - 172.16.1.203:80 // ibr.sii.org.il
  //var resource = 'https://ibr.sii.org.il:443/IBRSystemWEB/rest';
  //var storage = 'https://ibr.sii.org.il:443';

  //var resource = 'https://172.16.101.188:443/IBRSystemWEB/rest';
  //var storage = 'https://172.16.101.188:443';

  //var resource = 'https://localhost:443/IBRSystemWEB/rest';
  //var storage = 'https://localhost:443/';

  var resource = 'http://localhost:9084/IBRSystemWEB/rest';
  var storage = 'http://localhost:9084/';

  // Use the variable in your constants
  return {
    DOMAIN: resource,
    DOWNLOAD_FILE : resource + '/create/file/',
    CREATE : resource  + '/post/user/',
    GET_DATA : resource + '/get/standards/',
    GET_BY_SEARCH_STANDARDS : resource + '/get/searchStandard/',
    GET_FILE : storage + '/ibrfile/',
    LOCAL_ADDRESS : storage
  };
});

