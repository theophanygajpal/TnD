const questionsAndDares = {
  better: {
    truths: [
      "What’s your favorite childhood memory?",
      "What’s a dream you want to achieve in the future?",
      "Who has influenced you the most in your life?",
      "What qualities do you look for in your partner?",
      "Would you rather go out on a date or watch a movie at home?",
      "Do you like mountains more or beaches?",
      "Tea or coffee?",
      "Do you like to be outspoken about relationships or keep it private, and why?",
      "Would you go for your parents' choice when it comes to marriage or take a stand for your relationship?",
      "What do you think are bare minimum efforts in any relationship?",
      "What are some traits you wish never to face if you date someone?",
      "What are your biggest turn-offs in any person?",
      "One thing you are afraid to tell anyone?",
      "What is your biggest insecurity?",
      "Do you think jealousy is toxic?",
      "What are some traits you find toxic in a potential partner?",
      "What does intimacy mean to you?",
      "Do you want to have kids?",
      "What is a successful relationship in your perspective?",
      "What is your biggest fear in life?",
      "What are your expectations for our future together?",
      "How do you feel about the direction our relationship is heading?",
      "What is one thing you would like to see us improve on together?",
      "What is your favorite thing about our relationship?",
      "What is one thing you wish you could change about your past?",
      "What is a personal accomplishment you are most proud of?",
      "Do you feel loved and appreciated in our relationship?",
      "Do you see yourself getting married one day?",
      "What’s the last movie that made you cry?",
      "What’s the craziest conversation you’ve ever overheard in public?",
      "What’s your favorite song?",
      "Do you remember what I wore on our first date?",
      "What color should I wear more?",
      "What’s your favorite cuddle position?",
      "What did you like most about me when we first met?",
      "What do you like most about me now?",
      "What gives you butterflies?",
      "What’s your favorite way to be greeted by me?",
      "How many times did you want to ask me out before you did?",
      "Do you think about me during the day?",
      "If I was sad, how would you make me feel better?",
      "When you are sad, what do you wish I would do?",
      "How do I make you feel when we hang out with my friends?",
      "Do you get jealous?",
      "How would you define falling in love?",
      "When did you know you were in love with me?",
      "What is your love language?",
      "Do you like being surprised by random gifts?",
      "Would you like to receive flowers?",
      "What does your ideal date night look like?",
      "What do you think about public proposals?",
      "Do you see yourself proposing to someone else or being proposed to?",
      "Do I show up in your dreams?"
    ],
    dares: [
      "Hug your partner for 10 seconds.",
      "Stare into your partner’s eyes for a full minute.",
      "Share one of your favorite memories together.",
      "Hold your partner's hand for the rest of the game.",
      "Look into each other’s eyes and slowly get closer but try not to kiss.",
      "Lift your partner up.",
      "Jokingly propose to your partner in the most dramatic way.",
      "Give your partner a foot massage.",
      "Give your partner a shoulder massage.",
      "Hug your partner for 2 minutes.",
      "Kiss your favorite part of your partner's body.",
      "Whisper something in your partner’s ear.",
      "Sit beside your partner as closely as possible for the rest of the game.",
      "Sing a song for your partner.",
      "Let your partner tickle you for 20 seconds.",
      "Make a commercial for a random object.",
      "Kiss your partner’s cheek.",
      "Kiss your partner’s hand."
    ],
  },
  spicy: {
    truths: [
      "What’s your biggest turn-on?",
      "What’s a fantasy you’ve never shared before?",
      "Where do you love being kissed the most?",
      "How do you imagine us in a room alone?",
    ],
    dares: [
      "Kiss your partner passionately for 30 seconds.",
      "Sit on your partner’s lap and whisper something seductive.",
      "Take off an accessory or piece of clothing without using your hands.",
    ],
  },
};

document.getElementById("start-button").addEventListener("click", function() {
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("mode-screen").classList.remove("hidden");
});

document.querySelectorAll(".mode-button").forEach(button => {
  button.addEventListener("click", function() {
    const mode = this.getAttribute("data-mode");
    startGame(mode);
  });
});

document.getElementById("back-to-mode").addEventListener("click", function() {
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("mode-screen").classList.remove("hidden");
});

function startGame(mode) {
  document.getElementById("mode-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("game-title").textContent = mode === "better" ? "We Want to Know Each Other Better" : "We Want to Spice Things Up";

  const currentQuestions = questionsAndDares[mode].truths;
  const currentDares = questionsAndDares[mode].dares;

  document.getElementById("truth-button").addEventListener("click", function() {
    displayQuestion(currentQuestions);
  });

  document.getElementById("dare-button").addEventListener("click", function() {
    displayQuestion(currentDares);
  });
}

function displayQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  document.getElementById("game-question").textContent = questions[randomIndex];
}
