// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 表单验证
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('请填写所有字段！');
                event.preventDefault(); // 阻止表单提交
            }
        });
    }

    // 导航栏高亮当前页面
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = '#666';
            link.style.borderRadius = '5px';
        }
    });
});