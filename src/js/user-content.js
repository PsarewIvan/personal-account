(() => {
    const BUTTON_WIDTH = 40;
    const USER_MARGIN = 16;
    let hasMobileInit = false;

    const userContent = document.querySelector('.js-user-content');

    window.addEventListener('resize', initMobile);
    initMobile();

    function initMobile() {
        if (window.innerWidth < 768) {
            const currentWidth =
                window.innerWidth - BUTTON_WIDTH - USER_MARGIN * 2;

            if (userContent) {
                userContent.style.width = `${currentWidth}px`;
            }

            hasMobileInit = true;
        } else if (hasMobileInit) {
            userContent.style.width = '';
            hasMobileInit = false;
        }
    }
})();
