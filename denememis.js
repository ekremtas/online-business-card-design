
// JavaScript Document
var editor=document.getElementById("editor");

//change font style
function changeFont(txt,change) {
    var editor=document.getElementById(txt);
    //for bold
    if (change == 'bold') {
        if (editor.style.fontWeight == 'bold')
            editor.style.fontWeight = 'normal';
        else
            editor.style.fontWeight = 'bold';
    }
    //for italic
    else if (change == 'italic') {
        if (editor.style.fontStyle == 'italic')
            editor.style.fontStyle = 'normal';
        else
            editor.style.fontStyle = 'italic';
    }
    //for underline
    else if (change=='underline'){
        if (editor.style.textDecoration == 'underline')
            editor.style.textDecoration = 'none';
        else
            editor.style.textDecoration = 'underline';
    }
    //for fontsize
    else if (change=='fontSize'){
        var fsize=document.getElementById("fsize");
        var fontSize=fsize.value;
        editor.style.fontSize=fontSize+"px";
    }
    //for adjust right
    else if (change=='adjustR'){
        if(editor.style.textAlign=="right")
            editor.style.textAlign="left";
        else
            editor.style.textAlign="right";
    }
    //for adjust center
    else if (change=='adjustC'){
        if(editor.style.textAlign=="right" || editor.style.textAlign=="left" )
            editor.style.textAlign="center";
        else
            editor.style.textAlign="left";
    }
    //for adjust left
    else if (change=='adjustL'){
        editor.style.textAlign="left";
    }
    //for  font family
    else if (change=='fontFamily'){
        var fontFamily=document.getElementById("fontFamily");
        var value=fontFamily.value;
        switch(value)
        {
            case "1":
                editor.style.fontFamily="Times New Roman";
                break;
            case "2":
                editor.style.fontFamily="Arial";
                break;
            case "3":
                editor.style.fontFamily="Amiri, serif";
                break;
            case "4":
                editor.style.fontFamily="Oxygen, sans-serif";
                break;
            case "5":
                editor.style.fontFamily="Cookie, cursive";
                break;
            case "6":
                editor.style.fontFamily="Roboto, sans-serif";
                break;
            case "7":
                editor.style.fontFamily="Cairo, sans-serif";
                break;
            case "8":
                editor.style.fontFamily="Lato, sans-serif";
                break;
            case "9":
                editor.style.fontFamily="Oswald, sans-serif";
                break;
            case "10":
                editor.style.fontFamily="Raleway, sans-serif";
                break;
            case "11":
                editor.style.fontFamily="Ubuntu, sans-serif";
                break;
            case "12":
                editor.style.fontFamily="Open Sans Condensed, sans-serif";
                break;
            case "13":
                editor.style.fontFamily="Indie Flower, cursive";
                break;
            case "14":
                editor.style.fontFamily="Pacifico, cursive";
                break;
            case "15":
                editor.style.fontFamily="Amatic SC, cursive";
                break;
            case "16":
                editor.style.fontFamily="Kaushan Script, cursive";
                break;
            case "17":
                editor.style.fontFamily="Great Vibes, cursive";
                break;
            case "18":
                editor.style.fontFamily="Patrick Hand, cursive";
                break;
            case "19":
                editor.style.fontFamily="Kalam, cursive";
                break;
            case "20":
                editor.style.fontFamily="Sacramento, cursive";
                break;
            case "21":
                editor.style.fontFamily="Gochi Hand, cursive";
                break;
            case "22":
                editor.style.fontFamily="Bad Script, cursive";
                break;
            case "23":
                editor.style.fontFamily="Parisienne, cursive";
                break;
            case "24":
                editor.style.fontFamily="Shadows Into Light Two, cursive";
                break;
            case "25":
                editor.style.fontFamily="Caveat Brush, cursive";
                break;
            case "26":
                editor.style.fontFamily="Rancho, cursive";
                break;
            case "27":
                editor.style.fontFamily="Alex Brush, cursive";
                break;
            case "28":
                editor.style.fontFamily="Mr Dafoe, cursive";
                break;
            case "29":
                editor.style.fontFamily="Niconne, cursive";
                break;
            case "30":
                editor.style.fontFamily="Just Another Hand, cursive";
                break;
            case "31":
                editor.style.fontFamily="VT323, monospace";
                break;
            case "32":
                editor.style.fontFamily="Nova Mono, monospace";
                break;
            case "33":
                editor.style.fontFamily="Lobster, cursive";
                break;
            case "34":
                editor.style.fontFamily="Righteous, cursive";
                break;
            case "35":
                editor.style.fontFamily="Lobster Two, cursive";
                break;
            case "36":
                editor.style.fontFamily="Poiret One, cursive";
                break;
            case "37":
                editor.style.fontFamily="Monoton, cursive";
                break;
            case "38":
                editor.style.fontFamily="Fredericka the Great, cursive";
                break;
            case "39":
                editor.style.fontFamily="Cabin Sketch, cursive";
                break;
            case "40":
                editor.style.fontFamily="ZCOOL KuaiLe, cursive";
                break;
            case "41":
                editor.style.fontFamily="Gruppo, cursive";
                break;
            case "42":
                editor.style.fontFamily="Bungee Inline, cursive";
                break;
            case "43":
                editor.style.fontFamily="Raleway Dots, cursive";
                break;
            case "44":
                editor.style.fontFamily="Faster One, cursive";
                break;
            case "45":
                editor.style.fontFamily="Pompiere, cursive";
                break;
            case "46":
                editor.style.fontFamily="Mukta, sans-serif";
                break;
            case "47":
                editor.style.fontFamily="Quicksand, sans-serif";
                break;
            case "48":
                editor.style.fontFamily="Dosis, sans-serif";
                break;
            case "49":
                editor.style.fontFamily="Open Sans, sans-serif";
                break;
            case "50":
                editor.style.fontFamily="Montserrat, sans-serif";
                break;
            case "51":
                editor.style.fontFamily="Source Sans Pro, sans-serif";
                break;
            case "52":
                editor.style.fontFamily="Tajawal, sans-serif";
                break;
            case "53":
                editor.style.fontFamily="Noto Sans SC, sans-serif";
                break;
        }

    }
    //for  font size

}

function changeSize(txt,size) {
    var editor=document.getElementById(txt);
    var value= size+"px";
    editor.style.fontSize = value;

}

//select text from texarea
function ShowSelectionInsideTextarea(editor){

    var textComponent = document.getElementById(editor);
    var selectedText;
    // IE version
    if (document.selection != undefined)
    {
        textComponent.focus();
        var sel = document.selection.createRange();
        selectedText = sel.text;
    }
    // Mozilla version
  /*  else if (textComponent.selectionStart != undefined)
    {
        var startPos = textComponent.selectionStart;
        var endPos = textComponent.selectionEnd;
        selectedText = textComponent.value.substring(startPos, endPos)
    }

    alert(selectedText);
*/
}