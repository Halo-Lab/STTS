import {createReducer} from "@reduxjs/toolkit";
import actions from "./actions";
import {combineReducers} from "redux";

const dnd=(state,{payload})=>payload;

const dndList=createReducer([],{
    [actions.changePosition]:dnd,
})

export default combineReducers({dndList});
