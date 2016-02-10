jQuery(function($){
    $('#signup').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget),
            plan = button.data('plan'),
            modal = $(this);
        modal.find('.modal-footer #plan').val(plan);
    });

    $("#try-form").validate({
        submitHandler: function(form, e) {
            e.preventDefault();
            var fields = {
                name: $(form).find('#name').val(),
                email: $(form).find('#email').val(),
                instagram: $(form).find('#instagram').val(),
                phone: $(form).find('#phone').val(),
                message: $(form).find('#message').val() + "\n\n Plano: " + $(form).find('#plan').val()
            };
            $.post('http://api.compre.io/v1/mail', fields, function(done){
                swal({title: "Sucesso!", text: "Os seus dados foram enviados com sucesso. Em breve você receberá as instruções por email!", type: "success", confirmButtonText: "ok" });
                $(form).find('input,textarea').val('');
            });

            return false;
        }
    });

    $("#contact-form").validate({
        submitHandler: function(form, e) {
            e.preventDefault();
            var fields = {
                name: $(form).find('#name').val(),
                email: $(form).find('#email').val(),
                instagram: $(form).find('#instagram').val(),
                phone: $(form).find('#phone').val(),
                message: $(form).find('#message').val()
            };
            $.post('http://api.compre.io/v1/mail', fields, function(done){
                swal({title: "Sucesso!", text: "O seu contato foi enviado com sucesso! Nossa equipe responderá sua solicitação em breve.", type: "success", confirmButtonText: "ok" });
                $(form).find('input,textarea').val('');
            });

            return false;
        }
    });
});
