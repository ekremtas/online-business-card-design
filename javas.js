
//Sağ click engelleme
// window.onload = function() {
//     document.addEventListener("contextmenu", function (e) {
//         e.preventDefault();
//     }, false);
// }

var i=0;
interact('.amantönrem')
    .draggable({
        onmove: window.dragMoveListener,
        restrict: {
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
    });
interact('#kaybol')
    .draggable({
        onmove: window.dragMoveListener,
        restrict: {
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
    });
interact('.qrcodes')
    .draggable({
        onmove: window.dragMoveListener,
        restrict: {
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
    });
interact('.tap-target')
    .draggable({
        onmove: window.dragMoveListener,
        restrict: {
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
    });
interact('.resize-drag')
    .on('doubletap', function (event) {
        onmove: window.showMe('kaybol'),
            event.preventDefault();
    })
    .draggable({
        onmove: window.dragMoveListener,
        restrict: {
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
    });
interact('.sekil')
    .draggable({
        onmove: window.dragMoveListener,
        restrict: {
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
    });
function dragMoveListener (event) {
    var offset = [0,0];
    var divOverlay = event.target;
    var isDown = false;
    divOverlay.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            divOverlay.offsetLeft - e.clientX,
            divOverlay.offsetTop - e.clientY
        ];
    }, true);
    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function(e) {
        event.preventDefault();
        if (isDown) {
            divOverlay.style.left = (e.clientX + offset[0]) + 'px';
            divOverlay.style.top  = (e.clientY + offset[1]) + 'px';
        }
    }, true);

    //        var target = event.target,
    //// keep the dragged position in the data-x/data-y attributes
    //            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    //            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    //
    //
    //// translate the element
    //        target.style.webkitTransform =
    //            target.style.transform =
    //                'translate(' + x + 'px, ' + y + 'px)';
    //
    //// update the posiion attributes
    //        target.setAttribute('data-x', x);
    //        target.setAttribute('data-y', y);
}
function showMe(blockId) {

    if ( document.getElementById(blockId).style.display == '' ) {
        document.getElementById(blockId).style.display = 'none'; }
    else if ( document.getElementById(blockId).style.display == 'none' ) {
        document.getElementById(blockId).style.display = ''; }

}
// function secilenidgetir(a) {
//     var duzenlenen = document.getElementById("editor");
//     var secilen = document.getElementById(a);
//     //     console.log(secilen);
//     console.log(duzenlenen);
//     duzenlenen.value=secilen.value;
//     duzenlenen.style.cssText= secilen.style.cssText;
// }
function secilenidgetir(a) {
    var duzenlenen = document.getElementById("editor");
    var secilen = document.getElementById(a);
    duzenlenen.value    =  secilen.innerHTML   ;
    duzenlenen.style.cssText= secilen.style.cssText;
    duzenlenen.style.transform="";
    var konumduzenle = document.getElementById("kaybol");

    console.log(konumduzenle);
    x = (parseFloat(konumduzenle.getAttribute('data-x')) || 0) + secilen.dx,
        y = (parseFloat(konumduzenle.getAttribute('data-y')) || 0) + secilen.dy;

    konumduzenle.style.webkitTransform =
        konumduzenle.style.transform =
            'translate(' + x + 'px, ' + y+30 + 'px)';
    konumduzenle.setAttribute('data-x', x);
    konumduzenle.setAttribute('data-y', y+30);

    console.log(konumduzenle);
    //document.getElementById("kaybol").style.transform = translate(secilen.position.x);
    duzenlenen.title=a;
}

//  function yenikısım() {
//      var metin = document.getElementById("editor").value;
//      if(metin!=""){
//          var stil = document.getElementById("editor").style;
//          var newColor = document.getElementById("addNewColor").value;
//          stil.color='#'+newColor;
//          stil.cursor="move";
//          stil.userSelect="none";
//          var yenielement = document.createElement("input");
//          yenielement.className ="resize-drag";
//          yenielement.setAttribute("style", stil.cssText);
//          yenielement.id=i;
//          yenielement.userSelect = "none";
//          yenielement.style.transform="translate(13px, 13px)";
//          yenielement.style.width="fit-content";
//          yenielement.style.height="auto";
//          yenielement.setAttribute("onclick","secilenidgetir(this.id)");

//          yenielement.value=metin;
//          var icerik= document.createTextNode(metin);
//          yenielement.appendChild(icerik);

//          var anakısım= document.getElementById("anakısım");
//          anakısım.appendChild(yenielement);
//          i=i+1;
//          document.getElementById("editor").value="";
//          document.getElementById("editor").style="";
//      }
//      else{
//          alert("Boş ekleme yapılmaz");
//      }

//  }

function denemestil() {var dene = document.getElementById("editor");
    var stil = document.getElementById("editor").style;
    var newColor = document.getElementById("addNewColor").value;

    if( newColor=="FFFFFF")
    {      stil.color='#'+newColor;
    stil.backgroundColor="#000000";}
    else
    {     stil.color='#'+newColor;
    stil.backgroundColor="#FFFFFF";
    }
     console.log(stil);
      console.log(newColor);
}
// function yazdirtext(value) {
//     var editor =document.getElementById("editor");
//     editor.value = value;
// }
// function yazdirfocus(value) {
//     var editor =document.getElementById("editor");
//     editor.value = value;
// }
function alayinigetir(titles,values) {
    var editor =document.getElementById("editor");
    var dene =document.getElementById(titles);
    editor.value = values;
    if(dene.title == titles){
        dene.value=values;
    }
}


function kısımSınırla(gelenvalue) {
    console.log(gelenvalue);
    changeSize('editor',gelenvalue);

}

function kısımSil() {
    var editor =document.getElementById("editor");
    if(editor.title != "")
    {
        var silinicekID=editor.title;
        var sobje =document.getElementById(silinicekID);
        var sinputobjeID = "yeni"+silinicekID;
        var sobjeyoket =document.getElementById(sinputobjeID);
        sobjeyoket.style.display="none";
        sobje.style.display="none";
        editor.value="";
        editor.style="";
    }
    else{
        alert("Hiç bir nesne seçili değil");
    }
}
function kısımGuncelle() {
    var editor =document.getElementById("editor");
    console.log(editor);
    if(editor.title != "")
    {
        var guncelID=editor.title;
        var guncelleınputID="yeni"+editor.title;
        document.getElementById(guncelID).innerHTML = editor.value;
        document.getElementById(guncelleınputID).value = editor.value;

        document.getElementById(guncelID).style.cssText=editor.style.cssText;
        document.getElementById(guncelID).style.backgroundColor="transparent";
        document.getElementById(guncelID).style.width="fit-content";
        document.getElementById(guncelID).style.height="fit-content";

    }
    else{
        alert("Hiç bir nesne seçili değil");
    }
}
function gizlekaybol() {
    var menugetir=document.getElementById("kaybol");
    var menusekil = document.getElementById("sekiledit");
    if(menugetir.style.display=="none")
    {
        menusekil.style.display="none";
        menugetir.style.display="block";
    }
    else{
        menugetir.style.display="none";
    }
}
function getirleftmenu(textid) {
    if(textid =="a"){
        document.getElementById("menu-img").style.display="none";
        document.getElementById("menu-fazlasi").style.display="none";
        document.getElementById("menu-icon").style.display="none";
        var menugetir=document.getElementById("menu-text");
        if(menugetir.style.display=="none")
        {
            menugetir.style.display="block";
        }
        else{
            menugetir.style.display="none";
            document.getElementById("menu-text").style.display="block";
        }
    }
    if(textid =="b"){
        document.getElementById("menu-text").style.display="none";
        document.getElementById("menu-fazlasi").style.display="none";
        document.getElementById("menu-icon").style.display="none";
        var menugetir=document.getElementById("menu-img");
        if(menugetir.style.display=="none")
        {
            menugetir.style.display="block";
        }
        else{
            menugetir.style.display="none";
            document.getElementById("menu-text").style.display="block";
        }
    }
    if(textid =="c"){
        document.getElementById("menu-img").style.display="none";
        document.getElementById("menu-text").style.display="none";
        document.getElementById("menu-icon").style.display="none";
        var menugetir=document.getElementById("menu-fazlasi");
        if(menugetir.style.display=="none")
        {
            menugetir.style.display="block";
        }
        else{
            menugetir.style.display="none";
            document.getElementById("menu-text").style.display="block";
        }
    }
    if(textid =="e"){
        document.getElementById("menu-img").style.display="none";
        document.getElementById("menu-text").style.display="none";
        document.getElementById("menu-fazlasi").style.display="none";
        var menugetir=document.getElementById("menu-icon");
        if(menugetir.style.display=="none")
        {
            menugetir.style.display="block";
        }
        else{
            menugetir.style.display="none";
            document.getElementById("menu-text").style.display="block";
        }
    }
}




function inputolustur() {
    var olustur= document.getElementsByClassName("text-left-menu");
    console.log(olustur);
    var yenielement = document.createElement("input");
    yenielement.className="text-left-menu";
    yenielement.type="text";
    yenielement.id="yeni"+i;
    yenielement.title=i;
    yenielement.setAttribute("oninput","alayinigetir(this.title,this.value)");
    yenielement.setAttribute("onfocus","yazdirfocus(this.value)");

    yenielement.setAttribute("onclick","gizlekaybol()")
    yenielement.setAttribute("placeholder","yenielement");
    console.log(yenielement);
    var leftmenu= document.getElementById("menu-text-textalan");
    leftmenu.appendChild(yenielement);



    var yeniekle = document.createElement("div");
    yeniekle.className ="resize-drag";
    yeniekle.id= i;
    yeniekle.title=i;
    yeniekle.userSelect = "none";
    yeniekle.style.transform="translate(13px, 13px)";
    yeniekle.style.width="fit-content";
    yeniekle.style.height="auto";
    yeniekle.setAttribute("onclick","secilenidgetir(this.id), gizlekaybol(), lokasyonbul(this.id) ");
    yeniekle.setAttribute("oninput","secilenyazdir(this.id,this.value)");
    yeniekle.innerHTML="Yeni Element";
    eskirenkgi="transparent";

    var anakısım= document.getElementById("anakısım");
    anakısım.appendChild(yeniekle);
    i=i+1;
}

function secilenyazdir(idsi,valuess) {
    var editor =document.getElementById("editor");
    var dene =document.getElementById("yeni"+idsi);
    editor.value = valuess;
    if(dene.title == idsi){
        dene.innerHTML=valuess;
    }

}

function alangoster() {
    var menugetir=document.getElementById("menu-left-qr");
    if(menugetir.style.display=="none")
    {
        menugetir.style.display="block";
    }
    else{
        menugetir.style.display="none";
    }
}



function eklemeresim() {

    var yukseklik = document.getElementById("yukseklik-text").value;
    var uzunluk = document.getElementById("uzunluk-text").value;

    var imgeklencek=document.getElementById("imgekleme");
    console.log(imgeklencek.url.value);
    var yeniekle = document.createElement("div");
    yeniekle.className = "sekil";
    yeniekle.id = i;
    yeniekle.title = i;
    yeniekle.style.width = uzunluk + "px";
    yeniekle.style.height = yukseklik + "px";
    yeniekle.style.backgroundImage="url('././"+imgeklencek+"')";
    yeniekle.style.transform = "translate(-3px, -196.453px)";
    console.log(yeniekle);
    var anakısım = document.getElementById("anakısım");
    anakısım.appendChild(yeniekle);
    i = i + 1;

}
var eskirenkgi="";
function lokasyonbul(id) {
    var element = document.getElementById(id);
    var l=element.style.left.replace(/px/g, "");;
    var t=element.style.top.replace(/px/g, "");;
    var y=element.clientTop;
    var w= element.clientWidth;
    var h= element.clientHeight;
    console.log("l: "+ l + " ");
    console.log("t: "+ t + " ");
    console.log("w: "+ w + " ");
    console.log("h: "+ h + " ");
    console.log("hewere: "+(-l)+ " ");
    console.log("renk: "+eskirenkgi+ " ");

    if(l<0){
        element.style.border="10px double";
        element.style.borderColor="rgb(255, 0, 0)";
    }
    if(t<0){
        element.style.border="5px double";
        element.style.borderColor="rgb(255, 0, 0)";
    }
    if(t>0){
        element.style.border="1px solid";
        element.style.borderColor=eskirenkgi;
    }
    if(w <(-l) )
    {
        element.style.display="none";
        document.getElementById("sekiledit").style.display="none";
        secilisekil="";
    }

}

var secilisekil="";
function sekildegistir(idsi) {
    var menugetir=document.getElementById("sekiledit");
    var menutextgetir=document.getElementById("kaybol");
    // document.getElementById(idsi).style.border="3px solid #ffca28";
    if(secilisekil != idsi){
        secilisekil=idsi;
        //   document.getElementById("sekilcolordegis")     = document.getElementById(secilisekil).style.backgroundColor.value;
        document.getElementById("deg-control").value     =    document.getElementById(secilisekil).style.transform;
        document.getElementById("rad-control").value     =    document.getElementById(secilisekil).style.borderRadius;
        document.getElementById("degsekil").value     =    document.getElementById(secilisekil).style.transform;
        document.getElementById("radsekil").value     =    document.getElementById(secilisekil).style.borderRadius;
        var widthtt   = document.getElementById(secilisekil).style.width ;//widthtt.substring(0,length-2);
        document.getElementById("sekilwidth").value =widthtt.substring(0,(widthtt.length-2));
        var heighttt= document.getElementById(secilisekil).style.height;
        document.getElementById("sekilheight").value     =    heighttt.substring(0,(heighttt.length-2));

        if(menugetir.style.display=="none")
        {
            menutextgetir.style.display="none";
            menugetir.style.display="block";
        }
    }
    else{
        document.getElementById(secilisekil).style.border="1px solid transparent";
        secilisekil="";
        menugetir.style.display="none";
    }
    // var sekildegistirmeler=document.getElementById(idsi);
    // sekildegistirmeler.style.backgroundColor=document.getElementById("sekilcolordegis").value;
    //  console.log(sekildegistirmeler);
}
function kaybolEditSekil() {
    if(menugetir.style.display=="none")
    {
        menugetir.style.display="block";
    }
    else{
        document.getElementById(secilisekil).style.border="1px solid transparent";
        secilisekil="";
        menugetir.style.display="none";
    }
}
function kareyap() {
    var colorsekil = document.getElementById("colorekle").value;
    var yeniekle = document.createElement("div");
    yeniekle.className ="sekil";
    yeniekle.id= i;
    yeniekle.title=i;
    yeniekle.style.width="100px";
    yeniekle.style.position="absolute";
    yeniekle.setAttribute("onclick","sekildegistir(this.id)");
    yeniekle.setAttribute("onmouseup","lokasyonbul()");

    yeniekle.style.height= "100px";
    yeniekle.style.backgroundColor=colorsekil;
    yeniekle.style.zIndex=100;
    yeniekle.style.transform="translate(0 , 0)";

    var anakısım= document.getElementById("anakısım");
    anakısım.appendChild(yeniekle);
    i=i+1;

}
function arkaplanrenk(renk) {
    console.log(renk);
    document.getElementById("anakısım-body").style.backgroundColor=renk;
    document.getElementById("anakısım").style.backgroundColor=renk;
}
function sekilrenkdegistir() {
    var renk = document.getElementById("sekilrenkdegis").value;

}
function sekilrenkdegistir() {

    document.getElementById(secilisekil).style.border="1px solid"
    document.getElementById(secilisekil).style.borderColor= document.getElementById("sekilrenkdegistir").value;
}
function sekilBack() {
    document.getElementById(secilisekil).style.backgroundColor= document.getElementById("sekilcolordegis").value;
    // eskirenkgi=document.getElementById("sekilcolordegis").value;
}
function sekilSil() {
    document.getElementById(secilisekil).style.display= "none";
    document.getElementById("sekiledit").style.display="none";
}
function sekilwidht(asd) {
    if(asd <= 700){
        document.getElementById(secilisekil).style.width= asd + "px";
    }
    else{alert("sınır çizgisini geçemez");}
}
function sekilheight(asd) {
    if(asd <= 380){ document.getElementById(secilisekil).style.height= asd+ "px";
    }
    else{alert("sınır çizgisini geçemez");}
}
function sekilrad(asd) {
    if(asd <= 100){
        document.getElementById(secilisekil).style.borderRadius= asd + "px";
    }
    else{alert("sınır çizgisini geçemez");}
}
function sekildeg(asd) {
    if(asd <= 380){
        document.getElementById(secilisekil).style.transform = "rotate("+asd+ "deg)";
    }
    else{alert("sınır çizgisini geçemez");}
}

function getirgotur(a){
    var editorid=document.getElementById("editor");
    console.log("editor title: "+ editorid.title);
    // document.getElementById(secilisekil).style.zIndex;
    if(a==1){
        console.log("getirgotur 1");

    }
    else if(a==2){
        console.log("getirgotur 2");

    }
    else if(a==3){

        console.log("getirgotur 3");
    }
    else if(a==4){

        console.log("getirgotur 4");
    }
    else{
        console.log("getirgotur çalışmıyor");
    }

    if(a>=0){
        console.log(a);
    }

}

function onegetir(){
    var a=document.getElementById(secilisekil).style.zIndex;
    if(a>=0){
        console.log(a);
    }

}
function arkayagotur(){
    var a=document.getElementById(secilisekil).style.zIndex;
    if(a<=0){
        document.getElementById(secilisekil).style.zIndex = 0;
    }
    else{
        document.getElementById(secilisekil).style.zIndex -=100;
    }
}
function enönegetir(){
    document.getElementById(secilisekil).style.zIndex =1000;
}
function enarkayagonder(){
    document.getElementById(secilisekil).style.zIndex =0;
}

//  function addsvgfunc() {
//    // var dene=   document.getElementById("imgekleme");
//    // var deneval=dene.value;
//    // console.log(deneval);

//      var elem = document.createElement("img");
//      elem.src = "";
//      elem.id = "";
//      elem.setAttribute("class","amantönrem");
//      elem.setAttribute("height", "50");
//      elem.setAttribute("width", "150");
//      elem.setAttribute("alt", ("resim"+i));
//      console.log(elem);
//      var anakısım = document.getElementById("anakısım");
//      anakısım.appendChild(elem);
//      i = i + 1;
//    <div id="qrcode" class="qrcodes" style="width: fit-content;height: fit-content;" ></div>

//    }
//
function qrcodeolusturma() {
    var yeniekle = document.createElement("div");
    yeniekle.className ="qrcode";
    yeniekle.id= "qrcode";
    yeniekle.style.left=0;
    yeniekle.style.top=0;
    yeniekle.style.width="fit-content";
    yeniekle.style.height="fit-content";


    var anakısım= document.getElementById("anakısım");
    anakısım.appendChild(yeniekle);

}

var imgURL;
var imgURLSIZ;
function urlBul() {
    imgURL=URL.createObjectURL(event.target.files[0]);
    imgURLSIZ=event.target.files[0];
    console.log("URL: " + imgURL);
    console.log("URLSIZ: " + imgURLSIZ);
    denemedenemedeneme();
}
function denemedenemedeneme() {

    var yeniekle = document.createElement("div");
    yeniekle.style.backgroundImage="url("+imgURL+")";
    yeniekle.className ="amantönrem";
    yeniekle.id= i;
    yeniekle.title=i;
    yeniekle.style.backgroundSize = "contain";
    yeniekle.style.width="200px";
    yeniekle.style.height= "100px";
    yeniekle.style.position="absolute";
    yeniekle.setAttribute("onclick","sekildegistir(this.id)");
    yeniekle.style.zIndex=100;

    var anakısım= document.getElementById("anakısım");
    anakısım.appendChild(yeniekle);
    i=i+1;
}

function visibilitydivX() {

    var anakısım= document.getElementById("anakısım");
    //anakısım.style.ov
}

function customPopup() {

    let $btnShowPopup = $('.js-open-popup');
    let $btnClosePopup = $('.js-close-popup');
    let $popup = $('.js-custom-popup');

    $btnShowPopup.on('click', function () {

        let targetPopup = $(this).attr('data-target');
        $("[data-popup=" + targetPopup + "]").addClass('is-active');

    });

    $btnClosePopup.on('click', function () {
        $(this).parents('.is-active').removeClass('is-active');
    });

    $popup.on('click', function (event) {
        if (!$(event.target).closest('.js-custom-popup-holder').length && !$(event.target).is('js-custom-popup')) {
            if ($popup.hasClass('is-active')) {
                $popup.removeClass('is-active');
            }
        }
    });

}

function resimkaydet() {
    var denemediv=document.getElementById("bunedoktor");
    var canVAS=document.getElementById("theCanvas");
    html2canvas($("#anakısım"), {
        onrendered: function(canvas) {
            theCanvas = canvas;
            theCanvas.id="theCanvas";
            theCanvas.style.display="inline";
            theCanvas.style.marginTop="95px";
            theCanvas.style.marginLeft="138px";
            theCanvas.style.zIndex="-1";
            theCanvas.style.position="absolute"
            theCanvas.style.width="473px";
            theCanvas.style.backgroundColor=denemediv.style.backgroundColor;
            theCanvas.style.height="287px";
            //       theCanvas.style.display="inline";
            //       theCanvas.style.marginTop="75px";
            //   theCanvas.style.marginLeft="114px";
            //   theCanvas.style.zIndex="10";
            //   theCanvas.style.maxWidth="400px";
            //document.body.appendChild(canvas);

            // Convert and download as image
            Canvas2Image.saveAsPNG(canvas);
            $("#img-out").append(canvas);

            canVAS.parentNode.removeChild(canVAS);
            // Clean up
            //document.body.removeChild(canvas);
        }
    });
}

function deneme() {
    var denemediv=document.getElementById("bunedoktor");
    var canVAS=document.getElementById("theCanvas");
    console.log(canVAS);

    if(canVAS == null){
        denemediv.style.display="inline";
        html2canvas($("#anakısım-body"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                theCanvas.id="theCanvas";
                theCanvas.style.display="inline";
                theCanvas.style.marginTop="95px";
                theCanvas.style.marginLeft="138px";
                theCanvas.style.zIndex="-1";
                theCanvas.style.position="absolute"
                theCanvas.style.width="473px";
                theCanvas.style.height="287px";
                document.body.appendChild(canvas);
                // Convert and download as image
                //Canvas2Image.saveAsPNG(canvas);
                $("#img-out").append(canvas);
                // Clean up
                //document.body.removeChild(canvas);
            }
        });
    }
    else{
        denemediv.style.display="inline";
        canVAS.parentNode.removeChild(canVAS);
        html2canvas($("#anakısım-body"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                theCanvas.id="theCanvas";
                theCanvas.style.display="inline";
                theCanvas.style.marginTop="95px";
                theCanvas.style.marginLeft="138px";
                theCanvas.style.zIndex="-1";
                theCanvas.style.position="absolute"
                theCanvas.style.width="473px";
                theCanvas.style.height="287px";
                //       theCanvas.style.display="inline";
                //       theCanvas.style.marginTop="75px";
                //   theCanvas.style.marginLeft="114px";
                //   theCanvas.style.zIndex="10";
                //   theCanvas.style.maxWidth="400px";
                document.body.appendChild(canvas);

                // Convert and download as image
                //Canvas2Image.saveAsPNG(canvas);
                $("#img-out").append(canvas);
                // Clean up
                document.body.removeChild(canvas);
            }
        });

    }
}

