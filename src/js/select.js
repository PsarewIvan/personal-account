(() => {
    const selectsWrapper = document.querySelectorAll(
        '.js-select-component-wrapper'
    );

    selectsWrapper.forEach((selectWrapper) => {
        const select = selectWrapper.querySelector('.js-select-component');
        const placeholder = select?.dataset.placeholder;
        const options = select?.querySelectorAll('option');
        const reset = selectWrapper?.querySelector('.js-select-reset');

        const dataOptions = Array.from(options).map((option) => ({
            text: option.innerHTML,
            value: option.value,
        }));

        const slimSelect = new SlimSelect({
            select,
            settings: {
                showSearch: false,
            },
            data: [
                ...(placeholder
                    ? [{ placeholder: true, text: placeholder }]
                    : []),
                ...dataOptions,
            ],
            events: {
                afterChange: (evt) => {
                    const value = evt?.[0]?.value;

                    if (value) {
                        reset.classList.remove('hidden');
                    }
                },
            },
        });

        reset?.addEventListener('click', () => {
            if (slimSelect) {
                slimSelect.setSelected('', false);
                reset.classList.add('hidden');
            }
        });

        const selectDiv = selectWrapper.querySelector(
            `div[data-id="${slimSelect?.settings?.id}"]`
        );
        const arrow = selectWrapper.querySelector('.ss-arrow');

        select?.addEventListener('change', (event) => {
            if (dataOptions.some(({ value }) => value === event.target.value)) {
                selectDiv.classList.add('select-component_selected');
                arrow?.classList.add('transparent');
            } else {
                selectDiv.classList.remove('select-component_selected');
                arrow?.classList.remove('transparent');
            }
        });
    });
})();
