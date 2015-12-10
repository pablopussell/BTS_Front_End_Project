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
             //add event-handlers to control the video element
             bgvid.addEventListener("ended", endPlayback, false);
             // enable and disable the controls buttons to reflect the player state
             bgvid.addEventListener("play",function() {
                 document.getElementById("start").disabled=true;
                 document.getElementById("pause").disabled=false;
                 document.getElementById("stop").disabled=false;
              }, false);
             bgvid.addEventListener("pause", function() {
                 document.getElementById("start").disabled=false;
                 document.getElementById("pause").disabled=true;
                 document.getElementById("stop").disabled=false;
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
        document.getElementById("start").disabled=true;
        document.getElementById("pause").disabled=false;
        document.getElementById("stop").disabled=false;
        document.getElementById("bgvid").currentTime=0;
        document.getElementById("bgvid").play();
        $("bts-logo-div").fadeOut(3000);
        $("#bgvid").fadeIn(3000);
       }

       // if pause button is pushed, the media play is paused
       function pausePlayback() {
        document.getElementById("bgvid").pause();
       }

       //if stop button is pushed, the media play stops and the current play time is reset to 0
       function stopPlayback() {
          endPlayback();
       }  

   // when the media play is finished or stopped
   function endPlayback() {
          // reset the state of buttons
          document.getElementById("start").disabled=false;
          document.getElementById("pause").disabled=true;
          document.getElementById("stop").disabled=true;
          $("#bgvid").fadeOut(3000);
          $("bts-logo-div").fadeIn(3000);
       }
