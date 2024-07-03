function updateCoverPhoto(event) {
    const coverPhotoContainer = document.getElementById('coverPhotoContainer');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        coverPhotoContainer.style.backgroundImage = `url(${e.target.result})`;
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

function updateProfilePhoto(event) {
    const profilePhotoContainer = document.getElementById('profilePhotoContainer').querySelector('img');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        profilePhotoContainer.src = e.target.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}
