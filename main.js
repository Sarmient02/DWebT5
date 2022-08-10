
$(function(){
    $('#fecha').on('change', calcularEdad);
});

function calcularEdad() {
    fecha = $(this).val();
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    $('#edad').val(edad);
}

function mostrar(variable){
	$("#"+variable).css("display", "block");
	$("#"+variable+" input").prop('checked', false);
	$( "#"+variable+" input" ).rules( "add", {required: true});
	$( "#"+variable+" textarea" ).rules( "add", {required: true});
}

function esconder(variable){
	$("#"+variable).css("display", "none");
	$("#cuales").css("display", "none");
	$("#"+variable+" textarea").rules( "remove" , "required");
	$("#"+variable+" textarea").rules( "remove" , "required");
}

$(document).ready(function(){

	$("#formulario").validate({
		errorClass: "ayuda is-danger",
		errorPlacement: function(error, element) {
            //Custom position: first name
            if (element.attr("name") == "q2" ) {
                error.insertAfter($("#qq2"));
            }
			else if (element.attr("name") == "q1" ) {
                error.insertAfter($("#qq1"));
            }
            //Custom position: second name
            else if (element.attr("name") == "second" ) {
                $("#errNm2").text(error);
            }
			else{
				error.insertAfter(element);
			}
            
        },

		rules:{
			nombre:{
				required: true
			},
			apellido:{
				required: true
			},
			username:{
				required: true,
				pattern: "^[a-zA-Z0-9\_\-]{1,100}$"
			},
			password:{
				required: true
			},
			cpassword:{
				required: true,
				equalTo: "#password"
			},
			email:{
				required: true,
				email: true
			},
			q1:{
				required: true
			},
			holaa:{
				required: true
			},
			fecha:{
				required: true
			}
		},
		messages:{
			username:{
				pattern: "No puede contener caracteres extraños.",
				required: "Ingrese un nombre de usuario."
			},
			password:{
				required: "Ingrese la contraseña."
			},
			cpassword:{
				required: "Ingrese la contraseña.",
				equalTo:"Las contraseñas no coinciden."
			},
			email:{
				email: "Ingrese un email válido.",
				required: "Ingrese su email."
			},
			nombre:{
				required: "Ingrese su nombre."
			},
			apellido:{
				required: "Ingrese su apellido."
			},
			fecha:{
				required: "Ingrese su fecha de nacimiento."
			},
			q2:{
				required: "Seleccione una opción."
			},
			q1:{
				required: "Seleccione una opción."
			},
			textar:{
				required: "Digite la(s) enfemedad(es)."
			}
		}

	});

	$("#btnSubmit").click(function(){
		if($("#formulario").valid()){
			$("#formulario").trigger("reset");
			location.reload();
			alert("Usuario registrado!");
		}
    });

});