import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

import actions from './actions';


const getpackages = (_, {payload}) => payload;

const addItemPackage = (state, {payload}) =>{

  const temp=state.find(el=>el===payload);
  if(temp) return state;else return [payload,...state];
}


const addSelectedPackages=(state,{payload})=>[payload,...state];
const deletePackages=(state,{payload})=>state.filter(el=>el!==payload);
const updateList=(state,{payload})=>state.filter(el=>el.full_name!==payload);

const user=createReducer({},{
  [actions.getUserSuccess]:(_,{payload})=>payload
})

const packages = createReducer([], {
  [actions.getPackagesSuccess]: getpackages,
});

const weeklyDownload=createReducer([],{
  [actions.getWeeklyDownloadSuccess]:(state, {payload}) => [payload,...state],
})


const selectedPackagesList=createReducer([],{
  [actions.addItemPackage]:addItemPackage,
  [actions.deletePackage]:deletePackages,
})
const selectedPackages=createReducer([],{
  [actions.getItemPackageSuccess]:addSelectedPackages,
  [actions.deletePackage]:updateList,
})

const loading = createReducer(false, {
  [actions.getPackagesRequest]:()=>true,
  [actions.getPackagesSuccess]:()=>false,
  [actions.getPackagesError]:()=>false,

  [actions.getItemPackageRequest]:()=>true,
  [actions.getItemPackageSuccess]:()=>false,
  [actions.getItemPackageError]:()=>false,


});


const error=createReducer(false,{
  [actions.getPackagesError]:(_,{payload})=>payload,
  [actions.getItemPackageError]:(_,{payload})=>{
    return payload},

})

export default combineReducers({packages,selectedPackagesList,selectedPackages,user,weeklyDownload,loading,error});
