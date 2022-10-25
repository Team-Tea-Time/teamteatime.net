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
    document.cookie = `dark=${value}; path=/; SameSite=None; Secure`;
}

window.addEventListener('DOMContentLoaded', (event) => {
    let checkbox = document.querySelector('.after-content .theme-toggler input');
    let label = document.querySelector('.after-content .theme-toggler-label');

    if (getCookie('dark') == '1') {
        setDarkMode(true, false);
        checkbox.checked = true;
    }

    label.addEventListener('click', function (event) {
        checkbox.checked = ! checkbox.checked;
        setDarkMode(checkbox.checked, true);
    });
});