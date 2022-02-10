import { createAction } from '@reduxjs/toolkit';

const setShownHints = createAction('setShownHints');
const setHiddenHints = createAction('setHiddenHints');
const setNextStepHints = createAction('setNextStepHints');
const setPrevStepHints = createAction('setPrevStepHints');

const exportedObject = {
    setShownHints,
    setHiddenHints,
    setNextStepHints,
    setPrevStepHints
};

export default exportedObject;