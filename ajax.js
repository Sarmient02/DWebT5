console.log('correcto');

traerDatos();

var vID = false;
var vName = false;

$("#idAsc").click(traerDatos);
$('#idDesc').click(function(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = $("#res");
            datos.sort(function(a,b) {
                return eval(b.id - a.id)
            });
            mostrarArray(datos);
        }
    }
});

$(document).ready(function(){
    $('#id').click(function(){
        const xhttp = new XMLHttpRequest();
    
        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    
        xhttp.send();
    
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status ==200){
                let datos = JSON.parse(this.responseText);
                console.log(datos);
                let res = $("#res");
                if(!vID){
                    datos.sort(function(a,b) {
                        return eval(b.id - a.id)
                    });
                    vID = true;
                }else{
                    vID = false;
                }
                mostrarArray(datos);
            }
        }
    });

    $("#name").click(function(){
        if(!vName){
            ordenarAsc("name");
            vName = true;
        }else{
            ordenarDesc("name");
            vName = false;
        }
    });

    $("#username").click(function(){
        if(!vName){
            ordenarAsc("username");
            vName = true;
        }else{
            ordenarDesc("username");
            vName = false;
        }
    });

    $("#email").click(function(){
        if(!vName){
            ordenarAsc("email");
            vName = true;
        }else{
            ordenarDesc("email");
            vName = false;
        }
    });

    $("#address").click(function(){
        if(!vName){
            ordenarAsc("address.street");
            vName = true;
        }else{
            ordenarDesc("address.street");
            vName = false;
        }
    });

    $("#phone").click(function(){
        if(!vName){
            ordenarAsc("phone");
            vName = true;
        }else{
            ordenarDesc("phone");
            vName = false;
        }
    });

    $("#website").click(function(){
        if(!vName){
            ordenarAsc("website");
            vName = true;
        }else{
            ordenarDesc("website");
            vName = false;
        }
    });
});



$('#nameDesc').click(function(){
    ordenarDesc("name");
});
$('#nameAsc').click(function(){
    ordenarAsc("name");
});


function mostrarArray(datos){
    res.innerHTML = '';
    for(let item of datos){
        //console.log(item);
        res.innerHTML += `
        <tr>
            <td>${item.id}</th>
            <td>${item.name}</th>
            <td>${item.username}</th>
            <td>${item.email}</th>
            <td>${item.address['street']}</th>
            <td>${item.phone}</th>
            <td>${item.website}</th>
        </tr>
        `
    }
}

function traerDatos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = $("#res");
            
            mostrarArray(datos);
            
        }
    }
}

function ordenarAsc(variable){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = $("#res");
            datos.sort(function(a,b) {
                if (eval("a."+variable+" == b."+variable)) {
                    return 0;
                  }
                  if (eval("a."+variable+" < b."+variable)) {
                    return -1;
                  }
                  return 1;
            });
            mostrarArray(datos);
        }
    }
}

function ordenarDesc(variable){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = $("#res");
            datos.sort(function(a,b) {
                if (eval("a."+variable+" == b."+variable)) {
                    return 0;
                  }
                  if (eval("a."+variable+" > b."+variable)) {
                    return -1;
                  }
                  return 1;
            });
            mostrarArray(datos);
        }
    }
}

