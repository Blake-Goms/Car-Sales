export const ADD_ITEM = 'ADD_ITEM';
export const DEL_ITEM = 'DEL_ITEM';


export const addItem = newFeat => {
    return { type: ADD_ITEM, payload: newFeat };
};

export const deleteItem = delFeat => {
    return { type: DEL_ITEM, payload: delFeat };
};
