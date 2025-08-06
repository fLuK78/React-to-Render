import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <section className="h-screen bg-cover bg-center flex items-center justify-center bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-5xl font-bold mb-4 text-blue-950">
                This is Pet Shop.
              </h2>
              <p className="text-black mb-6 text-lg font-semibold">
                Welcome to the magical pet shop — pick any creature your heart desires!
              </p>
              
              <Link to="/Products">
                <Button />
              </Link>
            </div>

            {/* Image Frame */}
            <div className="flex-1 max-w-md w-full border-4 border-blue-300 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://i.pinimg.com/736x/d3/8d/71/d38d715b3a19336cf42785bf35fe7d9f.jpg"
                alt="Magical Pet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
