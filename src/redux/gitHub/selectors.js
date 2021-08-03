import {createSelector} from '@reduxjs/toolkit';

export const listPackages = (state) => state.packages.selectedPackagesList;

export const fulllistPackages = (state) => state.packages.selectedPackages;

export const getUser = (state) => state.packages.user;

export const getWeeklyDownLoad = (state) => state.packages.weeklyDownload;

export const loading=(state)=>state.packages.loading;

export const getList = createSelector(
  [listPackages, fulllistPackages],
  (selectedPackagesList, selectedPackages) => {
    const newList = selectedPackages.map(el => el.full_name);
    const res = selectedPackagesList.filter((el => !newList.includes(el)));
    return res;
  }
)

export const listpackagesWithDownloadStats = createSelector(
  [fulllistPackages, getWeeklyDownLoad,listPackages],
  (selectedPackages, weeklyDownload,selectedPackagesList) => {

     const foo = selectedPackages.map(el => {
      const dataWeekly = weeklyDownload.find(item => item.package === el.name);
      return {...el, dataWeekly};
    })
      const mapped=selectedPackagesList.map(el=>{
          const element=foo.find(item=>el===item.full_name);
          return element;
      })

        const filtered=mapped.filter(el=>el);

return filtered;
  }
)
