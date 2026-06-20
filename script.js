(function () {
  "use strict";

  const scenes = new Map(window.storyData.map((scene) => [scene.id, scene]));
  const startId = "01-start";
  const historyStack = [];
  const audioPlayer = new Audio();

  let currentScene = scenes.get(startId);
  let sceneVersion = 0;

  const sceneCard = document.getElementById("sceneCard");
  const sceneTitle = document.getElementById("sceneTitle");
  const sceneText = document.getElementById("sceneText");
  const sceneImage = document.getElementById("sceneImage");
  const imagePlaceholder = document.getElementById("imagePlaceholder");
  const imagePath = document.getElementById("imagePath");
  const audioButton = document.getElementById("audioButton");
  const audioNote = document.getElementById("audioNote");
  const choicesContainer = document.getElementById("choices");
  const homeButton = document.getElementById("homeButton");
  const backButton = document.getElementById("backButton");

  function stopAudio() {
    audioPlayer.pause();
    audioPlayer.removeAttribute("src");
    audioPlayer.load();
    audioButton.classList.remove("is-playing");
    audioButton.textContent = "🔊 Text anhören";
  }

  function showScene(sceneId, rememberPrevious) {
    const nextScene = scenes.get(sceneId);

    if (!nextScene) {
      showAudioNote(`Diese Szene ist noch nicht angelegt: ${sceneId}`);
      return;
    }

    if (rememberPrevious && currentScene) {
      historyStack.push(currentScene.id);
    }

    currentScene = nextScene;
    sceneVersion += 1;
    stopAudio();
    renderScene(sceneVersion);
  }

  function renderScene(version) {
    sceneCard.classList.remove("is-changing");
    void sceneCard.offsetWidth;
    sceneCard.classList.add("is-changing");

    sceneTitle.textContent = currentScene.title;
    sceneText.textContent = currentScene.text || "";
    backButton.disabled = historyStack.length === 0;

    renderImage();
    renderAudio(version);
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

  async function renderAudio(version) {
    audioButton.disabled = true;
    audioButton.hidden = false;
    audioButton.textContent = "🔊 Text anhören";
    hideAudioNote();

    if (!currentScene.audio) {
      audioButton.hidden = true;
      return;
    }

    const available = await audioExists(currentScene.audio);

    if (version !== sceneVersion) {
      return;
    }

    audioButton.disabled = !available;

    if (!available) {
      audioButton.textContent = "🔇 Audio fehlt";
      showAudioNote("Die Audiodatei wird später ergänzt.");
    }
  }

  async function audioExists(path) {
    try {
      const response = await fetch(path, { method: "HEAD", cache: "no-store" });
      return response.ok;
    } catch (error) {
      return false;
    }
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

      if (choice.label.toLowerCase().includes("sturm") || choice.label.toLowerCase().includes("liegen lassen")) {
        button.classList.add("is-warning");
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

  function showAudioNote(message) {
    audioNote.hidden = false;
    audioNote.textContent = message;
  }

  function hideAudioNote() {
    audioNote.hidden = true;
    audioNote.textContent = "";
  }

  audioButton.addEventListener("click", async () => {
    if (!currentScene.audio || audioButton.disabled) {
      return;
    }

    stopAudio();
    hideAudioNote();
    audioPlayer.src = currentScene.audio;

    try {
      await audioPlayer.play();
      audioButton.classList.add("is-playing");
      audioButton.textContent = "⏸ Ton läuft";
    } catch (error) {
      audioButton.disabled = true;
      audioButton.textContent = "🔇 Audio fehlt";
      showAudioNote("Diese Audiodatei kann noch nicht abgespielt werden.");
    }
  });

  audioPlayer.addEventListener("ended", () => {
    audioButton.classList.remove("is-playing");
    audioButton.textContent = "🔊 Text anhören";
  });

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

  if (!currentScene) {
    document.body.textContent = "Die Startszene wurde nicht gefunden.";
    return;
  }

  renderScene(sceneVersion);
})();
