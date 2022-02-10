import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { dataHints } from '../../constans/hints';

import actions from './actions';

const initialState = {
    active: true,
    step: 1,
    totalStep: dataHints.length,
    hint: dataHints[0]
};

const hints = createReducer(initialState, {
    [actions.setHiddenHints]: (state) => {
        if(state.step > 1) {
            state.active = false;
        }

        state.active = false
    },
    [actions.setShownHints]: (state) => {
        state.active = false;
        state.step = 1;
        state.hint = dataHints[state.step - 1]
    },
    [actions.setNextStepHints]: (state) => {
        if(state.step >= 1) {
            state.step = state.step + 1
            state.hint = dataHints[state.step - 1]
        }
    },
    [actions.setPrevStepHints]: (state) => {
        if(state.step >= 2) {
            state.step = state.step - 1
            state.hint = dataHints[state.step - 1]
        }
    },
});

export default combineReducers({
    hints
});