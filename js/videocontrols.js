document.addEventListener("DOMContentLoaded", setupControl, false);
      function setupControl() { 
          // select the video element from page
          var bgvid = document.getElementById("bgvid");
          if (bgvid.canPlayType) {
            document.getElementById("bgvid").play();
             // remove the default buttons
             bgvid.removeAttribute("controls");
             // display the custom buttons and the progress bar
             document.getElementById("controls").style.display="block";
             /** add event-handlers to control the video element
             bgvid.addEventListener("timeupdate", reportProgress, false);
             bgvid.addEventListener("ended", endPlayback, false);**/
             // enable and disable the controls buttons to reflect the player state
             bgvid.addEventListener("play",function() {
                 document.getElementById("start").disabled=true;
                 document.getElementById("pause").disabled=false;
                 document.getElementById("stop").disabled=false;
              }, false);
             bgvid.addEventListener("pause", function() {
                 document.getElementById("start").disabled=false;
                 document.getElementById("pause").disabled=true;
                }, false);
           // add event-handlers for the control buttons
             document.getElementById("start").addEventListener("click",startPlayback,false);
             document.getElementById("stop").addEventListener("click",stopPlayback,false);
             document.getElementById("pause").addEventListener("click",pausePlayback,false);
         }
    }
  
  //define the event-handlers
       
       // if play button is pushed, the media starts playing
       function startPlayback() {
          document.getElementById("bgvid").play();
          document.getElementById("Nav").style.background="rgba(255,255,255,0.8)";
          document.getElementById("controls").style.background="rgba(255,255,255,0.8)";
       }
       // if pause button is pushed, the media play is paused
       function pausePlayback() {
          document.getElementById("bgvid").pause();
          document.getElementById("Nav").style.background="rgba(255,255,255,1)";
          document.getElementById("controls").style.background="rgba(255,255,255,1)";
       }
       //if stop button is pushed, the media play stops and the current play time is reset to 0
       function stopPlayback() {
          var bgvid = document.getElementById("bgvid");
          endPlayback();
       }  
  /**if the plus button is pushed, the sound volume is increased by 10%
  function volumeUp() {
      //get the current volume
     var bgvid = document.getElementById("bgvid");
     var volume = Math.floor(bgvid.volume * 10)/10;
     bgvid.muted = false;
     if(volume >= 0.9) bgvid.volume = 1;
     else bgvid.volume += 0.1;
  }  
  //if the minus button is pushed, the sound volume is decreased by 10%
  function volumeDown() {
    //get the current volume
    var bgvid = document.getElementById("bgvid");
    var volume = Math.floor(bgvid.volume * 10)/10;
    bgvid.muted = false;
    if(volume <= 0.1) bgvid.volume = 0;
    else bgvid.volume -= 0.1;
  }m
  
 //if the mute button is pushed, the player wilwill toggle between Mute and Unmute state
  function toggleMute() {
    var bgvid = document.getElementById("bgvid");
    var mute = document.getElementById("mute");
    if(bgvid.muted) {
    mute.innerHTML = "Mute";
    bgvid.muted = false;
   } else {
    mute.innerHTML= "Unmute";
    bgvid.muted = true;
   }
  }**/
   // when the media play is finished or stopped
   function endPlayback() {
          // reset the state of buttons
          document.getElementById("start").disabled=false;
          document.getElementById("pause").disabled=true;
          document.getElementById("stop").disabled=true;
          document.getElementById("Nav").style.background="rgba(255,255,255,1)";
          document.getElementById("controls").style.background="rgba(255,255,255,1)";
          $("#controls").hide();
          $("#bgvid").fadeOut("12000");
          $("bts-logo-div").fadeIn("12000");
       }
