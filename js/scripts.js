// 获取当前语言
function getCurrentLanguage() {
    return document.documentElement.lang;
}

// 切换语言
function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const targetLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    const currentPage = window.location.pathname.split('/').pop(); // 获取当前文件名

    // 根据目标语言生成目标路径
    let targetPath;
    if (targetLang === 'en') {
        targetPath = `/en/${currentPage}`; // 跳转到英文版
    } else {
        targetPath = `/${currentPage}`; // 跳转到中文版（根目录）
    }

    // 调试信息：打印路径信息
    console.log('Current Language:', currentLang);
    console.log('Target Language:', targetLang);
    console.log('Current Page:', currentPage);
    console.log('Target Path:', targetPath);

    // 检查目标文件是否存在
    fetch(targetPath)
        .then(response => {
            if (response.ok) {
                window.location.href = targetPath; // 文件存在，跳转
            } else {
                alert('Page not found in the selected language.'); // 文件不存在，提示用户
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// 绑定语言切换按钮
document.getElementById('language-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认跳转
    toggleLanguage();
});
