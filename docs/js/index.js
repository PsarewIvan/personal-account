(() => {
    const authAlerts = document.querySelectorAll('.js-index-auth-alert');

    const popup = document.querySelector('.js-popup-auth');
    const closePopupButton = popup?.querySelector('.js-close-popup-auth');

    authAlerts.forEach((alert) => {
        const authButtonOpen = alert.querySelector('.js-alert-button');

        authButtonOpen?.addEventListener('click', openPopup);
        closePopupButton?.addEventListener('click', closePopup);
    });

    function openPopup() {
        popup?.classList.remove('hidden');
        popup?.focus();
        trapFocus(popup);
    }

    function closePopup() {
        popup?.classList.add('hidden');
    }

    function trapFocus(element) {
        const focusableElements = element?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (element && focusableElements) {
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

(() => {
    const elementsWrapper = document.querySelectorAll('.js-datepicker-wrapper');

    elementsWrapper?.forEach((elementWrapper) => {
        const input = elementWrapper.querySelector('.js-datepicker');

        if (Datepicker) {
            const datepicker = new Datepicker(input, {
                language: 'ru',
                autohide: true,
                maxView: 2,
                todayHighlight: true,
                prevArrow: getChevronIcon(),
                nextArrow: getChevronIcon(),
            });

            const calendar = elementWrapper.querySelector(
                '.js-datepicker-calendar-icon'
            );
            const reset = elementWrapper.querySelector('.js-datepicker-reset');

            input?.addEventListener('changeDate', (event) => {
                console.log(event.target.value);
                if (!event.target.value || event.target.value === '') {
                    calendar.classList.remove('hidden');
                    reset.classList.add('hidden');
                    elementWrapper.classList.remove(
                        'datepicker-component_selected'
                    );
                } else {
                    calendar.classList.add('hidden');
                    reset.classList.remove('hidden');
                    elementWrapper.classList.add(
                        'datepicker-component_selected'
                    );
                }
            });

            reset?.addEventListener('click', () => {
                datepicker?.setDate({ clear: true });
                calendar.classList.remove('hidden');
                reset.classList.add('hidden');
                elementWrapper.classList.remove(
                    'datepicker-component_selected'
                );
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

(() => {
    let hasTableInit = false;
    let hasMobileInit = false;
    let hasMenuOpen = false;

    const burger = document.querySelector('.js-header-burger');
    const nav = document.querySelector('.js-nav');
    const user = document.querySelector('.js-nav-user');
    const mobileActions = document.querySelector('.js-header-actions-mobile');

    const header = document.querySelector('.js-header');
    const content = document.getElementById('js-main-content');

    burger?.addEventListener('click', onBurgerClick);

    window.addEventListener('resize', initMobileTable);
    initMobileTable();

    function initMobileTable() {
        if (window.innerWidth < 1056) {
            const headerRect = header?.getBoundingClientRect();

            if (!hasTableInit) {
                nav?.classList.add('hidden');
            }

            if (content?.stye && headerRect) {
                content.stye.marginTop = `${headerRect.height}px`;
            }

            hasTableInit = true;
        } else if (hasTableInit) {
            nav?.classList.remove('hidden');
            hasTableInit = false;
        }

        if (window.innerWidth < 768) {
            if (!hasMobileInit) {
                user?.classList.add('hidden');
                mobileActions?.classList.remove('hidden');
            }

            hasMobileInit = true;
        } else if (hasMobileInit) {
            user?.classList.remove('hidden');
            mobileActions?.classList.add('hidden');
            hasMobileInit = false;
        }
    }

    function onBurgerClick() {
        if (hasMenuOpen) {
            hasMenuOpen = false;
            nav?.classList.add('hidden');
            user?.classList.add('hidden');
            burger?.classList.remove('open');
            document.body.classList.remove('body-lock');
        } else {
            hasMenuOpen = true;
            nav?.classList.remove('hidden');
            user?.classList.remove('hidden');
            burger?.classList.add('open');
            document.body.classList.add('body-lock');
        }
    }
})();

(() => {
    const nodes = document.querySelectorAll('.js-pass-input-node');

    nodes.forEach((node) => {
        const input = node.querySelector('.js-pass-input');
        const show = node.querySelector('.js-pass-input-show');
        const openIcon = node.querySelector('.js-pass-input-icon-open');
        const closedIcon = node.querySelector('.js-pass-input-icon-closed');

        show?.addEventListener('click', () => {
            const type = input?.getAttribute('type');

            if (type === 'password') {
                input.setAttribute('type', 'text');
                openIcon?.classList.remove('hidden');
                closedIcon?.classList.add('hidden');
            } else {
                input.setAttribute('type', 'password');
                openIcon?.classList.add('hidden');
                closedIcon?.classList.remove('hidden');
            }
        });
    });
})();

(() => {
    const openPopupButtons = document.querySelectorAll('.js-qr-button-open');
    const popup = document.querySelector('.js-qr-popup');
    const closePopupButton = popup?.querySelector('.js-close-qr-popup');

    openPopupButtons.forEach((openPopupButton) => {
        if (closePopupButton && popup) {
            openPopupButton.addEventListener('click', openPopup);
            closePopupButton.addEventListener('click', closePopup);
        }
    });

    function openPopup() {
        popup?.classList.remove('hidden');
        popup?.focus();
        trapFocus(popup);
    }

    function closePopup() {
        popup?.classList.add('hidden');
    }

    function trapFocus(element) {
        const focusableElements = element?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (element && focusableElements) {
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
        const label = content.querySelector('.js-settings-content-label');
        const inputs = content.querySelectorAll('.js-text-input-node');
        const textAreas = content.querySelectorAll('.js-text-area-node');

        editButton?.addEventListener('click', showEditMode);
        resetButton?.addEventListener('click', resetEditMode);

        function showEditMode() {
            label?.classList.add('hidden');

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
            label?.classList.remove('hidden');

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

(() => {
    const ACTIVE_CLASS = 'active';

    const nodes = document.querySelectorAll('.js-text-input-node');

    nodes.forEach((node) => {
        const input = node.querySelector('.js-text-input');
        const reset = node.querySelector('.js-text-input-reset');
        const alert = node.querySelector('.js-text-input-alert');

        if (input.value !== '') {
            reset?.classList.add(ACTIVE_CLASS);
        }

        input?.addEventListener('blur', (event) => {
            if (event.target.value === '') {
                alert?.classList.add(ACTIVE_CLASS);
            } else {
                alert?.classList.remove(ACTIVE_CLASS);
            }
        });

        input?.addEventListener('input', (event) => {
            if (event.target.value === '') {
                reset?.classList.remove(ACTIVE_CLASS);
            } else {
                reset?.classList.add(ACTIVE_CLASS);
                alert?.classList.remove(ACTIVE_CLASS);
            }
        });

        reset?.addEventListener('click', () => {
            if (input) {
                input.value = '';
                reset?.classList.remove(ACTIVE_CLASS);
            }
        });
    });
})();

(() => {
    const TOOLTIP_LEFT_CLASS = 'tooltip_left';
    const TOOLTIP_BOTTOM_CLASS = 'tooltip_bottom';

    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('resize', initTooltip);
        initTooltip();
    });

    function initTooltip() {
        const triggers = document.querySelectorAll('.js-tooltip-trigger');

        triggers?.forEach((trigger) => {
            const tooltip = trigger.querySelector('.js-tooltip');

            if (tooltip) {
                adjustTooltipPosition(trigger, tooltip);
            }
        });
    }

    function adjustTooltipPosition(trigger, tooltip) {
        tooltip.classList.remove(TOOLTIP_LEFT_CLASS);
        tooltip.classList.remove(TOOLTIP_BOTTOM_CLASS);

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const tooltipRect = tooltip.getBoundingClientRect();

        const tooltipRightPointX = tooltipRect.left + tooltipRect.width;
        const tooltipTopPointY = tooltipRect.top;

        if (tooltipRightPointX > viewportWidth) {
            tooltip.classList.add(TOOLTIP_LEFT_CLASS);
        }

        if (tooltipTopPointY < 0) {
            tooltip.classList.add(TOOLTIP_BOTTOM_CLASS);
        }
    }
})();

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

//# sourceMappingURL=index.js.map
