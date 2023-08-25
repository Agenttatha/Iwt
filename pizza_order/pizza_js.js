function calculate_total_cost(){
    var qtyCP=document.querySelector('.cp').value;
    var qtyPP=document.querySelector('.pp').value;
    var qtyVP=document.querySelector('.vp').value;
    document.querySelector('.total').value=100*qtyCP+80*qtyPP+70*qtyVP;
}
function confirm_order(){
    var qtyCP=document.querySelector('.cp').value;
    var qtyPP=document.querySelector('.pp').value;
    var qtyVP=document.querySelector('.vp').value;
    if(!qtyCP && !qtyPP && !qtyVP){
        alert('please select atlest one quantity')
    }else{
        confirm('Your order is confirmed,reach you in 10minutes')
    }
}

