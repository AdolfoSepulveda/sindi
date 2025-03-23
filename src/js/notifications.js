function showNotification(title, message, type = 'success', duration = 5000) {
    const container = document.createElement('div');
    container.className = `notification-container notification-${type}`;

    const iconContainer = document.createElement('div');
    iconContainer.className = 'notification-icon';
    iconContainer.innerHTML = type === 'error' ? `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 3L3 9" />
            <path d="M3 3L9 9" />
        </svg>
    ` : `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 3L4.5 8.5L2 6" />
        </svg>
    `;

    const content = document.createElement('div');
    content.className = 'notification-content';
    content.innerHTML = `
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
    `;

    const closeButton = document.createElement('button');
    closeButton.className = 'notification-close';
    closeButton.textContent = 'cerrar';

    container.appendChild(iconContainer);
    container.appendChild(content);
    container.appendChild(closeButton);
    document.body.appendChild(container);

    const close = () => {
        container.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(container);
        }, 300);
    };

    closeButton.addEventListener('click', close);

    if (duration) {
        setTimeout(close, duration);
    }

    return container;
}