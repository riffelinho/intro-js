function formula() {
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 - cantidadT)
    document.getElementById('c2').value = (cantidad2 + cantidadT)
}

function formula2() {
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 + cantidadT)
    document.getElementById('c2').value = (cantidad2 - cantidadT)
}

function formula3() {
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 + cantidadT);
}

function formula4() {
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value = (cantidad2 + cantidadT);
}

function formula5() {
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 - cantidadT);
}

function formula6() {
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value = (cantidad2 - cantidadT);
}