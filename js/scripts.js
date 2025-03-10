// 获取当前语言
function getCurrentLanguage() {
    return document.documentElement.lang;
}

// 切换语言
function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const targetLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    const currentPage = window.location.pathname.split('/').pop(); // 获取当前文件名
    window.location.href = `/${targetLang}/${currentPage}`; // 跳转到对应语言版本
}

// 绑定语言切换按钮
document.getElementById('language-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认跳转
    toggleLanguage();
});
