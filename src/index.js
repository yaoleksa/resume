const val = document.getElementsByClassName('value');
const birthday = new Date(1996, 11, 18);

val[2].innerHTML = parseInt((Date.now() - birthday)/(31536000000));