document.getElementById('language-toggle').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'zh-CN') {
        window.location.href = 'en/' + window.location.pathname.split('/').pop();
    } else {
        window.location.href = '../' + window.location.pathname.split('/').pop();
    }
});
