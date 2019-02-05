function checkFileDetails(input) {

        // GET THE IMAGE WIDTH AND HEIGHT USING fileReader() API.
        function readImageFile(file) {
            var reader = new FileReader(); // CREATE AN NEW INSTANCE.

            reader.onload = function (e) {
                var img = new Image();      
                img.src = e.target.result;

                img.onload = function () {
                    var w = this.width;
                    var h = this.height;

                    $('#file').innerHTML = $('#file').innerHTML + '<br /> ' +
                            'Name: <b>' + file.name + '</b> <br />' +
                            'File Extension: <b>' + fileExtension + '</b> <br />' +
                            'Size: <b>' + Math.round((file.size / 1024)) + '</b> KB <br />' +
                            'Width: <b>' + w + '</b> <br />' +
                            'Height: <b>' + h + '</b> <br />' +
                            'Type: <b>' + file.type + '</b> <br />' +
                            'Last Modified: <b>' + file.lastModifiedDate + '</b> <br />';
                }
            };
            reader.readAsDataURL(input.file[0]);
        }
}
$("#image").change(function(){
    checkFileDetails(this);
});