function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

function onThemeTogglerChange(checkbox) {
    setDarkMode(checkbox.checked, true);
}

function setDarkMode(enabled, setCookie) {
    const className = 'theme--dark';
    let body = document.querySelector('body');

    if (enabled) {
        if (setCookie) setDarkModeCookie(1);
        body.classList.add(className);
    } else {
        if (setCookie) setDarkModeCookie(0);
        body.classList.remove(className);
    }
}

function setDarkModeCookie(value) {
    document.cookie = `dark=${value}; path=/; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

window.addEventListener('DOMContentLoaded', (event) => {
    let checkbox = document.querySelector('.theme-toggler input');
    let label = document.querySelector('.theme-toggler-label');

    if (getCookie('dark') == '1') {
        setDarkMode(true, false);
        checkbox.checked = true;
    }

    label.addEventListener('click', function (event) {
        checkbox.checked = ! checkbox.checked;
        setDarkMode(checkbox.checked, true);
    });
});
