export const speakWord = (text, lang = 'ja-JP') => {
  if (!('speechSynthesis' in window)) {
    alert('Text-to-speech is not supported in your browser.');
    return;
  }

  window.speechSynthesis.cancel(); // আগের কোনো সাউন্ড চললে তা বন্ধ করবে
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang; // Japanese Voice Pack
  utterance.rate = 0.8;  // উচ্চারণের গতি কিছুটা ধীর করা হয়েছে

  window.speechSynthesis.speak(utterance);
};