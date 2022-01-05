import axios from 'axios';
import actions from './actions';

const fetchPackages =
  (repo, page = 1) =>
  async (dispatch) => {
    dispatch(actions.getPackagesRequest());
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${repo}/repos?page=${page}`,
      );
      const { data: fullData } = await axios.get(
        `https://api.github.com/users/${repo}`,
      );
      dispatch(actions.getUserSuccess(fullData));
      dispatch(actions.getPackagesSuccess(data));
    } catch (error) {
      dispatch(actions.getPackagesError(error));
    }
  };

const fetchSinglePackage = (name) => async (dispatch) => {
  dispatch(actions.getItemPackageRequest());
  try {
    const { data } = await axios.get(`https://api.github.com/repos/${name}`);
    dispatch(actions.getItemPackageSuccess(data));
    dispatch(actions.addItemPackage(name));
  } catch (error) {
    dispatch(actions.getItemPackageError(error));
  }
};

const getWeeklyDownload = (name) => async (dispatch) => {
  dispatch(actions.getWeeklyDownloadRequest());
  try {
    const { data } = await axios.get(
      `https://api.npmjs.org/downloads/range/last-week/${name}`,
    );
    dispatch(actions.getWeeklyDownloadSuccess(data));
  } catch (error) {
    dispatch(actions.getWeeklyDownloadError(error));
  }
};

const exportedObj = {
  fetchPackages,
  fetchSinglePackage,
  getWeeklyDownload,
};

export default exportedObj;
