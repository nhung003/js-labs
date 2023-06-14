function checksearch(){
    if(document.formtim.tukhoa.value == "Tim kiem"){
        alert("Ban chua nhap tu khoa tim kiem");
        document.formtim.tukhoa.focus();
        return false; //Chon form khong cho submit
    }
    return true; // cho submit form khi da kiem tra xong
}