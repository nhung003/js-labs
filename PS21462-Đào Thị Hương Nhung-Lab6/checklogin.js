function checklogin(){
    if(document.flogin.u.value == ''){
        alert("Ban chua nhap username");
        document.flogin.u.focus(); //
        return false;
    }
    if(document.flogin.p.value ==''){
        alert("Ban chua nhap password");
        document.flogin.p.focus();
        return false;
    }
    return true; // Cho submit form khi da kiem tra xong
}