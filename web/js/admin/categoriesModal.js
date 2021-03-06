var formId;

(function openModalWindow() {
    $(document).ready(function() {
        $('.button-form').click( function(event){
            event.preventDefault();
            formId = $(this).attr('form');
            $('#overlay').fadeIn(400,
                function(){
                    $('#modal_form_delete_category')
                        .css('display', 'block')
                        .animate({opacity: 1, top: '50%'}, 200);
                });
        });
    });
}());


(function closeModalWindow() {
    $('#no-del-category-btn, #overlay').click( function(){
        $('#modal_form_delete_category')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
}());

(function submitDeleteForms() {
    $('#del-category-btn').click(function() {
        $( '#' + formId ).submit();
    });
}());