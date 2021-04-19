import React, { useState, useEffect, useRef, useCallback } from "react";
import "./VideoLesson.css";
import video from "./sample.mp4";
import { Link, useLocation } from "react-router-dom";
import arrow from "./img/arrow.png";
import down from "./img/down.png";
import moduleArray from "./moduleArr";
import FlipMove from "react-flip-move";
import BigPlay from "./img/redPlay.png";
import BigStop from "./img/bigButtonPause.png";
import thumbnailHover from "./img/thumbnailHover.png";

function VideoLesson() {
  const [allmodule, setAllmodule] = useState([]);
  const [moduleLenth, setModuleLenth] = useState(0);
  const [lessonsLenth, setLessonsLenth] = useState(0);
  const [lessonClicked, setLessonCliked] = useState(false);
  const [lessons, setLessons] = useState(moduleArray[0].lessons);
  const [moduleState, setModuleState] = useState(moduleArray[0]);

  const [isModuleClicked, setIsModuleClicked] = useState(false);

  useEffect(() => {
    setAllmodule(moduleArray);
    console.log(allmodule);
    const moduleLenth = allmodule.length;
    const lessonsLenth = lessons.length;
    setModuleLenth(moduleLenth);
    setLessonsLenth(lessonsLenth);
  }, []);

  const toggle = (index, module) => {
    if (lessonClicked === index) {
      return setLessonCliked(null);
    }
    setLessonCliked(index);
    setModuleState(module);
    setLessons(module.lessons);
    setIsModuleClicked(false);
  };

  const videoPlayRef = useRef(null);
  const playPauseRef = useRef(null);
  const greybarRef = useRef(null);
  const draggerRef = useRef(null);
  const seekBar = useRef(null);
  const progressFillRef = useRef(null);

  const [currentTimeState, setCurrentTimeState] = useState("00:00");
  const [durationState, setDurationState] = useState("");
  const [isplayed, setIsplayed] = useState(true);

  const videoOnPlayHandler = () => {
    playPauseRef.current.className = "play";

    setIsplayed(true);
  };

  const videoOnPauseHandler = () => {
    playPauseRef.current.className = "pause";

    setIsplayed(false);
  };

  const togglePlayPause = () => {
    console.log(videoPlayRef);
    console.log(playPauseRef);
    console.log(greybarRef);
    if (videoPlayRef.current.paused) {
      videoPlayRef.current.play();
    } else {
      videoPlayRef.current.pause();
    }
  };

  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    seekBar.current.value = 0;
  }, []);

  const videoTimeUpdate = () => {
    const videoPosition =
      videoPlayRef.current.currentTime / videoPlayRef.current.duration;

    setCurrentPosition(videoPlayRef.current.currentTime);
    // console.log(currentPosition);

    if (videoPlayRef.current.ended) {
      playPauseRef.current.className = "play";
    }

    const currentTime = format(videoPlayRef.current.currentTime);
    setCurrentTimeState(currentTime);
    //input bar
    seekBar.current.value =
      (100 / videoPlayRef.current.duration) * videoPlayRef.current.currentTime;

    // progressFillRef.current.style.width = seekBar.current.value + "%";
    fillSeekWidth();
  };
  async function fillSeekWidth() {
    progressFillRef.current.style.width =
      (await (100 / videoPlayRef.current.duration)) *
        videoPlayRef.current.currentTime +
      "%";
  }

  function format(s) {
    let m = Math.floor(s / 60);
    m = m >= 10 ? m : "0" + m;
    s = Math.floor(s % 60);
    s = s >= 10 ? s : "0" + s;
    return m + ":" + s;
  }

  // Video Proces bar handler
  const loadMetaDataHandler = () => {
    const duration = videoPlayRef.current.duration;
    setDurationState(format(duration));
  };

  const rangeOnChangeHandle = (e) => {
    videoPlayRef.current.currentTime =
      (e.target.value / 100) * videoPlayRef.current.duration;
  };

  const onMouseDownhandler = () => {
    videoPlayRef.current.pause();

    playPauseRef.current.className = "play";
  };

  const onMouseUphandler = () => {
    videoPlayRef.current.play();
    playPauseRef.current.className = "pause";
  };

  //Volume Control
  const volumeBarRef = useRef(null);

  const [showVolume, setShowVolume] = useState(false);
  const [volumeDependency, seVD] = useState("");

  const volumeOnChangeHandle = (e) => {
    videoPlayRef.current.volume = e.target.value / 100;
    seVD(e.target.value);
    // volumeBarRef.current.value = videoPlayRef.current.volume * 100;
    console.log("VL", e.target.value);
  };

  //full screen

  const openFullscreen = () => {
    if (videoPlayRef.current.requestFullscreen) {
      videoPlayRef.current.requestFullscreen();
    } else if (videoPlayRef.current.webkitRequestFullscreen) {
      /* Safari */
      videoPlayRef.current.webkitRequestFullscreen();
    } else if (videoPlayRef.current.msRequestFullscreen) {
      /* IE11 */
      videoPlayRef.current.msRequestFullscreen();
    }
  };

  //Change Quality
  const [showQuality, setShowQuality] = useState(false);

  //Big Button
  const [showBigButton, setShowBigButton] = useState(true);

  const bigButtonClickHandler = () => {
    setIsplayed(!isplayed);

    if (videoPlayRef.current.paused) {
      // playPauseRef.current.className = "pause";
      videoPlayRef.current.play();
      setIsplayed(false);
    } else {
      // playPauseRef.current.className = "play";
      videoPlayRef.current.pause();
      setIsplayed(true);
    }
  };

  console.log("Here", seekBar);

  //hover progress bar
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [seekBarHoverWidth, setSeekBarHoverWidth] = useState("");
  const processHoverRef = useRef(null);

  return (
    <div className="videoPlayerWrapper">
      <div className="view">
        <div class="grid-container">
          <div className="video__header">
            {/* <div className="video__header"> */}
            <ul className="video__headerContent">
              <li>
                <Link>
                  <img src={arrow} alt="arrow" />
                  Назад
                </Link>
              </li>
              <li className="red_hightlight">
                <Link>Создание и продивжение бренда работадателя</Link>
              </li>
            </ul>
            {/* </div> */}
          </div>
          <div className="video__playerWrap">
            <div className="video__container">
              <video
                ref={videoPlayRef}
                className="video__player"
                src={video}
                onTimeUpdate={videoTimeUpdate}
                onLoadedMetadata={loadMetaDataHandler}
                onPause={videoOnPlayHandler}
                onPlay={videoOnPauseHandler}
              ></video>

              <div className="overlay">
                {/* Big Button */}

                <div className="bigButtonContainer">
                  <div
                    className="bigButtonWrapper"
                    onClick={bigButtonClickHandler}
                  >
                    {isplayed ? (
                      <img src={BigPlay} alt="bigplay" />
                    ) : (
                      <img src={BigStop} />
                    )}
                  </div>
                </div>

                {/* Volume */}
                <div
                  className="volume__container"
                  onMouseLeave={() => {
                    setShowVolume(false);
                  }}
                  onMouseEnter={() => {
                    setShowVolume(true);
                  }}
                >
                  {showVolume && (
                    <div className="volumeWrapper">
                      <input
                        type="range"
                        ref={volumeBarRef}
                        className="volume__range"
                        value={volumeDependency}
                        onChange={volumeOnChangeHandle}
                      />
                    </div>
                  )}
                </div>

                {/* Quality */}
                {showQuality && (
                  <div className="quality__conatainer">
                    <div className="qualityWrapper">
                      <ul>
                        <li>
                          <p
                            className="currentQuality"
                            onClick={() => {
                              setShowQuality(false);
                            }}
                          >
                            1080p
                          </p>
                        </li>
                        <li>
                          <p>720p</p>
                        </li>
                        <li>
                          <p>360p</p>
                        </li>
                        <li>
                          <p>240p</p>
                        </li>
                        <li>
                          <p>144p</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Video Controlls */}
                <div className="video__controlls">
                  <div className="controlls__volume">
                    <button
                      id="volume"
                      onMouseOut={() => {
                        setShowVolume(false);
                      }}
                      onMouseOver={() => {
                        setShowVolume(true);
                      }}
                    ></button>
                  </div>
                  <div className="controlls__playPause">
                    <button
                      ref={playPauseRef}
                      id="play-pause"
                      onClick={() => {
                        togglePlayPause();
                      }}
                    ></button>
                  </div>
                  <div className="duration">
                    <p>
                      {currentTimeState} / {durationState}
                    </p>
                  </div>

                  <div
                    className="duration__process"
                    // onMouseMove={(e) => {
                    //   setCursorPos({ x: e.screenX, y: e.screenY });
                    //   console.log("Cure sda", cursorPos);
                    // }}
                  >
                    <input
                      type="range"
                      ref={seekBar}
                      onChange={rangeOnChangeHandle}
                      onMouseDown={onMouseDownhandler}
                      onMouseUp={onMouseUphandler}
                      // value="40"
                      onMouseMove={(e) => {
                        setCursorPos({ x: e.clientX, y: e.clientY });
                        console.log("Cure sda", cursorPos);
                        var res = 0;
                        res = e.clientX - 670;
                        var hoverPer = (res / (1130 - 670)) * 100;
                        // console.log(hoverPer);
                        setSeekBarHoverWidth(hoverPer + "%");
                        processHoverRef.current.style.width = seekBarHoverWidth;
                      }}
                      className="duration__processBar"
                    />

                    <div className="processList">
                      <div id="progressFill" ref={progressFillRef}></div>
                      <div id="processLoad"></div>
                      <div id="processHover" ref={processHoverRef}>
                        <img src={thumbnailHover} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="video__quality">
                    <button
                      id="quality"
                      onClick={() => {
                        setShowQuality(true);
                      }}
                    ></button>
                  </div>
                  <div className="video__fullscreen">
                    <button id="fullscreen" onClick={openFullscreen}></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item3">
            <div className="video_sidebar__container">
              <div className="sidebox__wrapper">
                <div
                  className="sideBox top"
                  onClick={() => {
                    setIsModuleClicked(!isModuleClicked);
                  }}
                >
                  <div className="sideBox__content">
                    <h2>{moduleState.name}</h2>
                    <p>{moduleState.title}</p>
                  </div>
                  <img src={down} alt="down" />
                </div>

                <div className="sideContent__wrapper" id="scroll-1">
                  {isModuleClicked ? (
                    <>
                      {allmodule.map((module, index) => (
                        <div
                          key={index}
                          onClick={() => toggle(index, module)}
                          className={`sideBox ${index === 0 ? "start" : ""} ${
                            moduleLenth === index + 1 ? "end" : ""
                          }`}
                        >
                          <div className="sideBox__content">
                            <h2>{module.name}</h2>
                            <p>{module.title}</p>
                          </div>

                          <span
                            className={`circle ${
                              module.id === moduleState.id
                                ? "module__status"
                                : ""
                            }`}
                          ></span>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="sideVideoContainer">
                      {lessons.map((lesson, index) => (
                        <div
                          key={index}
                          className={`sideVideoBox ${
                            index === 0 ? "start" : ""
                          }${lessonsLenth === index + 1 ? "end" : ""}`}
                        >
                          <div className="sideVideoBox__content">
                            <img src={lesson.thumbnail} alt="lessons" />
                            <h2>
                              <span>2.1 </span> {lesson.lessonName}
                            </h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="descriptionContent">
              <h1>2.2 Двойная экспозиция</h1>
              <h3>
                UX/UI дизайнер решает задачи поль зователей и бизнеса:
                разрабатывает внешний облик сайтов и мобильных приложений,
                проектирует пользовательский опыт и анализирует целевую
                аудиторию. Он делает цифровые продукты полезными и удобными. Мы
                научим вас работать с Figma и другими инструментами
                дизайн-процесса.я
              </h3>
              <h2>Ссылки к уроку:</h2>

              <a href="https://www.figma.com/file/U39nrWH3ZGh5MtQEWnpFKR/%D0%9A%D1%83%D1%80%D1%81%D0%BE%D0%B2%D0%BE%D0%B9-%D1%81%D0%B0%D0%B9%D1%82?node-id=218%3A665">
                https://www.figma.com/file/U39nrWH3ZGh5MtQEWnpFKR/%D0%9A%D1%83%D1%80%D1%81%D0%BE%D0%B2%D0%BE%D0%B9-%D1%81%D0%B0%D0%B9%D1%82?node-id=218%3A665
              </a>
            </div>
          </div>
        </div>
      </div>
      <script src="./videoScript.js"></script>
    </div>
  );
}

export default VideoLesson;
