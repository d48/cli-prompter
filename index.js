const { Select } = require('enquirer');

console.log('')

const people = [
"Languages Spoken: There are approximately 7,139 living languages spoken worldwide as of 2023, showcasing the incredible linguistic diversity of humanity.",
  "Population Growth: The global population reached 8 billion people in November 2022, according to the United Nations, highlighting rapid population growth from just 1 billion in the early 19th century.",
  "Internet Usage: As of 2023, over 5 billion people around the world use the internet, accounting for more than 63% of the global population.",
  "Life Expectancy: Global life expectancy has increased significantly from about 48 years in 1950 to over 72 years by 2019, reflecting improvements in healthcare, nutrition, and living conditions.",
  "Literacy Rates: The global literacy rate for adults (aged 15 and older) is around 86%, with significant variations between regions and genders.",
  "Left-Handedness: Approximately 10% of the world's population is left-handed, a trait that has been consistent across cultures and time periods.",
  "Dreams: Humans spend about six years of their lifetime dreaming, with each dream lasting between five to 20 minutes.",
  "Water Consumption: The average person drinks about 58,800 gallons (222,000 liters) of water in their lifetime, highlighting the essential role of water in human survival and health.",
  "Walking Distance: The average human will walk the equivalent of three times around the Earth in their lifetime, based on an average walking speed and daily activity.",
  "Heartbeats: The average human heart beats over 2.5 billion times in a lifetime, showcasing the heart's incredible endurance and the importance of cardiovascular health."
]

const relationships = [
"Friendships: The average person has about 3-5 close friends. Research suggests that the quality of these friendships has a significant impact on mental health and happiness.",
"Social Connectivity and Lifespan: People with strong social relationships increase their odds of survival over a given period by 50%, equivalent to quitting smoking, and it's a higher boost than many well-known health factors such as obesity and physical inactivity.",
"Marriage and Happiness: Married individuals report higher levels of happiness and lower levels of psychological distress compared to those who are single, divorced, or widowed, according to numerous studies.",
"Impact of Technology on Relationships: About 40% of couples in the United States say that technology has a significant impact on their relationship, with social media being a common source of tension and conflict.",
"Work Friends: 70% of employees say having friends at work is the most crucial element to a happy working life, and it increases productivity and company loyalty.",
  "Parent-Child Relationships: A strong parent-child bond in the early years is linked to better mental health, academic success, and positive social relationships in later life.",
  "Loneliness Epidemic: Loneliness has doubled in the United States over the last 50 years, with about 40% of adults experiencing feelings of loneliness.",
  "Pets and Human Health: Owning a pet, particularly a dog, is associated with improved heart health, more physical activity, and less depression, highlighting the importance of non-human relationships.",
  "Sleep and Relationships: Couples who are in sync with their sleep patterns tend to report higher satisfaction in their relationships.",
  "Acts of Kindness: Engaging in acts of kindness towards others has been shown to boost happiness and well-being for both the giver and the receiver, emphasizing the power of positive interactions within human relationships."
]

const public = [
"Increased Confidence: 74% of people suffer from speech anxiety. However, regular participation in public speaking activities has been shown to decrease this fear and significantly boost self-confidence.",
"Career Advancement: According to a survey by the National Association of Colleges and Employers, 73% of employers want candidates with strong oral communication skills, underscoring the career benefits of public speaking.",
"Improved Communication Skills: A study found that after a public speaking course, 89% of participants reported improved ability to argue and persuade effectively.",
"Enhanced Leadership Skills: 70% of people who engage in public speaking activities see an improvement in their leadership qualities, according to a Toastmasters International survey.",
"Better Persuasion Ability: Individuals who engage in public speaking are 68% more likely to persuade others compared to those who avoid it, illustrating the impact of effective speaking on persuasion.",
  "Increased Salary Potential: People with strong communication and public speaking skills earn, on average, 10% more than those without these skills.",
  "Enhanced Personal Relationships: 55% of participants in public speaking workshops report improved personal relationships, highlighting the social benefits of effective communication.",
  "Greater Academic Success: Students who participate in debate or public speaking activities are 25% more likely to graduate from college than those who do not.",
  "Improved Problem-Solving Skills: Engaging in public speaking and debate has been linked to a 60% improvement in critical thinking and problem-solving abilities.",
  "Social Network Expansion: People who regularly engage in public speaking activities expand their professional and personal networks by an average of 15% more than those who do not."
]



const prompt = new Select({
  name: 'firstchoice',
  message: '\nWelcome to Table Topics chooser. Make a selection with the arrow keys and press \'Enter\'\n' +
  '\n\nChoose a random statistic on:\n\n',
  choices: ['People', 'Relationships', 'Public Speaking', 'Not sure. You pick for me']
});

const getChoice = (list) => {
  let arr = []
  let arrLength = 0
  let choice = ''

  switch(list) {
    case 'people':
      arr = people
      break
    case 'relationships':
      arr = relationships 
      break
    case 'public':
      arr = public
      break
    case 'youpick':
    default:
      let choice = ['people', 'relationships', 'public']
      let randomIndex = Math.floor(Math.random() * 3)
      return getChoice(choice[randomIndex])
      break
  }

  let randomIndex = Math.floor(Math.random() * arr.length)

  return arr[randomIndex]
}



prompt.run()
  .then(answer => {
    console.log('')

    switch(answer.toLowerCase()) {
      case 'people':
        console.log(getChoice('people'))
        break;
      case 'relationships':
        console.log(getChoice('relationships'))
        break;
      case 'public speaking':
        console.log(getChoice('public'))
        break;
      case 'not sure. you pick for me':
      default:
        console.log(getChoice('youpick'))
        break;
    }

    console.log('\n\n\n\n\n\n\n')
  })
  .catch(console.error);


console.log('')



