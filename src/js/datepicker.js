(() => {
    const elements = document.querySelectorAll('.js-datepicker');

    elements?.forEach((element) => {
        if (Datepicker) {
            const datepicker = new Datepicker(element, {
                language: 'ru',
                autohide: true,
                maxView: 2,
                todayHighlight: true,
                prevArrow: getChevronIcon(),
                nextArrow: getChevronIcon(),
            });
        }
    });

    function getChevronIcon() {
        return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.96967C15.8232 4.26256 15.8232 4.73744 15.5303 5.03033L8.56066 12L15.5303 18.9697C15.8232 19.2626 15.8232 19.7374 15.5303 20.0303C15.2374 20.3232 14.7626 20.3232 14.4697 20.0303L6.96967 12.5303C6.67678 12.2374 6.67678 11.7626 6.96967 11.4697L14.4697 3.96967C14.7626 3.67678 15.2374 3.67678 15.5303 3.96967Z" fill="#5C5C5C"/>
            </svg>`;
    }
})();
