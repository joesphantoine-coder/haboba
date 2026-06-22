import type { Story } from '../types';
import { calculateReadingTime } from '../lib/readingTime';

const rawStories: Omit<Story, 'readTime'>[] = [
{
  id: 'green-one-in-glass',
  title: {
    en: 'The Green One in Glass',
    ar: 'الأخضر في الزجاج'
  },

  category: 'Legend',

  region: {
    en: 'Northern Sudan',
    ar: 'شمال السودان'
  },

  image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',

  summary: {
    en: 'A heroine summons a supernatural prince, only for jealous sisters to wound him with broken glass — beginning her long journey to find and heal him.',
    ar: 'تستدعي شابة أميرًا ذا أصلٍ سحري، لكن أخواتها الغيورات يجرحنه بالزجاج المكسور، لتبدأ رحلتها الطويلة بحثًا عنه ومحاولة شفائه.'
  },

  fullText: {
    en: `In this widely documented Sudanese folktale...`,

    ar: `في هذه الحكاية الشعبية السودانية الموثقة على نطاق واسع، تطلب فتاة شابة من والدها أن يجلب لها شيئًا يخص أميرًا ذا أصلٍ خارق للطبيعة. وباستخدام هذا الشيء، تتمكن من استدعائه سرًا إلى غرفتها كل ليلة.

تكتشف أخواتها الغيورات هذه اللقاءات السرية، فيقمن بنثر الزجاج المكسور على الأرض وحافة النافذة. وعندما يصل الأمير في تلك الليلة، يصاب بجروحٍ بالغة بسبب الزجاج، فيهرب متألمًا، تاركًا الفتاة دون وسيلة للوصول إليه مرة أخرى.

مصممة على العثور عليه، تنطلق في رحلة طويلة وشاقة عبر أراضٍ مجهولة بحثًا عن حبيبها الجريح. وبفضل صبرها وذكائها ومساعدة الغرباء الذين تلتقيهم في الطريق، تتمكن في النهاية من العثور عليه والاعتناء به حتى يستعيد عافيته، ثم يجتمعان من جديد.

يصنف علماء الفولكلور هذه الحكاية ضمن النمط ATU 432 المعروف باسم «الأمير الطائر». ويظهر هذا النمط القصصي أيضًا في مصر والجزائر والمغرب، مما يوضح كيف انتقلت هذه الرواية الشعبية عبر شمال أفريقيا وتطورت مع الزمن، مع احتفاظها بجوهرها العاطفي: حبٌّ يختبره الحسد، ويُشفى بالمثابرة والوفاء.

كما توجد رواية قريبة جدًا من هذه القصة، سجلها الباحثان أحمد الشاهي وF.C.T. مور في قرية البرصة تحت عنوان «الفاصوليا الخضراء». وتتبع هذه الرواية بنية مشابهة، حيث تسعى شابة مصممة للوصول إلى ابنٍ سحري محروس، وتحظى بالمساعدة والحماية من النمل والعبيد والأسود.`
  },

  source: {
    en: 'Documented Sudanese oral tradition; classified under Aarne-Thompson-Uther Index (ATU 432)',
    ar: 'من التراث الشفهي السوداني الموثق؛ ومصنفة ضمن فهرس آرنه–طومسون–أوثر للحكايات الشعبية (ATU 432)'
  },

  sourceUrl: 'https://en.wikipedia.org/wiki/The_Green_One_in_Glass',
},
  {
    id: 'stallion-houssan',
    title: { en: 'The Stallion Houssan', ar: '' },
    category: 'Desert',
    region: { en: 'Kordofan', ar: '' },
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa85?w=800&q=80',
    summary: {
      en: 'A prince and his magical horse flee a scheming stepmother, their friendship carrying them through exile into a new kingdom and a new identity.',
      ar: '',
    },
    fullText: {
      en: `Collected in the region of Kordofan and first published in 1923 by the German ethnologist Leo Frobenius in his work "Märchen aus Kordofan," this tale centers on an unlikely friendship between a king's son and a horse of magical nature.

When the boy's stepmother turns against him, plotting to remove him from the royal household, the prince and his stallion are forced to flee together under cover of darkness. Their bond — between human and animal, rider and protector — becomes the heart of the story as they cross unfamiliar territory in search of safety.

They eventually arrive in another kingdom, where the prince conceals his royal origins and adopts a new identity to survive and rebuild his life. The horse remains his closest companion and silent ally throughout, his loyalty never wavering despite the prince's fall from privilege.

This tale belongs to the broader Aarne-Thompson tale-type ATU 314, a pattern found across many oral traditions, often centered on themes of transformation, loyalty, and hidden royal identity. Its documentation by Frobenius remains one of the earliest formal records of Kordofani folklore preserved in written form.`,
      ar: '',
    },
    source: {
      en: 'Collected by ethnologist Leo Frobenius, published in "Märchen aus Kordofan" (Atlantis, Vol. 4), 1923',
      ar: '',
    },
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Stallion_Houssan',
  },
  {
    id: 'shennawis-palace',
    title: { en: "Shennawi's Palace", ar: '' },
    category: 'Desert',
    region: { en: 'Red Sea Hills', ar: '' },
    image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&q=80',
    summary: {
      en: 'Along centuries-old caravan routes through the Red Sea Hills, a resting place became legend — the point every traveling camel looked forward to.',
      ar: '',
    },
    fullText: {
      en: `For centuries, caravans crossed Sudan along ancient trade and pilgrimage routes connecting the Nile Valley to the Red Sea coast. These journeys were long, harsh, and shaped the oral memory of every community along the way.

Among the resting points scattered across this route, Shennawi's Palace became known as a place of particular welcome — a stop where exhausted travelers, and even their camels, found rest after the punishing crossing of the Red Sea Hills.

The story survives today as part of the documented oral heritage preserved by the Sudan Memory project, which has worked since 2018 to digitize and safeguard Sudanese cultural memory before it is lost to time, conflict, or neglect.`,
      ar: '',
    },
    source: { en: 'Preserved by the Sudan Memory digital heritage archive', ar: '' },
    sourceUrl: 'https://www.sudanmemory.org/stories/',
  },
  {
    id: 'nubian-heritage-festival',
    title: { en: 'The Nubian Heritage Festival', ar: '' },
    category: 'Heritage',
    region: { en: 'Wadi Halfa & Khartoum', ar: '' },
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
    summary: {
      en: 'From Khartoum to Wadi Halfa, a festival works to keep Nubian script, song, and story alive — racing against the same waters that once displaced its people.',
      ar: '',
    },
    fullText: {
      en: `Nubian heritage represents one of the oldest continuous cultural traditions in Africa, carrying a written script considered among the continent's most ancient.

A landmark heritage festival brought this living tradition into focus, opening in Khartoum with documentary screenings, talks on Nubian history, fashion shows, and demonstrations of traditional craft. The Khartoum program closed with performances by prominent Nubian musicians.

The festival then journeyed north to Wadi Halfa, where nearby communities were displaced when the Aswan High Dam was constructed. In Wadi Halfa, the festival turned its focus to performances of traditional folklore, music, song, dance, and poetry recitation.`,
      ar: '',
    },
    source: {
      en: 'Documented in "Safeguarding the Indigenous Languages and Intangible Heritage" research, International Journal of Intangible Heritage',
      ar: '',
    },
    sourceUrl: 'https://www.ijih.org/volumes/article/670',
  },
  {
    id: 'nile-and-kush',
    title: { en: 'The Nile and the Kingdom of Kush', ar: '' },
    category: 'River',
    region: { en: 'Nile Valley', ar: '' },
    image: 'https://images.unsplash.com/photo-1623241899566-22aa8e22a4d8?w=800&q=80',
    summary: {
      en: "Long before the pyramids of Egypt, the Kingdom of Kush held its kings' funeral rites along the Nile — a bond between river and ruler later immortalized in Sudanese poetry.",
      ar: '',
    },
    fullText: {
      en: `The relationship between the Sudanese people and the Nile reaches back further than the Nubian kingdoms themselves, flourishing during the height of the ancient Kingdom of Kush — a civilization stretching over 1,400 kilometers along the Nile Valley.

Archaeological inscriptions from this period reveal rituals of profound significance held along the riverbanks: ceremonies of death, burial, and mourning for Kushite kings.

Centuries later, the Sufi poet Al-Tijani Yusuf Bashir captured the same enduring connection in his poem "Descendant of Paradise," writing of the Nile as a presence carrying eternal peace within the hearts of those who lived along its banks.`,
      ar: '',
    },
    source: {
      en: 'Researched account drawing on archaeological and literary sources, including the poetry of Al-Tijani Yusuf Bashir',
      ar: '',
    },
    sourceUrl: 'https://aquamuse.substack.com/p/the-myths-and-rituals-of-the-nile',
  },
  {
    id: 'folk-tales-northern-sudan',
    title: { en: 'Folk Tales from the Northern Sudan', ar: '' },
    category: 'Heritage',
    region: { en: 'Northern Sudan', ar: '' },
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80',
    summary: {
      en: 'A rare English-language collection of Northern Sudanese folk tales survives today as part of a national effort to digitize heritage at risk of being lost forever.',
      ar: '',
    },
    fullText: {
      en: `Among the materials preserved by Sudan's national heritage digitization effort is a documented English-language collection titled "Folk Tales from the Northern Sudan."

This collection represents a wider story: much of Sudan's oral heritage exists only in memory, vulnerable to extreme weather, conflict, neglect, and time taking storytellers before their tales are written down.

Since 2018, a national initiative working with international partners, including King's College London, has digitized hundreds of thousands of images and documents to ensure collections like this one survive for future generations.`,
      ar: '',
    },
    source: { en: 'Sudan Memory Archive, National Records Office collection', ar: '' },
    sourceUrl: 'https://www.sudanmemory.org/fullscreen/NRO-3000032/2/',
  },
];

export const stories: Story[] = rawStories.map((story) => ({
  ...story,
  readTime: calculateReadingTime(story.fullText.en),
}));

export function getStoryById(id: string): Story | undefined {
  return stories.find((story) => story.id === id);
}

export function getStoriesByCategory(category: string): Story[] {
  if (category === 'All') return stories;
  return stories.filter((story) => story.category === category);
}