function iconolustur(devamı){
    var yeniekle = document.createElement("div");
    yeniekle.className ="resize-drag";
    yeniekle.id= i;
    yeniekle.title=i;
    yeniekle.userSelect = "none";
    yeniekle.style.transform="translate(13px, 13px)";
    yeniekle.style.width="fit-content";
    yeniekle.style.height="auto";
    eskirenkgi="transparent";
    i=i+1;
var renk = document.getElementById("iconcolordegis").value;
    var size = document.getElementById("iconsize").value;
    var icineEklenecekI= document.createElement("i");
    icineEklenecekI.id=i;
    icineEklenecekI.style.color=renk;
    icineEklenecekI.style.fontSize= size + "px";
    icineEklenecekI.className="fas fa-"+devamı;

    yeniekle.appendChild(icineEklenecekI);
    var anakısım= document.getElementById("anakısım");
    anakısım.appendChild(yeniekle);
    i=i+1;
}

function imgeklemeyeri() {
    var yeniekle = document.createElement("img");
    yeniekle.src="";
    yeniekle.className ="amantönrem";
    yeniekle.id= i;
    yeniekle.title=i;
    yeniekle.style.backgroundSize = "contain";
    yeniekle.style.width="200px";
    yeniekle.style.height= "100px";
    yeniekle.style.position="absolute";
    yeniekle.setAttribute("onclick","sekildegistir(this.id)")
    yeniekle.style.zIndex=100;

    var anakısım= document.getElementById("anakısım");
    anakısım.appendChild(yeniekle);


}
function goForward() {
    window.history.forward();
}
function goBack() {
    window.history.back();
}

function viewer() {
    imgeklemeyeri();

    var img = document.getElementById(i)
    var file = document.getElementById('upload').files[0]
    var reader = new FileReader()

    if (file) {
        reader.readAsDataURL(file)
        reader.onload = function (e) {
            img.src = reader.result
            img2Cvs(img)
        }
    } else {
        img.src = ''
    }
    i=i+1;
}

function img2Cvs (img) {
    var cvs = document.getElementById('cvs')
    var ctx = cvs.getContext('2d')
    cvs.height = img.height
    cvs.width = img.width
    ctx.drawImage(img, 0 ,0)
}

