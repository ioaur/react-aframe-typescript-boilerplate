import * as React from "react";
import Loader from "../components/Loader/Loader";
import TopMenu from "../components/Menu/Buttons";

export class Viewer extends React.Component<{}, { isPlaying: boolean }> {
  playVideoDelay = 2000;

  public refs: {
    videoEntity: AFrame.Entity;
    assets: AFrame.Entity;
    loader: Loader;
    loader2: Loader;
  };

  public componentDidMount() {
    this.refs.loader2 && this.refs.loader2.hide();
    this.refs.assets &&
      this.refs.assets.addEventListener("loaded", (_) => {
        setTimeout((_) => this.refs.loader.hide(), this.playVideoDelay);
      });
  }

  private playVideo = () => {
    this.refs.videoEntity.play();
    setTimeout((_) => {
      this.playVideoDelay = 0;
    }, this.playVideoDelay);
  };

  private pauseVideo = () => {
    this.refs.videoEntity.pause();
  };

  public render() {
    return (
      <div>
        <Loader ref="loader">Loading</Loader>

        <Loader ref="loader2">Preparing 360 Video</Loader>

        <TopMenu>
          <a onClick={this.playVideo} className="top-menu-item ">
            Play
          </a>
          <a onClick={this.pauseVideo} className="top-menu-item player-btn">
            Pause
          </a>
        </TopMenu>

        <a-scene>
          <a-assets ref="assets">
            <video
              id="videoEntity"
              ref="videoEntity"
              src="video/test.mp4"
              preload="auto"
            />
          </a-assets>
          <a-camera reverse-mouse-drag="true" />
          <a-videosphere src="#videoEntity" rotation="0 -90 0" />
        </a-scene>
      </div>
    );
  }
}
