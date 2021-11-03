/*
 *  Document   : op_auth_reminder.js
 *  Author     : pixelcave
 */
var OpAuthReminder = function() {
    var e = function() {
        jQuery(".js-validation-active").validate({
            errorClass: "invalid-feedback animated fadeInDown",
            errorElement: "div",
            errorPlacement: function(e, r) {
                jQuery(r).parents(".form-group > div").append(e)
            },
            highlight: function(e) {
                jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
            },
            success: function(e) {
                jQuery(e).closest(".form-group").removeClass("is-invalid"),
                    jQuery(e).remove()
            },
            rules: {
                "active-account": { required: !0, minlength: 8 }
            },
            messages: {
                "active-account": { required: "Please enter a valid active code" }
            }
        })
    };
    return { init: function() { e() } }
}();
jQuery(function() { OpAuthReminder.init() });


/* ===== */
function setLabelCode() {
    var element = document.getElementById('l-active');
    element.classList.add("focus-lable");
}