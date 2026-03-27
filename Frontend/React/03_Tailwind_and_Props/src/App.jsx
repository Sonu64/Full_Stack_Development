import './App.css'

function App() {
  return (
    <div className="w-full h-screen flex gap-13 flex-col items-center justify-center bg-gray-100">
      <div className="text-center text-3xl font-bold rounded-lg shadow-[5px_5px_0px_0px_rgba(11, 79, 48)]">
        Hello, Tailwind CSS!
      </div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl shadow-indigo-300 shadow-lg">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="https://content.r9cdn.net/rimg/dimg/c8/bd/0b5f2516-city-44834-18fe8ded347.jpg?width=1366&height=768&xhint=1416&yhint=1008&crop=true"
              alt="A view of Kolkata"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Gateway to East India
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Kolkata: The City of Joy
            </a>
            <p class="mt-2 text-slate-500">
              Exploring the rich cultural heritage, colonial architecture, and
              vibrant streets of Kolkata, where every corner tells a story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
