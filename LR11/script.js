$(document).ready(function() {
    var words = [
      { foreign: 'Challenge', translation: 'Виклик' },
      { foreign: 'Decision', translation: 'Рішення' },
      { foreign: 'Quality', translation: 'Якість' },
      { foreign: 'Experience', translation: 'Досвід' },
      { foreign: 'Language', translation: 'Мова' },
      { foreign: 'Team', translation: 'Команда' },
      { foreign: 'Skip', translation: 'Пропустити' },
      { foreign: 'Dance', translation: 'Танцювати' },
      { foreign: 'Work', translation: 'Працювати' },
      { foreign: 'Fish', translation: 'Риба' },
      { foreign: 'Plane', translation: 'Літак' },
      { foreign: 'Water', translation: 'Вода' },
      { foreign: 'Room', translation: 'Кімната' },
      { foreign: 'Steal', translation: 'Красти' },
      { foreign: 'Fall', translation: 'Падати' },
      { foreign: 'Basic', translation: 'Основний' },
      { foreign: 'Motivation', translation: 'Мотивація' },
      { foreign: 'Charge', translation: 'Заряджати' },
      { foreign: 'Careful', translation: 'Обережний' },
      { foreign: 'Exercise', translation: 'Вправа' }
    ];
  
    var currentStep = 0;
    var correctCount = 0;
    var incorrectCount = 0;
  
    function getRandomWord() {
      return words[Math.floor(Math.random() * words.length)];
    }
  
    function displayWord() {
      var word = getRandomWord();
      $('.front p').text(word.foreign);
      $('.back input').val('');
    }
  
    function updateProgress() {
      $('.current-step').text(currentStep);
      $('.correct-count').text(correctCount);
      $('.incorrect-count').text(incorrectCount);
    }
  
    function showModal(level) {
      $('.level').text(level);
      $('.modal').css('display', 'block');
    }
  
    $('.check-btn').click(function() {
        var userInput = $('.back input').val().trim().toLowerCase();
        var currentWord = $('.front p').text().trim().toLowerCase();
        var currentTranslation = words.find(word => word.foreign.toLowerCase() === currentWord);
    
        console.log('User input:', userInput);
        console.log('Current word:', currentTranslation.translation.toLowerCase());
    
        if (userInput === currentTranslation.translation.toLowerCase()) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    
        currentStep++;
        updateProgress();
    
        if (currentStep < 10) {
            displayWord();
        } else {
            var level = ''; // Calculate the level based on correctCount, incorrectCount, etc.
            if (correctCount < 5) {
                level = 'A2';
            } else if (correctCount < 8) {
                level = 'B1';
            } else if (correctCount > 8) {
                level = 'C1';
            }
            showModal(level);
            $('.check-btn').prop('disabled', true); // Заблокувати кнопку "перевірити"
            $('.refresh-btn').show(); // Показати кнопку оновлення
        }
    });
  
    $('.refresh-btn').click(function() {
        currentStep = 0;
        correctCount = 0;
        incorrectCount = 0;
        updateProgress();
        displayWord();
        $('.modal').css('display', 'none');
        $('.check-btn').prop('disabled', false); // Розблокувати кнопку "перевірити"
        $('.refresh-btn').hide(); // Сховати кнопку оновлення
    });

    $('.close-btn').click(function() {
      $('.modal').css('display', 'none');
    });
  
    displayWord();
});