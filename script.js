function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12){
        //bom dia
        msg.innerHTML = `Agora são ${hora}:${minutos} horas.` 
        img.src = "img/manhared.png"
    } else if (hora >=12 && hora < 18){
        //boa tarde
        msg.innerHTML = `Agora são ${hora}:${minutos} horas.` 
        img.src = "img/tardered.png"
    } else {
        //boa noite
        msg.innerHTML = `Agora são ${hora}:${minutos} horas.`  
        img.src = "img/noitered.png"
    }
}