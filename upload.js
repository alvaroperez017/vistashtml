/*Foto de Perfil*/

document.getElementById('profileUpload').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
        document.getElementById('profilePreview').setAttribute('src', e.target.result);
    };
    
    reader.readAsDataURL(file);
});

/*Foto de Portada*/

document.getElementById('coverUpload').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
        document.getElementById('coverPreview').setAttribute('src', e.target.result);
    };
    
    reader.readAsDataURL(file);
});