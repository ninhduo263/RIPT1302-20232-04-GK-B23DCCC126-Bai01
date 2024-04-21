function maytinh(nhantu) {
    var inA = parseFloat(document.getElementById('inA').value);
    var inB = parseFloat(document.getElementById('inB').value);
    var ketqua = document.getElementById('ketqua');
    if (isNaN(inA) || isNaN(inB)) {
        ketqua.innerHTML = 'Vui long nhap so hop le';
        return;
    }
    switch(nhantu) {
        case 'SUM':
            ketqua.innerHTML = 'Ket qua: ' + (inA + inB);
            break;
        case 'SUBTRACT':
            ketqua.innerHTML = 'Ket qua: ' + (inA - inB);
            break;
        case 'MULTIPLY':
            ketqua.innerHTML = 'Ket qua: ' + (inA * inB);
            break;
        case 'DIVIDE':
            if (inB === 0) {
                ketqua.innerHTML = 'Khong the chia cho 0';
            } else {
                ketqua.innerHTML = 'Ket qua: ' + (inA / inB);
            }
            break;
        default:
            ketqua.innerHTML = 'Phep tinh khong hop le';
    }
}
function resetInputs() {
    document.getElementById('inA').value = '';
    document.getElementById('inB').value = ''
    document.getElementById('ketqua').innerHTML= '';
}

