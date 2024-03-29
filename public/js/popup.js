$(document).ready(function () {
    let $activePopup = null;

    $(document).on('click', '[data-popup-for]', function (event) {
        const popupFor = $(this).data('popup-for');
        const $popup = $('[data-popup="' + popupFor + '"]');

        if ($activePopup && $activePopup[0] !== $popup[0]) {
            $activePopup.hide();
        }

        $popup.toggle();
        $activePopup = $popup;
        event.stopPropagation();
    });

    $(document).on('click', function () {
        if ($activePopup) {
            $activePopup.hide();
            $activePopup = null;
        }
    });
});
