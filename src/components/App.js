// create your App component here
import { useState, useEffect } from "react";

export default function App() {
  const [randomDog, setRandomDog] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const dog = await response.json();
      console.log(dog.message);
      setRandomDog(dog.message);
      setIsLoaded(true);
    };
    fetchDogImage();
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return <img src={randomDog} alt="A Random Dog" />;
}
