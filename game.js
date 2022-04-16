const storyElement = document.getElementById('story')
const choiceButtonsElement = document.getElementById('choice-buttons')

let state = {}

function startGame() {
    state = {}
    showStoryWindow(1)
}

function showStoryWindow(storyWindowIndex) {
    const storyWindow = storyWindows.find(storyWindow => storyWindow.id === storyWindowIndex)
    storyElement.innerText = storyWindow.text
    while (choiceButtonsElement.firstChild) {
    choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
    }

    storyWindow.choices.forEach(choice => {
        if (showChoice(choice)) {
            const button = document.createElement('button')
            button.innerText = choice.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectChoice(choice))
            choiceButtonsElement.appendChild(button)
        }
    })
}

function showChoice(choice) {
    return choice.requiredState == null || option.requiredState(state)
}

function selectChoice(choice) {
    const nextStoryWindowId = choice.nextStory
    state = Object.assign(state, choice.setState)
    showStoryWindow(nextStoryWindowId)
}

const storyWindows = [
    {
        id: 1,
        text: "It’s a dark and windy night. Your eyes are heavy. You’ve been slugging through this project for weeks, and it’s almost done, but there’s one little bug in the code you just can’t figure out. You know your mentor, Jordan, would tell you to just take a break already, but you swear you’re about to find it if you just go over it one more time-Zap! The power goes out in the blink of an eye, leaving you to stare incredulously at your now black computer screen. As your eyes adjust, you hear something that had been covered up by the sounds of your school before…is that screaming? It is! You look out the window and see dozens of androids attacking your classmates in the school courtyard. But Jordan created androids to be peaceable, didn’t he? Why is this happening? You have no time to think. Already, you can see the fight taking everyone closer to the school. If the androids are becoming homicidal, you know it won’t be long before they raid the building. Quick! Should you barricade yourself in the classroom and wait for help, or try to run and escape in the chaos?",
        choices: [
            {
                text: "Barricade Yourself In",
                nextStory: 2
            },
            {
                text: "Make A Break For It",
                nextStory: 3
            },
            {
                text: "Cry",
                nextStory: 4
            }
        ]
    },
    {
        id: 2,
        text: "YOU DIED. The androids eventually came for you before help did, and they were easily able to break through the door with their superhuman strength.",
        choices: [
            {
                text: "Try Again",
                nextStory: 1
            }
        ]
    },
    {
        id: 3,
        text: "You slip out into the hallway and start running as quietly as you can with only the moonlight to guide you. But soon enough, you encounter…stairs! Going downstairs would put you closer to the exit, but closer to all those androids too. If you go upstairs, you might have a better shot of making it to the roof and getting help. Should you go up, or down? ",
        choices: [
            {
                text: "Go Up",
                nextStory: 5
            },
            {
                text: "Go Down",
                nextStory: 6
            }
        ]
    },
    {
        id: 4,
        text: "Your face is puffy and red. Tears slide down your cheeks as you sob in despair...but Jordan's not here to wipe those tears away. You're going to have to make a decision on your own!",
        choices: [
            {
                text: "Barricade Yourself In",
                nextStory: 2
            },
            {
                text: "Make A Break For It",
                nextStory: 3
            }
        ]
    },
    {
        id: 5,
        text: "There were other students hiding out up there, and they were not eager to add another vulnerable member to their party. They threw you to the androids down below.",
        choices: [
            {
                text: "Try Again",
                nextStory: 1
            }
        ]
    },
    {
        id: 6,
        text: "You fly down the stairs before coming to a custodial closet. You decide to look inside, hoping to find a weapon, and get lucky: there’s an axe, and a bottle of Windex. What a weird janitor. You don’t remember him walking around with an axe...Do You:",
        choices: [
            {
                text: "Pick Up The Axe",
                nextStory: 7
            },
            {
                text: "Pick Up The Windex",
                nextStory: 8
            },
            {
                text: "Hide In The Closet",
                nextStory: 2
            }
        ]
    },
    {
        id: 7,
        text: "YOU DIED. On your way out, you were noticed. You try to fight, but the axe is heavy and you tire quickly. The androids eventually overtake you. Your last thought is, \"Why Jordan, WHY?\"",
        choices: [
            {
                text: "Try Again",
                nextStory: 1
            }
        ]
    },
    {
        id: 8,
        text: "YOU WIN! Not many people know this about you, but you’re a martial arts master. Thanks to your skills and the fact that one quick shot of Windex is enough to completely short-circuit any android you come across, you manage to escape and make it to the city center, where the military has already set up a quarantine zone. It turns out Jordan pressed the wrong button when he woke up that morning. Oops!",
        choices: [
            {
                text: "Play Again",
                nextStory: 1
            }
        ]
    }
]

startGame()
