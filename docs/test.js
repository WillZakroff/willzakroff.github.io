
var urls = ['https://pub.orcid.org/v2.0_rc1/0000-0002-1024-5103/activities','https://pub.orcid.org/v2.0_rc1/0000-0003-0902-4386/activities'];

urls.forEach(function(currentElement) {
$.ajax({
    headers: {
        Accept: "application/json"
    },
    type: "GET",
    success: function (data) {
        if (data) {
            console.log(data);
        } 
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("fail");
    }
});
});
