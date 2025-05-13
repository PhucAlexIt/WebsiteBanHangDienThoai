function showFormExport (checkbox){
    var form =document.getElementById('form-bill-export');
    if(checkbox.checked){
        form.style.display='block'
    }else{
        form.style.display='none'

    }
}

function increaseQuantity() {
    var quality =document.getElementById('quality-product')
     quality.innerText=++quality.innerText
}

function decreaseQuantity() {
    var quality =document.getElementById('quality-product')
    var i = quality.innerText
    var buttonDes= document.getElementById('btnDes')
    if(i==1){
        return;
    }
    
    quality.innerText=--i
   

}
