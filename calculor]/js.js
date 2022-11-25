

function calculor() {
    var p = document.querySelector('.p')
    var n1 = document.querySelector('#n1').value
    var n2 = document.querySelector('#n2').value
    var n3 =Number (document.querySelector('#cal').value)
    if(n1 == 0 || n2 == 0 ){
        alert('você não informol os dados')
    }
    switch (n3) {
        case 1:
            var re = Number(n1) + Number(n2)
            p.innerHTML = re
            break;
        case 2:
            var re = Number(n1) - Number(n2)
            p.innerHTML = re
            break;
        case 3:
            var re = Number(n1) * Number(n2)
            p.innerHTML = re
            break;
        case 4:
            var re = Number(n1) / Number(n2)
            p.innerHTML = re
            break;
    
        default:
            alert('você não informol os dados')
            break;
           

    }
   
    
    
}