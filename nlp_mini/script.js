const emotionsData = {
    fear: {
      plot: "fear_waveplot.png",
      audio: "fear_audio.wav",
      spectrogram: "fear_spectrogram.png"
    },
    angry: {
      plot: "angry_waveplot.png", // Corrected file extension
      audio: "angry_audio.wav",
      spectrogram: "angry_spectrogram.png"
    },
    happy: {
      plot: "happy_waveplot.png",
      audio: "happy_audio.wav",
      spectrogram: "happy_spectrogram.png"
    },
    ps: {
      plot: "ps_waveplot.png",
      audio: "ps_audio.wav",
      spectrogram: "ps_spectrogram.png"
    },
    sad: {
      plot: "sad_waveplot.png",
      audio: "sad_audio.wav",
      spectrogram: "sad_spectrogram.png"
    },
    neutral: {
      plot: "neutral_waveplot.png",
      audio: "neutral_audio.wav",
      spectrogram: "neutral_spectrogram.png"
    },
    disgust: {
      plot: "disgust_waveplot.png",
      audio: "disgust_audio.wav",
      spectrogram: "disgust_spectrogram.png"
    }
  };
  
  const spectrogramImg = document.getElementById('spectrogram-img');
  const waveplotImg = document.getElementById('waveplot-img');
  const emotionAudio = document.getElementById('emotion-audio');
  const emotionButtons = document.querySelectorAll('.emotions-container button');
  
  emotionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const emotion = this.id.slice(0, -4);
      const emotionData = emotionsData[emotion];
  
      spectrogramImg.src = emotionData.spectrogram;
      waveplotImg.src = emotionData.plot;
      emotionAudio.src = emotionData.audio;
      emotionAudio.load();
      emotionAudio.play();
    });
  });
  