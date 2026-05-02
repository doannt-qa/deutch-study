import type { ChatScenario } from '@/types'

export const chatScenarios: ChatScenario[] = [
  {
    id: 'cafe',
    title: 'At the Café',
    level: 'A1',
    description: 'Order food and drinks in a German café.',
    icon: '☕',
    setting: 'You are at a cozy café in Berlin. The waiter approaches your table.',
    turns: [
      {
        partnerMessage: {
          id: 'cafe-p1',
          sender: 'partner',
          text: 'Guten Tag! Was darf ich Ihnen bringen?',
          translation: 'Good day! What can I bring you?',
          vocabularyHints: [{ word: 'bringen', meaning: 'to bring' }],
        },
        options: [
          { id: 'cafe-o1a', text: 'Ich möchte einen Kaffee und ein Stück Kuchen, bitte.', isCorrect: true, feedback: 'Perfekt! "Ich möchte" is the polite way to order.' },
          { id: 'cafe-o1b', text: 'Gib mir Kaffee.', isCorrect: false, feedback: 'This is too abrupt. Use "Ich möchte..." for polite requests.' },
          { id: 'cafe-o1c', text: 'Nein danke.', isCorrect: false, feedback: 'That means "No thank you" — the waiter just arrived!' },
        ],
        nextTurnId: 'turn2',
      },
      {
        partnerMessage: {
          id: 'cafe-p2',
          sender: 'partner',
          text: 'Sehr gerne! Möchten Sie Milch oder Zucker im Kaffee?',
          translation: 'Of course! Would you like milk or sugar in your coffee?',
          vocabularyHints: [{ word: 'Milch', meaning: 'milk' }, { word: 'Zucker', meaning: 'sugar' }],
        },
        options: [
          { id: 'cafe-o2a', text: 'Ja, mit Milch bitte, aber ohne Zucker.', isCorrect: true, feedback: 'Excellent! "mit" = with, "ohne" = without.' },
          { id: 'cafe-o2b', text: 'Ich weiß nicht.', isCorrect: false, feedback: '"Ich weiß nicht" (I don\'t know) is not appropriate here. Try expressing a preference.' },
          { id: 'cafe-o2c', text: 'Schwarz, bitte.', isCorrect: true, feedback: 'Great! "Schwarz" means black (no milk or sugar). Short and correct!' },
        ],
        nextTurnId: 'turn3',
      },
      {
        partnerMessage: {
          id: 'cafe-p3',
          sender: 'partner',
          text: 'Natürlich! Kann ich sonst noch etwas für Sie tun?',
          translation: 'Of course! Can I do anything else for you?',
          vocabularyHints: [{ word: 'sonst', meaning: 'otherwise / else' }],
        },
        options: [
          { id: 'cafe-o3a', text: 'Nein danke, das ist alles.', isCorrect: true, feedback: 'Perfect! A polite and complete response.' },
          { id: 'cafe-o3b', text: 'Die Rechnung, bitte!', isCorrect: true, feedback: 'Correct! Asking for the bill is appropriate here.' },
          { id: 'cafe-o3c', text: 'Ja, bitte geh weg.', isCorrect: false, feedback: 'Too rude! Never say this to a waiter.' },
        ],
      },
    ],
  },
  {
    id: 'introduction',
    title: 'Introducing Yourself',
    level: 'A1',
    description: 'Introduce yourself and ask about someone else.',
    icon: '👋',
    setting: 'You are at a German language course on the first day. Another student sits next to you.',
    turns: [
      {
        partnerMessage: {
          id: 'intro-p1',
          sender: 'partner',
          text: 'Hallo! Ich heiße Maria. Und Sie?',
          translation: 'Hello! My name is Maria. And you?',
          vocabularyHints: [{ word: 'heißen', meaning: 'to be called / to be named' }],
        },
        options: [
          { id: 'intro-o1a', text: 'Hallo! Ich heiße [dein Name]. Freut mich!', isCorrect: true, feedback: 'Perfect introduction! "Freut mich" = Nice to meet you.' },
          { id: 'intro-o1b', text: 'Ich bin gut.', isCorrect: false, feedback: '"Ich bin gut" means "I am good" — she asked for your name, not how you feel.' },
          { id: 'intro-o1c', text: 'Mein Name ist Thomas. Guten Tag!', isCorrect: true, feedback: 'Also correct! "Mein Name ist..." is another way to introduce yourself.' },
        ],
        nextTurnId: 'intro-turn2',
      },
      {
        partnerMessage: {
          id: 'intro-p2',
          sender: 'partner',
          text: 'Woher kommen Sie? Ich komme aus Spanien.',
          translation: 'Where are you from? I am from Spain.',
          vocabularyHints: [{ word: 'woher', meaning: 'from where' }, { word: 'kommen', meaning: 'to come' }],
        },
        options: [
          { id: 'intro-o2a', text: 'Ich komme aus Vietnam. Und Sie wohnen jetzt in Berlin?', isCorrect: true, feedback: 'Excellent! You answered and asked a follow-up question.' },
          { id: 'intro-o2b', text: 'Ich spreche Deutsch.', isCorrect: false, feedback: 'She asked where you\'re from, not what languages you speak.' },
          { id: 'intro-o2c', text: 'Ich bin aus Deutschland.', isCorrect: true, feedback: 'Correct! "Ich bin aus..." also works to say where you\'re from.' },
        ],
        nextTurnId: 'intro-turn3',
      },
      {
        partnerMessage: {
          id: 'intro-p3',
          sender: 'partner',
          text: 'Ja, ich wohne seit drei Monaten hier. Wie lange lernen Sie schon Deutsch?',
          translation: 'Yes, I have been living here for three months. How long have you been learning German?',
          vocabularyHints: [{ word: 'seit', meaning: 'since / for (time)' }, { word: 'schon', meaning: 'already' }],
        },
        options: [
          { id: 'intro-o3a', text: 'Ich lerne seit sechs Monaten Deutsch. Es macht Spaß!', isCorrect: true, feedback: 'Great! "seit + time" expresses duration correctly.' },
          { id: 'intro-o3b', text: 'Ich lerne Deutsch morgen.', isCorrect: false, feedback: '"Morgen" means tomorrow — she asked about how long you\'ve been learning.' },
          { id: 'intro-o3c', text: 'Ich habe kein Deutsch gelernt.', isCorrect: false, feedback: 'But you\'re at a German course! Try a more accurate answer.' },
        ],
      },
    ],
  },
  {
    id: 'hotel',
    title: 'At the Hotel',
    level: 'A2',
    description: 'Check into a hotel and ask about facilities.',
    icon: '🏨',
    setting: 'You have arrived at a hotel in Munich after a long journey. You approach the reception desk.',
    turns: [
      {
        partnerMessage: {
          id: 'hotel-p1',
          sender: 'partner',
          text: 'Guten Abend! Haben Sie eine Reservierung?',
          translation: 'Good evening! Do you have a reservation?',
          vocabularyHints: [{ word: 'die Reservierung', meaning: 'reservation' }],
        },
        options: [
          { id: 'hotel-o1a', text: 'Ja, ich habe eine Reservierung auf den Namen Müller.', isCorrect: true, feedback: 'Perfect! "auf den Namen" = under the name.' },
          { id: 'hotel-o1b', text: 'Nein, aber ich brauche ein Zimmer für zwei Nächte.', isCorrect: true, feedback: 'Correct and polite walk-in request.' },
          { id: 'hotel-o1c', text: 'Was ist eine Reservierung?', isCorrect: false, feedback: 'You should know this word! "Die Reservierung" = reservation.' },
        ],
        nextTurnId: 'hotel-turn2',
      },
      {
        partnerMessage: {
          id: 'hotel-p2',
          sender: 'partner',
          text: 'Sehr schön. Ich habe ein Einzelzimmer für Sie vorbereitet. Frühstück ist inklusive.',
          translation: 'Very good. I have prepared a single room for you. Breakfast is included.',
          vocabularyHints: [{ word: 'das Einzelzimmer', meaning: 'single room' }, { word: 'inklusive', meaning: 'included' }],
        },
        options: [
          { id: 'hotel-o2a', text: 'Wunderbar! Bis wann wird das Frühstück serviert?', isCorrect: true, feedback: 'Excellent question using "bis wann" (until when).' },
          { id: 'hotel-o2b', text: 'Ich möchte kein Frühstück.', isCorrect: true, feedback: 'Grammatically correct. Declining included breakfast is fine.' },
          { id: 'hotel-o2c', text: 'Ich habe Hunger.', isCorrect: false, feedback: 'True perhaps, but irrelevant to checking in. Ask about the room or breakfast.' },
        ],
        nextTurnId: 'hotel-turn3',
      },
      {
        partnerMessage: {
          id: 'hotel-p3',
          sender: 'partner',
          text: 'Das Frühstück ist von 7 bis 10 Uhr. Hier ist Ihr Schlüssel. Das Zimmer ist auf der zweiten Etage.',
          translation: 'Breakfast is from 7 to 10 o\'clock. Here is your key. The room is on the second floor.',
          vocabularyHints: [{ word: 'der Schlüssel', meaning: 'key' }, { word: 'die Etage', meaning: 'floor' }],
        },
        options: [
          { id: 'hotel-o3a', text: 'Vielen Dank! Gibt es WLAN im Zimmer?', isCorrect: true, feedback: 'Perfect! A practical and politely-phrased follow-up.' },
          { id: 'hotel-o3b', text: 'Danke schön. Gute Nacht!', isCorrect: true, feedback: 'Simple and correct — ready to go to your room!' },
          { id: 'hotel-o3c', text: 'Warum ist es so teuer?', isCorrect: false, feedback: 'The price was not mentioned. This is impolite at check-in.' },
        ],
      },
    ],
  },
  {
    id: 'directions',
    title: 'Asking for Directions',
    level: 'A2',
    description: 'Ask for and understand directions in German.',
    icon: '🗺️',
    setting: 'You are in Hamburg and can\'t find the main train station. You stop a passerby.',
    turns: [
      {
        partnerMessage: {
          id: 'dir-p1',
          sender: 'partner',
          text: 'Hallo! Kann ich Ihnen helfen?',
          translation: 'Hello! Can I help you?',
          vocabularyHints: [{ word: 'helfen', meaning: 'to help' }],
        },
        options: [
          { id: 'dir-o1a', text: 'Ja, bitte! Entschuldigung, wo ist der Hauptbahnhof?', isCorrect: true, feedback: 'Perfect! Polite and clear question.' },
          { id: 'dir-o1b', text: 'Ich suche den Bahnhof. Können Sie mir den Weg erklären?', isCorrect: true, feedback: 'Excellent! "den Weg erklären" = to explain the way.' },
          { id: 'dir-o1c', text: 'Wo bin ich?', isCorrect: false, feedback: 'Too vague. Ask specifically where you want to go.' },
        ],
        nextTurnId: 'dir-turn2',
      },
      {
        partnerMessage: {
          id: 'dir-p2',
          sender: 'partner',
          text: 'Der Hauptbahnhof ist nicht weit. Gehen Sie diese Straße geradeaus, dann links an der Ampel.',
          translation: 'The main station is not far. Go straight along this street, then left at the traffic light.',
          vocabularyHints: [{ word: 'geradeaus', meaning: 'straight ahead' }, { word: 'die Ampel', meaning: 'traffic light' }],
        },
        options: [
          { id: 'dir-o2a', text: 'Geradeaus und dann links an der Ampel – habe ich das richtig verstanden?', isCorrect: true, feedback: 'Perfect! Repeating directions back confirms understanding.' },
          { id: 'dir-o2b', text: 'Wie weit ist es zu Fuß?', isCorrect: true, feedback: 'Great follow-up question! "zu Fuß" = on foot.' },
          { id: 'dir-o2c', text: 'Ich verstehe nicht.', isCorrect: false, feedback: 'Ask them to repeat or speak slowly: "Könnten Sie das wiederholen?"' },
        ],
        nextTurnId: 'dir-turn3',
      },
      {
        partnerMessage: {
          id: 'dir-p3',
          sender: 'partner',
          text: 'Ja, genau! Es sind ungefähr 10 Minuten zu Fuß.',
          translation: 'Yes, exactly! It is approximately 10 minutes on foot.',
          vocabularyHints: [{ word: 'ungefähr', meaning: 'approximately' }],
        },
        options: [
          { id: 'dir-o3a', text: 'Vielen Dank für Ihre Hilfe! Auf Wiedersehen!', isCorrect: true, feedback: 'Perfect farewell and thank you.' },
          { id: 'dir-o3b', text: 'Danke schön! Das ist sehr nett von Ihnen.', isCorrect: true, feedback: 'Excellent! "Das ist sehr nett von Ihnen" = That is very kind of you.' },
          { id: 'dir-o3c', text: 'OK bye.', isCorrect: false, feedback: 'Switch to German! "Danke und auf Wiedersehen!"' },
        ],
      },
    ],
  },
  {
    id: 'job-interview',
    title: 'Job Interview',
    level: 'B1',
    description: 'Navigate a formal job interview in German.',
    icon: '💼',
    setting: 'You are in a job interview at a German company. The interviewer greets you.',
    turns: [
      {
        partnerMessage: {
          id: 'job-p1',
          sender: 'partner',
          text: 'Guten Morgen! Bitte nehmen Sie Platz. Erzählen Sie mir etwas über sich.',
          translation: 'Good morning! Please have a seat. Tell me something about yourself.',
          vocabularyHints: [{ word: 'erzählen', meaning: 'to tell / narrate' }, { word: 'über sich', meaning: 'about yourself' }],
        },
        options: [
          { id: 'job-o1a', text: 'Guten Morgen! Ich heiße Anna Schmidt und ich habe fünf Jahre Erfahrung in der Softwareentwicklung.', isCorrect: true, feedback: 'Excellent! Professional self-introduction with relevant experience.' },
          { id: 'job-o1b', text: 'Ich bin müde von der Reise.', isCorrect: false, feedback: 'Never mention being tired in an interview! Focus on your strengths.' },
          { id: 'job-o1c', text: 'Vielen Dank für die Einladung. Ich bin sehr motiviert für diese Stelle.', isCorrect: true, feedback: 'Great start! Shows enthusiasm and professionalism.' },
        ],
        nextTurnId: 'job-turn2',
      },
      {
        partnerMessage: {
          id: 'job-p2',
          sender: 'partner',
          text: 'Warum möchten Sie bei unserem Unternehmen arbeiten?',
          translation: 'Why do you want to work at our company?',
          vocabularyHints: [{ word: 'das Unternehmen', meaning: 'company' }],
        },
        options: [
          { id: 'job-o2a', text: 'Ihr Unternehmen ist für seine innovative Kultur bekannt, und ich möchte zu Ihrem Wachstum beitragen.', isCorrect: true, feedback: 'Perfect! Shows research and motivation.' },
          { id: 'job-o2b', text: 'Ich brauche Geld.', isCorrect: false, feedback: 'Honest but never say this in an interview! Focus on the company and role.' },
          { id: 'job-o2c', text: 'Diese Stelle entspricht genau meinen Fähigkeiten und Interessen.', isCorrect: true, feedback: 'Excellent! "entsprechen" = to match/correspond to.' },
        ],
        nextTurnId: 'job-turn3',
      },
      {
        partnerMessage: {
          id: 'job-p3',
          sender: 'partner',
          text: 'Haben Sie noch Fragen an uns?',
          translation: 'Do you have any questions for us?',
          vocabularyHints: [{ word: 'Fragen haben', meaning: 'to have questions' }],
        },
        options: [
          { id: 'job-o3a', text: 'Ja, wie sieht ein typischer Arbeitstag in dieser Position aus?', isCorrect: true, feedback: 'Perfect question! Shows genuine interest in the role.' },
          { id: 'job-o3b', text: 'Wie viel Urlaub bekomme ich?', isCorrect: false, feedback: 'Save vacation questions for after you get an offer. Ask about the role first.' },
          { id: 'job-o3c', text: 'Nein, ich habe keine Fragen.', isCorrect: false, feedback: 'Always have questions! It shows interest. Ask about the team or role.' },
        ],
      },
    ],
  },
  {
    id: 'opinions',
    title: 'Discussing Opinions',
    level: 'B1',
    description: 'Express and defend your views in German.',
    icon: '💬',
    setting: 'You are having coffee with a German friend. They bring up a topic about city life.',
    turns: [
      {
        partnerMessage: {
          id: 'op-p1',
          sender: 'partner',
          text: 'Findest du, dass das Leben in der Stadt besser ist als auf dem Land?',
          translation: 'Do you think that life in the city is better than in the countryside?',
          vocabularyHints: [{ word: 'finden', meaning: 'to find / to think' }, { word: 'das Land', meaning: 'countryside / country' }],
        },
        options: [
          { id: 'op-o1a', text: 'Ich finde, dass das Stadtleben mehr Möglichkeiten bietet, obwohl es manchmal stressig ist.', isCorrect: true, feedback: 'Excellent! Uses "obwohl" (although) for a nuanced opinion.' },
          { id: 'op-o1b', text: 'Ja.', isCorrect: false, feedback: 'Too short for a B1 conversation. Elaborate with "Ich denke, dass..." or "Meiner Meinung nach..."' },
          { id: 'op-o1c', text: 'Meiner Meinung nach hat das Landleben seinen eigenen Charme, aber ich bevorzuge die Stadt.', isCorrect: true, feedback: 'Great! "Meiner Meinung nach" = in my opinion.' },
        ],
        nextTurnId: 'op-turn2',
      },
      {
        partnerMessage: {
          id: 'op-p2',
          sender: 'partner',
          text: 'Interessant! Ich würde lieber auf dem Land wohnen. Weniger Stress und mehr Natur.',
          translation: 'Interesting! I would rather live in the countryside. Less stress and more nature.',
          vocabularyHints: [{ word: 'lieber', meaning: 'rather / preferably' }, { word: 'die Natur', meaning: 'nature' }],
        },
        options: [
          { id: 'op-o2a', text: 'Das stimmt, aber man vermisst oft die kulturellen Angebote der Stadt.', isCorrect: true, feedback: 'Well argued! "vermissen" = to miss.' },
          { id: 'op-o2b', text: 'Du hast recht. Ich auch.', isCorrect: false, feedback: 'Too brief. Practice using discourse markers: "Einerseits... andererseits..."' },
          { id: 'op-o2c', text: 'Das kann ich verstehen, auch wenn ich anderer Meinung bin.', isCorrect: true, feedback: 'Perfect! Respectfully disagrees while acknowledging the other view.' },
        ],
        nextTurnId: 'op-turn3',
      },
      {
        partnerMessage: {
          id: 'op-p3',
          sender: 'partner',
          text: 'Was wäre für dich das ideale Leben?',
          translation: 'What would be the ideal life for you?',
          vocabularyHints: [{ word: 'ideal', meaning: 'ideal' }, { word: 'wäre', meaning: 'would be (Konjunktiv II)' }],
        },
        options: [
          { id: 'op-o3a', text: 'Idealerweise würde ich in einer kleinen Stadt wohnen – nah an der Natur, aber mit guter Infrastruktur.', isCorrect: true, feedback: 'Excellent use of Konjunktiv II (würde + infinitive).' },
          { id: 'op-o3b', text: 'Ich weiß nicht.', isCorrect: false, feedback: 'Try! "Ich würde gerne..." or "Am liebsten würde ich..."' },
          { id: 'op-o3c', text: 'Das ist eine schwierige Frage. Ich glaube, ich wäre am glücklichsten in einer lebendigen Gemeinschaft.', isCorrect: true, feedback: 'Superb! Uses "wäre" correctly and answers thoughtfully.' },
        ],
      },
    ],
  },
]
