export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_FONT_SIZE_PREFERENCE = 'UPDATE_FONT_SIZE_PREFERENCE';

export const userNameUpdateAction = (name) => {
    return ({
        type: UPDATE_USERNAME,
        value: name
    });
};

export const fontSizePreferenceUpdateAction = (name) => {
    return ({
        type: UPDATE_FONT_SIZE_PREFERENCE,
        value: name
    });
};
