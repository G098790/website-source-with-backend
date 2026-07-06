import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

const blogs = [
  {
    id: 1,
    title: "Top 10 Places to Visit in Hyderabad",
    date: "6 July 2026",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200",
    description:
      "Discover Hyderabad's famous tourist attractions including Charminar, Golconda Fort, Hussain Sagar, and Ramoji Film City.",
  },
  {
    id: 2,
    title: "Complete Goa Travel Guide",
    date: "4 July 2026",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200",
    description:
      "Everything you need to know before visiting Goa including beaches, food, nightlife, and travel tips.",
  },
  {
    id: 3,
    title: "Char Dham Yatra Guide",
    date: "1 July 2026",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200",
    description:
      "Complete guide to Kedarnath, Badrinath, Gangotri, and Yamunotri for pilgrims.",
  },
];

function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-3 text-4xl font-bold">
        Travel Blogs
      </h1>

      <p className="mb-10 text-gray-600">
        Travel tips, destination guides, and pilgrimage information.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="overflow-hidden rounded-xl border shadow hover:shadow-xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <p className="text-sm text-gray-500">
                {blog.date}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {blog.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {blog.description}
              </p>

              <button className="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}