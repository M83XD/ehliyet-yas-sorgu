try {
    let yas;
function goster() {
    const yas = document.getElementById("yasForm").value
    const isim = document.getElementById("isimForm").value

    if(0 >= yas)
    {
    console.log("boş bir tuşlama yapıldı.")
    alert("Lütfen Bütün Boşlukları Doldurunuz.")
    }
    if(isim.lenght = 0)
    {
        console.log("boş bir tuşlama yapıldı.")
        alert("Lütfen Bütün Boşlukları Doldurunuz.")  
    }

    console.log("İsim:" +isim),
    console.log("Yaş:" +yas)
    if (yas >= 18){
        alert("Ehliyet alabilirsin.");
        console.log('Ehliyet alabilirsin.')
    }
    else {
        alert("Ehliyet Alamazsın.");
        console.log('Ehliyet Alamazsın.');
    }
}
}
catch (error){
    console.log("hata!"+ error)
}
