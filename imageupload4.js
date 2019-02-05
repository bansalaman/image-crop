function readImageFile(file) {
    var reader = new FileReader(); // CREATE AN NEW INSTANCE.

    reader.onload = function (e) {
        var img = new Image();      
        img.src = e.target.result;
        $('#show_image').attr('src', img.src);

        img.onload = function () {
            var w = this.width;
            var h = this.height;

            document.getElementById('fileInfo').innerHTML =
                document.getElementById('fileInfo').innerHTML + '<br /> ' +
                    'Width: <b>' + w + '</b> <br />' +
                    'Height: <b>' + h + '</b> <br />' +
                    'aspectRatio: <b>' + w/h + '<b> <br />';
        }
    };
    reader.readAsDataURL(file.files[0]);
    inputValues();
}

function inputValues() {
    //req_height = document.getElementById('req_height').value;
    //req_width = document.getElementById('req_width').value;
    //req_aspect_ratio = $('#req_aspect_ratio');

    document.getElementById('myBtn').addEventListener('click', function() {
        //console.log("Results");
        //console.log(document.getElementById('req_height').value);
        //console.log(document.getElementById('req_width').value);
        var aspect_ratio = document.getElementById('req_width').value/document.getElementById('req_height').value;
        //console.log(aspect_ratio);
        document.getElementById('req_aspect_ratio').setAttribute('placeholder',aspect_ratio);
        console.log(aspectRatio);
        console.log(aspect_ratio);
      });    
}

$("#image").change(function(){
    readImageFile(this);
});