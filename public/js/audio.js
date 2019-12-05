const editor = document.querySelector('#editorContent');
editor.addEventListener('keydown', handleKeyDown);
editor.addEventListener('keyup', handleKeyUp);

function handleKeyDown(e){
  const key_down = new Audio('/public/audio/key_down.mp3');
  const return_sound = new Audio('/public/audio/return.mp3');
  key_down.play();
  if (e.keyCode === 13) {
    return_sound.pause();
    return_sound.currentTime = 0.
    return_sound.play();
  }
}

function handleKeyUp(e){
  const key_up = new Audio('/public/audio/key_up.mp3');
	key_up.play();
}
