import "./App.css";
import Card from "./components/Card";



function App() {
  let mumbaiUrl =
    "https://images.pexels.com/photos/13371115/pexels-photo-13371115.jpeg?cs=srgb&dl=pexels-rahul-goyal-924312-13371115.jpg&fm=jpg";

  let kolkataUrl = "https://wallpaperaccess.com/full/1883866.jpg"
  let delhiUrl =
    "https://travelthrivehub.com/wp-content/uploads/2025/10/red-fortdelhi1.jpg";

  return (
    // Changed h-screen to min-h-screen so it grows with content
    // Removed justify-center so cards start from the top
    <div className="App w-full min-h-screen bg-gradient-to-r from-gray-800 to-blue-800 p-10 px-21 flex flex-col items-center gap-10 py-0">
      <h1 className="text-amber-100 text-center text-5xl font-bold mt-10 py-8 px-15 rounded-lg shadow-[5px_5px_0px_0px_rgba(251,191,36)] border border-amber-100/20">
        Hello, Traveller!
      </h1>

      {/* RESPONSIVE GRID CONTAINER */}
      {/* grid-cols-1: 1 card on mobile */}
      {/* md:grid-cols-2: 2 cards on tablets */}
      {/* lg:grid-cols-3: 3 cards on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        <Card
          cityName="Kolkata"
          tagline="The City of Joy"
          description="Exploring the rich cultural heritage, colonial architecture, and vibrant streets of Kolkata."
          imageUrl={kolkataUrl}
        />
        <Card
          cityName="Mumbai"
          tagline="The City of Dreams"
          description="Discovering the bustling metropolis of Mumbai, known for its film industry and street food."
          imageUrl={mumbaiUrl}
        />
        <Card
          cityName="Delhi"
          tagline="The City of Heritage"
          description="Immerse yourself in the historical significance of Delhi, blending ancient and modern."
          imageUrl={delhiUrl}
        />
      </div>
    </div>
  );
}

export default App;
