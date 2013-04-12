getUrlParameter = function(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
};

setFrameContent = function() {
  var filePath = getUrlParameter('filepath');
  var frameSource = CONTEXT_PATH + "api/repos/" + filePath;

  console.log("set the iframe source to " + frameSource);

  $('#contentFrame').attr('src', frameSource);
};


