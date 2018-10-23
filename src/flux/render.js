export const render = ({userName, fontSize}) => {
    document.getElementById('userNameInput').innerText = userName;
    document.getElementsByClassName('container')[0].style.fontSize = fontSize === 'small' ? '16px' : '24px';
    document.forms.fontSizeForm.fontSize.value = fontSize;
};
