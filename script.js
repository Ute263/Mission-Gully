(function () {
  "use strict";

  const startId = "01-start";
  const scenes = new Map(window.storyData.map((scene) => [scene.id, scene]));
  const historyStack = [];
  const canSpeak = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

  let currentScene = scenes.get(startId);
  let availableVoices = [];

  const introScreen = document.getElementById("introScreen");
  const appShell = document.getElementById("appShell");
  const startGameButton = document.getElementById("startGameButton");
  const sceneCard = document.getElementById("sceneCard");
  const sceneNumber = document.getElementById("sceneNumber");
  const sceneTitle = document.getElementById("sceneTitle");
  const endingBadge = document.getElementById("endingBadge");
  const sceneText = document.getElementById("sceneText");
  const infoBox = document.getElementById("infoBox");
  const infoText = document.getElementById("infoText");
  const sceneImage = document.getElementById("sceneImage");
  const imagePlaceholder = document.getElementById("imagePlaceholder");
  const imagePath = document.getElementById("imagePath");
  const readButton = document.getElementById("readButton");
  const infoReadButton = document.getElementById("infoReadButton");
  const stopButton = document.getElementById("stopButton");
  const readerMessage = document.getElementById("readerMessage");
  const choicesContainer = document.getElementById("choices");
  const homeButton = document.getElementById("homeButton");
  const backButton = document.getElementById("backButton");

  const preferredVoiceNames = [
    "anna",
    "markus",
    "katja",
    "petra",
    "yannick",
    "conrad",
    "stefan",
    "deutsch"
  ];

  const clearVoiceHints = [
    "premium",
    "enhanced",
    "neural",
    "natural",
    "online",
    "google",
    "microsoft"
  ];

  const roboticVoiceHints = [
    "compact",
    "eloquence",
    "siri",
    "shelley",
    "grandma",
    "grandpa",
    "eddy",
    "flo",
    "reed",
    "rocko",
    "sandy",
    "shelley"
  ];

  function loadVoices() {
    if (!canSpeak) {
      availableVoices = [];
      return;
    }

    availableVoices = window.speechSynthesis.getVoices();
  }

  function getBestGermanVoice() {
    if (!canSpeak) {
      return null;
    }

    loadVoices();

    const germanVoices = availableVoices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("de"));

    if (germanVoices.length === 0) {
      return null;
    }

    return germanVoices
      .map((voice) => ({ voice, score: getGermanVoiceScore(voice) }))
      .sort((a, b) => b.score - a.score)[0].voice;
  }

  function getGermanVoiceScore(voice) {
    const name = (voice.name || "").toLowerCase();
    const language = (voice.lang || "").toLowerCase();
    let score = 0;

    if (language === "de-de") {
      score += 40;
    } else if (language.startsWith("de")) {
      score += 24;
    }

    if (voice.localService) {
      score += 18;
    }

    preferredVoiceNames.forEach((hint, index) => {
      if (name.includes(hint)) {
        score += 40 - index * 3;
      }
    });

    clearVoiceHints.forEach((hint) => {
      if (name.includes(hint)) {
        score += 10;
      }
    });

    roboticVoiceHints.forEach((hint) => {
      if (name.includes(hint)) {
        score -= 35;
      }
    });

    return score;
  }

  function stopReading() {
    if (canSpeak) {
      window.speechSynthesis.cancel();
    }

    readButton.classList.remove("is-reading");
    infoReadButton.classList.remove("is-reading");
    readButton.textContent = "🔊 Text vorlesen";
    infoReadButton.textContent = "💡 Info vorlesen";
    stopButton.disabled = true;
  }

  function startReading(kind) {
    if (!canSpeak) {
      showReaderMessage("Auf diesem Gerät ist die Vorlesefunktion leider nicht verfügbar.");
      readButton.disabled = true;
      infoReadButton.disabled = true;
      stopButton.disabled = true;
      return;
    }

    const textToRead = kind === "info" ? currentScene.infoText : currentScene.text;
    const button = kind === "info" ? infoReadButton : readButton;

    if (!textToRead) {
      return;
    }

    stopReading();
    hideReaderMessage();

    const utterance = new SpeechSynthesisUtterance(textToRead);
    const voice = getBestGermanVoice();

    utterance.lang = "de-DE";
    utterance.rate = 0.88;
    utterance.pitch = 1;
    utterance.volume = 1;

    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = function () {
      button.classList.add("is-reading");
      button.textContent = kind === "info" ? "💡 Info läuft" : "🔊 Text läuft";
      stopButton.disabled = false;
    };

    utterance.onend = stopReading;
    utterance.onerror = function () {
      stopReading();
      showReaderMessage("Das Vorlesen wurde gestoppt.");
    };

    window.speechSynthesis.speak(utterance);
  }

  function showScene(sceneId, rememberPrevious) {
    const nextScene = scenes.get(sceneId);

    if (!nextScene) {
      console.warn(`Szene nicht gefunden: ${sceneId}`);
      return;
    }

    if (rememberPrevious && currentScene) {
      historyStack.push(currentScene.id);
    }

    currentScene = nextScene;
    stopReading();
    renderScene();
  }

  function startGame() {
    stopReading();
    historyStack.length = 0;
    introScreen.hidden = true;
    appShell.hidden = false;
    showScene(startId, false);
    sceneCard.focus({ preventScroll: true });
  }

  function renderScene() {
    sceneCard.classList.remove("is-changing");
    void sceneCard.offsetWidth;
    sceneCard.classList.add("is-changing");
    sceneCard.dataset.tone = getSceneTone(currentScene);
    sceneCard.dataset.ending = currentScene.ending || "";

    sceneNumber.textContent = currentScene.id.slice(0, 2);
    sceneTitle.textContent = currentScene.title;
    sceneText.textContent = currentScene.text || "";
    renderEndingBadge();
    renderInfo();
    backButton.disabled = historyStack.length === 0;

    renderImage();
    renderReaderControls();
    renderChoices();
  }

  function renderImage() {
    sceneImage.hidden = false;
    imagePlaceholder.hidden = true;
    imagePath.textContent = currentScene.image;
    sceneImage.alt = currentScene.title;

    sceneImage.onload = function () {
      sceneImage.hidden = false;
      imagePlaceholder.hidden = true;
    };

    sceneImage.onerror = function () {
      sceneImage.hidden = true;
      imagePlaceholder.hidden = false;
    };

    sceneImage.src = currentScene.image;
  }

  function renderReaderControls() {
    readButton.disabled = !canSpeak;
    infoReadButton.hidden = !currentScene.infoText;
    infoReadButton.disabled = !canSpeak || !currentScene.infoText;
    stopButton.disabled = true;

    if (!canSpeak) {
      showReaderMessage("Auf diesem Gerät ist die Vorlesefunktion leider nicht verfügbar.");
    } else {
      hideReaderMessage();
    }
  }

  function renderInfo() {
    if (currentScene.infoText) {
      infoBox.hidden = false;
      infoText.textContent = currentScene.infoText;
    } else {
      infoBox.hidden = true;
      infoText.textContent = "";
    }
  }

  function renderEndingBadge() {
    const ending = currentScene.ending;

    if (!ending) {
      endingBadge.hidden = true;
      endingBadge.textContent = "";
      endingBadge.dataset.ending = "";
      return;
    }

    const labels = {
      good: "✓ Gutes Ende",
      warning: "! Nachdenkliches Ende",
      neutral: "Mission beendet"
    };

    endingBadge.hidden = false;
    endingBadge.dataset.ending = ending;
    endingBadge.textContent = labels[ending] || labels.neutral;
  }

  function renderChoices() {
    choicesContainer.replaceChildren();

    currentScene.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = choice.label;

      if (choice.target === startId) {
        button.classList.add("is-home");
      }

      button.addEventListener("click", () => {
        if (choice.target === startId) {
          historyStack.length = 0;
          showScene(startId, false);
          return;
        }

        showScene(choice.target, true);
      });

      choicesContainer.append(button);
    });
  }

  function getSceneTone(scene) {
    const id = scene.id;

    if (id.includes("mikroplastik") || id.includes("muellteppich") || id.includes("negativ") || id.includes("sturm") || id.includes("flut")) {
      return "warning";
    }

    if (id.includes("ende") || id.includes("gut") || id.includes("aufheben") || id.includes("gefunden") || id.includes("positiv")) {
      return "good";
    }

    return "adventure";
  }

  function showReaderMessage(message) {
    readerMessage.hidden = false;
    readerMessage.textContent = message;
  }

  function hideReaderMessage() {
    readerMessage.hidden = true;
    readerMessage.textContent = "";
  }

  readButton.addEventListener("click", () => startReading("text"));
  infoReadButton.addEventListener("click", () => startReading("info"));
  stopButton.addEventListener("click", stopReading);
  startGameButton.addEventListener("click", startGame);

  homeButton.addEventListener("click", () => {
    historyStack.length = 0;
    showScene(startId, false);
  });

  backButton.addEventListener("click", () => {
    const previousSceneId = historyStack.pop();

    if (previousSceneId) {
      showScene(previousSceneId, false);
    }
  });

  if (canSpeak) {
    loadVoices();

    if ("onvoiceschanged" in window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  if (!currentScene) {
    document.body.textContent = "Die Startszene wurde nicht gefunden.";
    return;
  }

  renderScene();
})();
