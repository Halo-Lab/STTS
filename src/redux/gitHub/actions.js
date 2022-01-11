import { createAction } from '@reduxjs/toolkit';

const getPackagesRequest = createAction('getPackagesRequest');
const getPackagesSuccess = createAction('getPackagesSuccess');
const getUserSuccess = createAction('getUserSuccess');
const getPackagesError = createAction('getPackagesError');

const getItemPackageRequest = createAction('getItemPackageRequest');
const getItemPackageSuccess = createAction('getItemPackageSuccess');
const getItemPackageError = createAction('getItemPackageError');

const getWeeklyDownloadRequest = createAction('getWeeklyDownloadRequest');
const getWeeklyDownloadSuccess = createAction('getWeeklyDownloadSuccess');
const getWeeklyDownloadError = createAction('getWeeklyDownloadError');

const deletePackage = createAction('deletePackage');

const addItemPackage = createAction('addItemPackage');

const exportedObject = {
  getWeeklyDownloadRequest,
  getWeeklyDownloadSuccess,
  getWeeklyDownloadError,
  deletePackage,
  getPackagesRequest,
  getPackagesSuccess,
  getUserSuccess,
  getPackagesError,
  addItemPackage,
  getItemPackageRequest,
  getItemPackageSuccess,
  getItemPackageError,
};

export default exportedObject;
