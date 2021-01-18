//Note that these function all out an animal is an interim only. 
//I want to check whether the functions get called correctly before potentially putting effort into the implementation in vain 

//function to initiate the player, that has no media, yet
//assumption: there is at least one videoElement on the page, the media will be played in the first
export function createPlayer() {
    var player:HTMLVideoElement = document.getElementsByTagName("video")[0];
    player.autoplay = false;
    player.id = "dashjs-player";
    player.controls=true;
}

export function setContainer(divId:String) {
    console.log("Oxen "+divId);
}

export function open(videoUrl:String) {
    console.log("Tiger "+videoUrl);
}

export function play(){
    console.log("Rabbit");
}

export function pause(){
    console.log("Snake");
}

export function seek(at:number) {
    console.log("Horse "+at);
}

export function stop() {
    console.log("Goat");
}

export function destroy() {
    console.log("Chimpanzee");
}
