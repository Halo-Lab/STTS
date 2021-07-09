import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

import actions from './actions';


const getpackages = (_, {payload}) => payload;
const addItemPackage = (state, {payload}) => [payload,...state];
const addSelectedPackages=(state,{payload})=>[payload,...state];
const deletePackages=(state,{payload})=>state.filter(el=>el!==payload);
const updateList=(state,{payload})=>state.filter(el=>el.full_name!==payload);

const user=createReducer({},{
  [actions.getUserSuccess]:(_,{payload})=>payload
})

const packages = createReducer([], {
  [actions.getPackagesSuccess]: getpackages,
});

const selectedPackagesList=createReducer([],{
  [actions.addItemPackage]:addItemPackage,
  [actions.deletePackage]:deletePackages,
})
const selectedPackages=createReducer([],{
  [actions.getItemPackageSuccess]:addSelectedPackages,
  [actions.deletePackage]:updateList,
})

export default combineReducers({packages,selectedPackagesList,selectedPackages,user});
