$(document).ready(function () {

    $("#btnReset").click(function () {
        document.getElementById('MyDocument').innerHTML = "";
    });

    $('#inputFile').change(function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                document.getElementById('MyDocument').innerHTML = this.result;
            });
            reader.readAsText(file);
        }
    });

    $("#btnNom").click(function () {
        $("#nom").html('O-Sfh');
    });
    $("#btnPrenom").click(function () {
        $("#prenom").html('Hicham');
    });
    $("#btnInfo").click(function () {
        $("#info").html('Développeur');
    });
});