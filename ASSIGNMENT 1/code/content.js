document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    trail.style.backgroundColor = ['#2F72ED', '#672FED', '#2F36ED', '#2FAEED'][Math.floor(Math.random() * 4)];
    document.body.appendChild(trail);
    setTimeout(() => {
        trail.remove();
    }, 1000);
});
