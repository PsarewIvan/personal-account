(() => {
    const openPopupButton = document.querySelector('.js-qr-button');
    const closePopupButton = document.querySelector('.js-close-qr-popup');
    const popup = document.querySelector('.js-qr-popup');

    if (openPopupButton && closePopupButton && popup) {
        openPopupButton.addEventListener('click', openPopup);
        closePopupButton.addEventListener('click', closePopup);

        function openPopup() {
            popup.classList.remove('hidden');
            popup.focus();
            trapFocus(popup);
        }

        function closePopup() {
            popup.classList.add('hidden');
        }

        function trapFocus(element) {
            const focusableElements = element.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement =
                focusableElements[focusableElements.length - 1];

            element.addEventListener('keydown', function (e) {
                const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

                if (!isTabPressed) {
                    return;
                }

                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            });
        }
    }
})();
