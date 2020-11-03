const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyAnswers = {};

rl.question('HEY HEY WHO ARE YOU??', (answer) => { 
  console.log(`OH WOW OH WOW I'VE NEVER MET A ${answer.toUpperCase()} BEFORE`);
  surveyAnswers.name = answer;  

  rl.question(`HEY ${surveyAnswers.name.toUpperCase()} I LIKE RUNNING AND SLEEPING. WHAT DO YOU LIKE TO DO?`, (answer) => {
    console.log(`OMG I WOULD ${answer.toUpperCase()} TOO IF I HAD THUMBS`);
    surveyAnswers.activity = answer;
    
    rl.question(`HEY MY NEW BEST FRIEND ${surveyAnswers.name.toUpperCase()} I LIKE TO BARK WHEN I RUN AROUND IT MAKES ME HAPPY. WHAT SOUNDS DO YOU LIKE TO HEAR WHILE YOU ARE ${surveyAnswers.activity.toUpperCase()}`, (answer) => {
      console.log(`OK IF YOU EVER GET SICK OF LISTENING TO ${answer.toUpperCase()} HERE IS A LINK TO MY BARKCLOUD`);
      surveyAnswers.music = answer;
      
      rl.question(`${surveyAnswers.name.toUpperCase()} I LIKE TO EAT ALL THE TIME BUT ESPECIALLY MY BREAKFAST AND ESPECIALLY ESPECIALLY MY DINNER AND ESPECIALLY ESPECIALLY ESPECIALLY LUNCH!!! WHEN DO YOU LIKE TO EAT MOST?`, (answer) => {
        console.log(`ME TOOOOOOOOO OH MY GOD WE ARE BEST FRIENDS`);
        surveyAnswers.meal = answer;
        
        rl.question(`DID YOU KNOW THAT MY FAVOURITE FOOD IS GOOSE POO ${surveyAnswers.name.toUpperCase()}? IT IS SO TASTY. WHEN YOU EAT ${surveyAnswers.meal.toUpperCase()} WHAT IS YOUR ABSOLUTELY FAVORITE THING TO EAT?`, (answer) => {
          console.log(`OH MY DOG WHEN YOU ARE FINISHED WITH THE ${answer.toUpperCase()} CAN I PLEASE LICK THE PLATE?`);
          surveyAnswers.food = answer;
          
          rl.question(`I LIKE TO PLAY BALL AND PLAY CHASE AND SWIM. DO YOU HAVE A FAVOURITE SPORT?`, (answer) => {
            console.log(`OH WOW I WOULD LOVE TO PLAY ${answer.toUpperCase()} WITH YOU`);
            surveyAnswers.sport = answer;
            
            rl.question(`I AM REALLY GOOD AT CATCHING MY TAIL AND JUMPING ON THE COUCH. WHAT ARE YOU REALLY GOOD AT ${surveyAnswers.name.toUpperCase()}?`, (answer) => {
              console.log(`WOW ${surveyAnswers.name.toUpperCase()} YOU REALLY ARE GOOD AT ${answer.toUpperCase()}!!`);
              surveyAnswers.superpower = answer;
              
              rl.close();
              console.log(`THIS IS MY NEW BEST FRIEND ${surveyAnswers.name.toUpperCase()}. THEY LIKE TO ${surveyAnswers.activity.toUpperCase()} WHILE LISTENING TO ${surveyAnswers.music.toUpperCase()}. ONE DAY THEY WILL TAKE ME TO ${surveyAnswers.meal.toUpperCase()} AND I WILL MAYBE GET SOME CRUMBS FROM THEIR ${surveyAnswers.food.toUpperCase()}. ${surveyAnswers.name.toUpperCase()} LOVES ${surveyAnswers.sport.toUpperCase()} AND IS REALLY REALLY GOOD AT ${surveyAnswers.superpower.toUpperCase()}`);
            });
          });
        });
      });
    });
  });
});


console.log(surveyAnswers);