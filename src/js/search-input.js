(() => {
    const ACTIVE_CLASS = 'active';

    const nodes = document.querySelectorAll('.js-search-input-node');

    nodes.forEach((node) => {
        const input = node.querySelector('.js-search-input');
        const reset = node.querySelector('.js-search-input-reset');

        if (input.value !== '') {
            reset?.classList.add(ACTIVE_CLASS);
            input?.classList.add(ACTIVE_CLASS);
        }

        input?.addEventListener('input', (event) => {
            if (event.target.value === '') {
                reset?.classList.remove(ACTIVE_CLASS);
                input?.classList.remove(ACTIVE_CLASS);
            } else {
                reset?.classList.add(ACTIVE_CLASS);
                input?.classList.add(ACTIVE_CLASS);
            }
        });

        reset?.addEventListener('click', () => {
            if (input) {
                input.value = '';
                reset?.classList.remove(ACTIVE_CLASS);
                input?.classList.remove(ACTIVE_CLASS);
            }
        });
    });
})();
