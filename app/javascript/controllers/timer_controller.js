import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "title", "buttonLabel", "countDownTimer", "messageBox" ]
  countDownFrom = null
  countTimerHandle = null
  workDurationSec = 0.1 * 60
  shortBreakDurationSec = 0.5 * 60
  longBreakDurationSec = 0.30 * 60
  currentShortBreakActivty = null

  workInterval = 0
  currentIntervalType = null

  shortBreakActivities = [
    {
      break: 'short',
      title: 'Neck Stretch',
      description: 'While sitting tall or standing, place your right arm gently on the right side of your head, and place the other arm out to your side. Slowly pull your head towards your right shoulder until you can feel the stretch on the left side of your neck. Hold for about 30 seconds before releasing, and repeat for the opposite side. Many people tend to hold stress and tension in their neck and shoulders. If you find this is the case, this is one of the best static stretches to use for a muscle release in this area.',
      image: '/neck-stretch.jpg'
    },
    {
      break: 'short',
      title: 'Chest Stretch',
      description: 'Stand upright, with your fingers interlocked behind your back, near your buttocks. While keeping your shoulder blades together and your back straight, push your arms up behind you until you feel the stretch in your chest. Hold for about 20-30 seconds before releasing.',
      image: '/chest-stretch.jpg'
    },
    {
      break: 'short',
      title: 'Cross-Body Shoulder Stretch',
      description: 'Stand upright or sit up tall on a chair or mat, and extend one arm out in front to shoulder height. Grab the extended arm with your other arm, and pull it towards your chest while keeping the extended arm straight. Continue the pull until you feel the stretch in your shoulder. Hold for 30 seconds, and repeat for the other arm.',
      image: '/cross-body-shoulder-stretch.jpg'
    },
    {
      break: 'short',
      title: 'Triceps Static Stretch',
      description: 'Lift your arms overhead, with both arms slightly behind your head and bent at the elbow. Use your right hand to pull your left elbow until you feel a stretch in your triceps. Hold for about 30 seconds, and repeat for the other arm.',
      image: '/triceps-static-stretch.jpg'
    },
    {
      break: 'short',
      title: 'Biceps Stretch',
      description: 'Sit on the floor with your knees bent and feet flat on the floor. With your fingers pointing away from your body, place your two palms flat on the floor behind you. While your hands are steadily in place, slowly slide your butt downward toward your feet until you can feel the stretch in your biceps, shoulders, and chest. Hold for about 30 seconds before releasing.',
      image: '/biceps-stretch.jpg'
    },
    {
      break: 'short',
      title: 'Wrist Stretch',
      description: 'While standing up straight or sitting tall, extend your right arm forward to shoulder height with your fingers pointing toward the ceiling. Grab your right fingers with your left hand, and pull your right hand to bend the wrist until you can feel the stretch. Hold this position for about 30 seconds, and repeat for the opposite arm.',
      image: '/wrist-stretch.jpg'
    },
    {
      break: 'short',
      title: 'Side Stretch',
      description: 'Stand straight with your feet hip-width apart. Take your right arm and reach over your head towards your left side while bending your side. Keep bending your side slowly until you can feel a stretch on your right side. Maintain this position for about 30 seconds, and repeat for the opposite side. The muscles down your side body are notoriously difficult to stretch out. This is one of the best static stretches to try on a consistent basis to get them loosened up.',
      image: '/side-stretch.jpg'
    }
  ]

  longBreakActivities = [
    {
      break: 'long',
      title: 'Excercise your brain! Play Sodoku',
      description: 'Sudoku is one of the most popular puzzle games of all time. The goal of Sudoku is to fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9. As a logic puzzle, Sudoku is also an excellent brain game. If you play Sudoku daily, you will soon start to see improvements in your concentration and overall brain power. Start a game now. Within no time Sudoku free puzzles will be your favorite online game.',
      link: 'https://www.websudoku.com/'
    },
    {
      break: 'long',
      title: 'Explore NASA, explore space',
      link: 'https://www.instagram.com/nasa/'
    },
    {
      break: 'long',
      title: 'Excercise your brain! Play Sodoku',
      description: 'Sudoku is one of the most popular puzzle games of all time. The goal of Sudoku is to fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9. As a logic puzzle, Sudoku is also an excellent brain game. If you play Sudoku daily, you will soon start to see improvements in your concentration and overall brain power. Start a game now. Within no time Sudoku free puzzles will be your favorite online game.',
      link: 'https://www.websudoku.com/'
    },
    {
      break: 'long',
      title: 'Look at some cute cats',
      link: 'https://www.pinterest.com/eeriestories'
    },
    {
      break: 'long',
      title: 'Read NewYorker, get smart!',
      link: 'https://www.newyorker.com/'
    },
    {
      break: 'long',
      title: 'Get the latest science news, you need this!',
      link: 'https://www.quantamagazine.com/'
    },
    {
      break: 'long',
      title: 'Search for UFOs',
      link: 'https://twitter.com/search?q=UFO&src=typed_query'
    },
    {
      break: 'long',
      title: 'Learn history',
      link: 'https://old.reddit.com/r/AskHistorians/'
    }
  ]

  // Work interval should be 25 minute long
  // Short break is 5 minutes long
  // Long break is 30 minutes long
  // Every work interval should be followed by a short break
  // Every 5th work interval should be followed by a long break
  // In the short break we should display activities to help mental health: excercise, puzzles
  // In the long interval we should display activities that entertain: manga, youtube, MCU articles etc.

  connect() {
    this.displayDefaultState()
  }

  buttonCommand() {
    if (this.buttonLabelTarget.textContent == "Start") {
      this.buttonLabelTarget.textContent = "Stop"
      this.startTimer()
    }
    else {
      this.buttonLabelTarget.textContent = "Start"
      this.stopTimer()
    }
  }

  startTimer() {
    this.currentIntervalType = "work"
    this.workInterval = 0
    this.countDownFrom = this.workDurationSec;
    this.displayWorkIntervalMessage()
    this.displayCounter()

    this.countTimerHandle = setInterval(() => {
      this.processCounter()
    }, 1000)
  }

  stopTimer() {
    if (this.countTimerHandle) {
      clearInterval(this.countTimerHandle)
      this.displayDefaultState()
    }
  }

  displayDefaultState() {
    this.countTimerHandle = null
    this.titleTarget.textContent = 'Ready, set, and go!'
    this.buttonLabelTarget.textContent = "Start"
    this.countDownTimerTarget.textContent = ''
  }

  processCounter() {
    this.countDownFrom = this.countDownFrom - 1

    if (this.countDownFrom <= 0) {
      this.switchInterval()
    }

    this.displayCounter()
  }

  switchInterval() {
    if (this.currentIntervalType == "work") {
      this.workInterval = this.workInterval + 1
      this.currentShortBreakActivty = null
      this.currentIntervalType = "break"
      // every 5th work interval take a long break
      if (this.workInterval % 5 == 0) {
        this.countDownFrom = this.longBreakDurationSec
        this.displayLongBreakMessage()
      } else {
        this.countDownFrom = this.shortBreakDurationSec
        this.displayShortBreakMessage()
      }
    } else {
      this.currentIntervalType = "work"
      this.countDownFrom = this.workDurationSec
      this.displayWorkIntervalMessage()
    }
  }

  displayCounter() {
    let minutes = this.padTwoDigits(Math.floor(this.countDownFrom / 60))
    let seconds = this.padTwoDigits(this.countDownFrom % 60)

    this.countDownTimerTarget.textContent = `${minutes}:${seconds}`
  }

  padTwoDigits(number) {
    return Array(Math.max(2 - String(number).length + 1, 0)).join(0) + number;
  }

  displayLongBreakMessage() {
    let activity = this.longBreakActivities[Math.floor(Math.random() * this.shortBreakActivities.length)]

    this.titleTarget.textContent = 'Take a long break, you deserve it!'
    this.messageBoxTarget.innerHTML = `<h3 class='break-title'> <a href='${activity.link}' target='_blank'>${activity.title}</a> </h3>`
  }

  randomShortBreakActivty() {
    let activity = null
    while(activity == null || activity == this.currentShortBreakActivty) {
      activity = this.shortBreakActivities[Math.floor(Math.random() * this.shortBreakActivities.length)]
    }
    return activity
  }

  displayShortBreakMessage() {
    this.currentShortBreakActivty = this.randomShortBreakActivty()
    this.titleTarget.textContent = 'Take a short break, you need it!'
    this.messageBoxTarget.innerHTML = `
    <h3 class='break-title'>${this.currentShortBreakActivty.title}</h3>
    <img class='break-img' src='${this.currentShortBreakActivty.image}'></img>
    <p class='break-summary'>${this.currentShortBreakActivty.description}</p>
    <button data-action='timer#displayShortBreakMessage'>Finished with this activity? Click here to go to the next one</button>
    `
  }

  displayWorkIntervalMessage() {
    this.titleTarget.textContent = 'Keep going, you are doing great!'
    this.messageBoxTarget.innerHTML = ''
  }
}
