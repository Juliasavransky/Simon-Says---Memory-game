import React, { useState, useEffect, Fragment, } from 'react';
import useSound from 'use-sound';
import './App.css';
import Score from './components/Score';
import PanelCenter from './components/PanelCenter';
import PanelBottomRight from './components/PanelBottomRight';
import PanelBottomLeft from './components/PanelBottomLeft';
import PanelTopLeft from './components/PanelTopLeft';
import PanelTpoRight from './components/PanelTpoRight';
import timeout from './utils/timeout';
import { useLocalStorageState } from './utils/localStorageHook';
import gameOver from './sounds/gameOver.wav';
import gameStart from './sounds/game-start.wav';
import gameSounds from './sounds/simonRGBY.mp3';


const App = () => {
  const [gameOn, setGameOn] = useState(false);  // whether the game is on/off
  const [stage, setStage] = useState("Start");  // the display text of the center

  const [simonPlays, setSimonPlays] = useState(false);  //turn true when Simon plays
  const [taskSequence, setTaskSequence] = useState([]); //array for random sequence of the game

  const [level, setLevel] = useState(0);  // taskSequence.lenght
  const [active, setActive] = useState(""); // the color which is flashing
  const [activeAll, setActiveAll] = useState(false);  // when all the colors are flashing when the game starts

  const [userPlays, setUserPlays] = useState(false);  //turn true when user plays
  const [userSequence, setUserSequence] = useState([]); //the sequence the user enters

  const [userlost, setUserLost] = useState(false);  //turn true when user loses

  const [currentScore, setcurrentScore] = useState(0);  //current game score
  const [lastScore, setlastScore] = useLocalStorageState("last-game", 0);  // local Storage custom Hook
  const [highest, setHighest] = useLocalStorageState("highest-score", 0);  //local Storage custom Hook



  const colors = ["blue", "red", "green", "yellow"];

  //playing the game start sound
  const [playGameStart] = useSound(gameStart, { volume: .4 });
  useEffect(() => {
    if (gameOn) {
      playGameStart();
    }
  }, [gameOn]);

  //playing the game over sound
  const [playGameOver] = useSound(gameOver, { volume: .4 });
  useEffect(() => {
    if (userlost) {
      playGameOver();
    }
  }, [userlost]);

  const [playGameSound] = useSound(gameSounds,
    {
      sprite: {
        red: [0, 500],
        blue: [1270, 400],
        green: [675, 455],
        yellow: [1900, 415]
      }
    }, { volume: .4 });

  const startHandle = () => {
    setGameOn(true);
  };

  async function activeAllColors() {
    if (gameOn) {
      setStage("Ready");
      setActiveAll(true);
      await timeout(800);
      setActiveAll(false);
      setcurrentScore(0)

    }
  };

  // finding the highest score 
  const highestScore = () => {
    if (currentScore > highest) {
      setHighest(currentScore)
    }

  }

  // starting the game
  useEffect(() => {
    if (gameOn) {
      activeAllColors();
      setSimonPlays(true);
      setLevel((taskSequence.length) + 1);
    }
  }, [gameOn]);

  //array of Simon's sequence
  useEffect(() => {
    if (gameOn && simonPlays) {
      let newColor = colors[Math.floor(Math.random() * 4)];

      const newTaskSequence = [...taskSequence, newColor];
      setTaskSequence(newTaskSequence);
    }
  }, [gameOn, simonPlays]);

  //flashing the colors
  useEffect(() => {
    if (gameOn && simonPlays && taskSequence.length) {
      flashingColors();
    }
  }, [gameOn && simonPlays && taskSequence.length]);


  async function flashingColors() {
    await timeout(1500);
    setStage("Simon Says");

    for (let i = 0; i < taskSequence.length; i++) {

      setActive(taskSequence[i]);
      playGameSound({ id: taskSequence[i] });
      await timeout(300);
      setActive("");
      await timeout(300);

      if (i === taskSequence.length - 1) {
        //copy the colors array for the user in reversed order
        const copyTaskSequence = [...taskSequence].reverse();

        setSimonPlays(false);
        await timeout(300);
        setUserPlays(true);
        setStage("Your turn");
        setUserSequence(copyTaskSequence);

      };
    }
  }

  //user's turn to play
  async function userTurn(userChoice) {
    if (!simonPlays && userPlays) {

      const copyUserSequence = [...userSequence];
      const lastColor = copyUserSequence.pop(); //cutting from the end
      setActive(userChoice);
      playGameSound({ id: userChoice });

      if (userChoice === lastColor) { //if the user succeeds

        if (copyUserSequence.length) {
          setUserSequence(copyUserSequence);

        } else {  //level up
          await timeout(1000);
          setStage("Simon Says");
          setSimonPlays(true);
          setLevel((taskSequence.length) + 1);
          setcurrentScore(level * 10)
          setUserPlays(false);
          setUserSequence([]);
        }

      } else {  // user loses 
        await timeout(500);
        setGameOn(false)
        setActive("");
        setUserPlays(false);
        setUserSequence([]);
        setTaskSequence([]);
        setUserLost(true);
        highestScore();
        setlastScore((level - 1) * 10);
        setLevel(0);
        setStage("I'm sorry");
        await timeout(2000);
        setStage("Game Over");
        await timeout(2000);
        setcurrentScore(0)
        setStage("Start");
        setUserLost(false);
      }

      await timeout(1000);
      setActive("");
    }
  }

  return (
    <Fragment >
      <div className="simonContainer">

        <PanelTopLeft
          userChoice={userTurn}
          active={activeAll || active === "blue"}
        />
        <PanelTpoRight
          userChoice={userTurn}
          active={activeAll || active === "red"}

        />
        <PanelBottomLeft
          userChoice={userTurn}
          active={activeAll || active === "yellow"}

        />
        <PanelBottomRight
          userChoice={userTurn}
          active={activeAll || active === "green"}

        />

        <PanelCenter
          startHandle={startHandle}
          stage={stage}
          level={level}
        />

      </div>
      <Score
        lastScore={lastScore}
        highest={highest}
        currentScore={currentScore}
      />
    </Fragment>
  );
}

export default App;
