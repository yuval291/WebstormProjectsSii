'use strict';

app.factory('SavedDataFactory', function () {

  var savedData = {
    pdfName: '',
    userName: '',
    standardsType: '',
    standards: ''
  };

  function setPdfName(pdfName) {
    savedData.pdfName = pdfName;
  }

  function getPdfName() {
    return savedData.pdfName;
  }

  function setUserName(userName) {
    savedData.userName = userName;
  }

  function setStandards(data) {
    savedData.standards = data;
  }

  function getUserName() {
    return savedData.userName;
  }

  function setStandardsType(standardsType) {

    savedData.standardsType = standardsType;
  }

  function getStandardsType() {
    return savedData.standardsType;
  }

  function getSavedData() {
    return savedData;
  }

  function getStandards() {
    return savedData.standards;
  }

  return {
    getUserName: getUserName,
    setUserName: setUserName,
    getPdfName: getPdfName,
    setPdfName: setPdfName,
    getStandardsType: getStandardsType,
    setStandardsType: setStandardsType,
    getSavedData: getSavedData,
    setStandards: setStandards,
    getStandards: getStandards

  };
});
