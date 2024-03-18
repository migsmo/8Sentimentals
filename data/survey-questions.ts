import { EmotionCategory } from '../enums';
import { SurveyQuestion } from '../interfaces';

export const SurveyQuestionsData: SurveyQuestion[] = [
  {
    id: 1,
    question:
      'My friend greeted my birthday two days after my birthday. But since my friend greeted me a belated birthday, he gave me an apology gift. I feel more excited about the gift despite my friend forgetting my birthday.',
    agree: EmotionCategory.EXCITEMENT,
    disagree: EmotionCategory.SADNESS,
  },
  {
    id: 2,
    question:
      'My childhood best friend had a severe accident and was hospitalized. I haven’t been contacting my friend for more than 10 years. But I will still contact my friend to ask if he is doing well.',
    agree: EmotionCategory.AFFECTIONATE,
    disagree: EmotionCategory.DISTANT,
  },
  {
    id: 3,
    question:
      'A festival is being held in your area and your friends invited you to join them. The festival’s concept did not entertain me, but I still decided to go to the festival to spend time with my friends.',
    agree: EmotionCategory.AFFECTIONATE,
    disagree: EmotionCategory.BOREDOM,
  },
  {
    id: 4,
    question:
      'Recently I lost my wallet that my mother gave me. It has been two weeks now and I got a call that somebody retrieved my wallet in a cafe. We decided to meet up and claim my wallet and as I got the wallet, I found out that all of my cash was gone. Even though my cash was gone I am so happy to get back my sentimental gift.',
    agree: EmotionCategory.AFFECTIONATE,
    disagree: EmotionCategory.SADNESS,
  },
  {
    id: 5,
    question:
      'I have been waiting for my solo trip to Korea for years. I prepared my itinerary for months to ensure my best experience during the stay alone. When I told my friend about my plan, he wanted to go along with me. But the itinerary you have been planning is for a solo trip. I still decided to go with my friend because it would be more fun and exciting together.',
    agree: EmotionCategory.EXCITEMENT,
    disagree: EmotionCategory.DISTANT,
  },
  {
    id: 6,
    question:
      'After having a tough day, I often spend time doing my favorite hobby to make me feel happy. But sometimes I prefer to talk to my friends and family about my day to share my feelings rather than enjoying my hobby.',
    agree: EmotionCategory.AFFECTIONATE,
    disagree: EmotionCategory.HAPPINESS,
  },
  {
    id: 7,
    question:
      'Everyone around me is playing a game that has been trendy these days. My friend kept suggesting me the game to play with his group of friends. But I do not like to play games which I am not interested in and familiar with.',
    agree: EmotionCategory.BOREDOM,
    disagree: EmotionCategory.EXCITEMENT,
  },
  {
    id: 8,
    question:
      'I go to my province every Christmas to see my grandparents. But this year is my graduating term so I have been so busy with academics and unfortunately I could not go to my province this Christmas. I don’t feel disappointed because my academic schedule is more important.',
    agree: EmotionCategory.DISTANT,
    disagree: EmotionCategory.AFFECTIONATE,
  },
  {
    id: 9,
    question:
      'Before going back home from school, my friend suggested me to try the lottery because the accumulated prize is big and it would also be fun. I am willing to try the lottery for the first time to enjoy the moment with my friend.',
    agree: EmotionCategory.HAPPINESS,
    disagree: EmotionCategory.BOREDOM,
  },
  {
    id: 10,
    question:
      'I got too much birthday gifts on my birthday party. I got two identical shoes that I have been wanting for so long. My friend who did not come to my party because he was lazy asked if I can give the other shoes to him. I just decided to give it to my friend even though he did not come to my party instead of selling it or keeping it for myself.',
    agree: EmotionCategory.AFFECTIONATE,
    disagree: EmotionCategory.DISTANT,
  },
  {
    id: 11,
    question:
      'Me and my closest friends planned a trip to Malaysia next month. But we encountered a problem with one of our friend’s passport. There might be a case where he could not join us in the trip. I still feel excited about our trip because I am not the one who has the problem with the passport.',
    agree: EmotionCategory.EXCITEMENT,
    disagree: EmotionCategory.SADNESS,
  },
  {
    id: 12,
    question:
      'I worked in a factory for 3 months now and I feel frustrated for the same process every single day. But since I have applied the company to earn money, I still feel happy for the money I make even though my work is so repetitive and boring.',
    agree: EmotionCategory.HAPPINESS,
    disagree: EmotionCategory.BOREDOM,
  },
  {
    id: 13,
    question:
      'My 15 year old dog is now too old and getting sick every other week. I have prepared for this moment but it is really hard to accept the reality. My parents have decided to move on and adopt a new puppy. Since I can move on as time passes, I get excited for a new puppy.',
    agree: EmotionCategory.DISTANT,
    disagree: EmotionCategory.SADNESS,
  },
  {
    id: 14,
    question:
      'I have been working hard on my final project on the course that has been difficult the whole term. I have spent numerous nights working on the project to get a good grade. Right before the submission day, I failed my final exam which takes a big part of my final grade. After few days I was notified that I barely passed the course with the most outstanding project in the class. I feel so relieved that I passed the course because of the final project I worked hard on, despite failing the exam and not being able to get a higher grade.',
    agree: EmotionCategory.HAPPINESS,
    disagree: EmotionCategory.SADNESS,
  },
  {
    id: 15,
    question:
      'I got a job opportunity from a company I am not that interested. But the salary was higher than I expected so I decided to join the company. After working for 2 months, because the company I have been working for is not my ideal job, I started to get tired and bored. But still I feel excited every salary day because of the high pay.',
    agree: EmotionCategory.EXCITEMENT,
    disagree: EmotionCategory.BOREDOM,
  },
  {
    id: 16,
    question:
      'Sometimes I prefer spending my time alone at home to relax even when my friends invite me to of hanging out with them.',
    agree: EmotionCategory.DISTANT,
    disagree: EmotionCategory.AFFECTIONATE,
  },
  {
    id: 17,
    question:
      'Recently I have been enjoying my life and looking forward for a bright future.',
    agree: EmotionCategory.HAPPINESS,
    disagree: EmotionCategory.SADNESS,
  },
  {
    id: 18,
    question:
      'I enjoy my weekends because I have planned things to do or someone to meet.',
    agree: EmotionCategory.HAPPINESS,
    disagree: EmotionCategory.SADNESS,
  },
  {
    id: 19,
    question: 'I am very impatient and cannot wait so long for deliveries.',
    agree: EmotionCategory.EXCITEMENT,
    disagree: EmotionCategory.BOREDOM,
  },
  {
    id: 20,
    question:
      'I feel lazy whenever I have to visit my relatives every Christmas.',
    agree: EmotionCategory.DISTANT,
    disagree: EmotionCategory.HAPPINESS,
  },
];
