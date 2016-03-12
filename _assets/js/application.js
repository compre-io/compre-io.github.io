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
                //description: $(form).find('#description').val(),
                //plan: $(form).find('#plan').val()
                message: $(form).find('#description').val() + "\n\n Plano: " + $(form).find('#plan').val()
            };
            // $.post('http://api.compre.io/v1/stores', fields, function(done, code){
            $.post('http://api.compre.io/v1/mail', fields, function(done){
                $(form).find('input,textarea').val('');
                swal({title: "Sucesso!", text: 'Os dados foram enviados com sucesso. Você receberá as suas informações de conta por email.', html: true, type: "success", confirmButtonText: "ok" });
                // var loginLink = '<br /><p><a target="_blank" href="http://admin.compre.io">Ir para área administrativa</a></p>';
                // swal({title: "Sucesso!", text: done.message + loginLink, html: true, type: "success", confirmButtonText: "ok" });
                // $(form).find('input,textarea').val('');
            }).fail(function(done) {
                swal({title: "Oops!", text: 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.', type: "error", confirmButtonText: "ok" });
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
