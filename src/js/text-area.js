(() => {
    const maxLength = 1500;
    const nodes = document.querySelectorAll('.js-text-area-node');

    nodes.forEach((node) => {
        const textarea = node.querySelector('.js-text-area');
        const counter = node.querySelector('.js-text-area-counter');

        textarea?.addEventListener('input', updateCharacterCount);

        updateCharacterCount();

        function updateCharacterCount() {
            if (textarea && counter) {
                const currentLength = textarea.value.length;
                const displayedLength = Math.min(currentLength, maxLength);
                counter.textContent = currentLength.toString().padStart(2, '0');
            }
        }
    });
})();
