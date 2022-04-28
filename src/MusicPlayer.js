import bai1 from "./music/1.mp3"
function MusicPlayer() {
  return (
    <div>
      <audio controls="controls">
        <source src={bai1} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
export default MusicPlayer;
