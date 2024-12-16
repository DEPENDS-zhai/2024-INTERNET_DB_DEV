document.addEventListener('DOMContentLoaded', () => {
    // 动态问候语
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        greetingElement.textContent = "早上好！欢迎来到我的主页！";
    } else if (hour >= 12 && hour < 18) {
        greetingElement.textContent = "下午好！很高兴你来访问！";
    } else {
        greetingElement.textContent = "晚上好！谢谢你光临我的主页！";
    }

    // 图片轮播功能
    const images = document.querySelectorAll('.carousel img');
    let index = 0;
    setInterval(() => {
        images[index].style.display = 'none';
        index = (index + 1) % images.length;
        images[index].style.display = 'block';
    }, 3000);

    // 留言板功能
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submitMessage');
    const messagesContainer = document.getElementById('messages');

    submitButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            const messageElement = document.createElement('p');
            messageElement.textContent = message;
            messagesContainer.appendChild(messageElement);
            messageInput.value = ''; // 清空输入框
        }
    });
});
