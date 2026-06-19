import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "The River Spirit of the Nile",
    author: "Haboba Oral Archive",
    content:
      "In ancient Sudanese folklore, the Nile was believed to be guarded by a spirit who protected fishermen and punished greed. Villagers would leave small offerings before fishing.",
  },
  {
    id: 2,
    title: "The Whispering Sands of Nubia",
    author: "Amina Khalid",
    content:
      "Travelers in the Nubian desert often spoke of voices carried by the wind. Some believed they were ancestors guiding lost souls back home.",
  },
  {
    id: 3,
    title: "The Black Hyena Legend",
    author: "Sudan Folklore Project",
    content:
      "A mysterious creature said to appear only at night, the Black Hyena was feared in rural villages. It symbolized deception and hidden danger.",
  },
  {
    id: 4,
    title: "The Guardian of Meroë Pyramids",
    author: "Dr. Hassan Idris",
    content:
      "Ancient stories tell of a silent guardian who protects the pyramids of Meroë from grave robbers and intruders.",
  },
  {
    id: 5,
    title: "The Woman Who Spoke to Stars",
    author: "Anonymous Tale",
    content:
      "A myth about a woman in the mountains of Sudan who could communicate with stars and predict seasonal floods.",
  },
  {
    id: 6,
    title: "The Cursed Drum of Darfur",
    author: "Tradition Keepers",
    content:
      "A drum said to bring rain or disaster depending on who plays it. It is hidden deep in oral tradition and rarely spoken about openly.",
  },
];

export default function Blogs() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl font-bold text-sand-900">
          Haboba Blogs
        </h1>
        <p className="text-sand-600 mt-2 text-lg">
          Stories, myths, and interpretations from Sudanese oral tradition.
        </p>
      </div>

      {/* Blog list */}
      <div className="space-y-10">

        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="border-b border-sand-200 pb-8"
          >
            <h2 className="font-serif text-2xl font-semibold text-sand-900">
              {blog.title}
            </h2>

            <p className="text-sm text-sand-500 mt-1">
              By {blog.author}
            </p>

            <p className="text-sand-700 mt-4 leading-relaxed">
              {blog.content}
            </p>
          </article>
        ))}

      </div>
    </div>
  );
}