(() => {
    const contents = document.querySelectorAll('.js-settings-content');

    contents?.forEach((content) => {
        const editButton = content.querySelector('.js-edit-button');
        const editButtonWrapper = content.querySelector(
            '.js-settings-field-edit'
        );
        const controls = content.querySelector('.js-settings-controls');
        const resetButton = controls?.querySelector('.js-settings-edit-reset');

        const texts = content.querySelectorAll('.js-settings-content-text');
        const inputs = content.querySelectorAll('.js-text-input-node');
        const textAreas = content.querySelectorAll('.js-text-area-node');

        editButton?.addEventListener('click', showEditMode);
        resetButton?.addEventListener('click', resetEditMode);

        function showEditMode() {
            texts?.forEach((textNode) => {
                textNode.classList.add('hidden');
            });
            inputs?.forEach((input) => {
                input.classList.remove('hidden');
            });
            textAreas?.forEach((input) => {
                input.classList.remove('hidden');
            });

            controls?.classList.add('active');
            editButtonWrapper?.classList.add('hidden');
        }

        function resetEditMode() {
            texts?.forEach((text) => {
                text.classList.remove('hidden');
            });
            inputs?.forEach((input) => {
                input.classList.add('hidden');
            });
            textAreas?.forEach((input) => {
                input.classList.add('hidden');
            });

            controls?.classList.remove('active');
            editButtonWrapper?.classList.remove('hidden');
        }
    });
})();
