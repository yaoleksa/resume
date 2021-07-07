const val = document.getElementsByClassName('value');
const avatar = document.getElementById('avatar');
const birthday = new Date(1996, 11, 18);

val[2].innerHTML = parseInt((Date.now() - birthday)/(31536000000));

const changeAva = () => {
    avatar.setAttribute('src', 'images/alter_avatar.png');
}

const resetChange = () => {
    avatar.setAttribute('src', 'images/avatar.png');
}

avatar.addEventListener('mouseover', changeAva);
avatar.addEventListener('mouseout', resetChange);