function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12){
       img.src = 'fotomanha.png'
       document.body.style.background ='#e7d3ae'
    }else if(hora <= 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#8d9eaf'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background ='#02272f'
    }
}
