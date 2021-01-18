//Note that these function all out an animal is an interim only. 
//I want to check whether the functions get called correctly before potentially putting effort into the implementation in vain 


//Global variable declaring the divContainer encompassing the Player
//Assumption: I am supposed to work with such a container, since there is the function setContainer with divId as an arguement
declare global {
    var divContainer: string;
}


//function to initiate the player, that has no media, yet
//assumption: there is at least one videoElement in each specified Container, the media will be played in the first
export function createPlayer() {
    var divBlock = document.getElementById(divContainer);
    var player:HTMLVideoElement = divBlock.getElementsByTagName("video")[0];
    player.id = "dashjs-player";
    player.controls=true;
}

//setting the global variable = Variable of the Container encompassing the Player
export function setContainer(divId:String) {
    this.divContainer=divId;
}

//Opens a new video by rephrasing the innerHTML of the divContainer
export function open(videoUrl:string) {
    
    var divBracket = document.getElementById(divContainer);
    
    if(divBracket!=null){
        divBracket.innerHTML = "";
        divBracket.innerHTML = "<video class='dashjs-player' autoplay preload='none' controls='true'><source src="+
        videoUrl+" type='application/dash+xml'/></video>";
    }
}

//Fetching Player and playing the included video
export function play(){
    let videoPlayer: HTMLVideoElement = document.getElementById("dashjs-player");
    videoPlayer.play(); 
}

//Fetching Player and pausing the included video
export function pause(){
    let videoPlayer: HTMLVideoElement = document.getElementById("dashjs-player");
    videoPlayer.pause(); 
}

//moving the parameter to the time specified in the arguement
export function seek(at:number) {
    let videoPlayer: HTMLVideoElement = document.getElementById("dashjs-player");
    videoPlayer.currentTime = at;
}

//Fetching Player and aborting playback of the included video
//By pausing it resetting it to 0 ammounts to about the same
export function stop() {
    let videoPlayer: HTMLVideoElement = document.getElementById("dashjs-player");
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

//Removing the included file from the videoPlayer
//By reseting the innerHTML to an ampty player
export function destroy() {
    
    var videoPlayer = document.getElementById(divContainer);
    
    if(videoPlayer!=null){
        videoPlayer.innerHTML = "<video class='dashjs-player' autoplay preload='none' controls='true'></video>";
    }
}
