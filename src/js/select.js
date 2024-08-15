(() => {
    const selects = document.querySelectorAll('.js-select-component');

    selects.forEach((select) => {
        const placeholder = select.dataset.placeholder;
        const options = select.querySelectorAll('option');

        const dataOptions = Array.from(options).map((option) => ({
            text: option.innerHTML,
            value: option.value,
        }));

        new SlimSelect({
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
        });
    });
})();
