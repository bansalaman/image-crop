function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            
            $('#show_image').attr('src', e.target.result);
            var w = this.width;
            var h = this.height;
            document.getElementById('fileInfo').innerHTML =
                        document.getElementById('fileInfo').innerHTML + '<br /> ' +
                            'Width: <b>' + w + '</b> <br />' +
                            'Height: <b>' + h + '</b> <br />';
        }
        reader.readAsDataURL(input.files[0]);        
    }
}
$("#image").change(function(){
    readURL(this);
});