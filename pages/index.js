import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Home = () => {
  return (

    <div>
      <Navbar />
      <Header />
      <main>
        <h1 className="text-4xl font-bold text-center">
          Welcome to Next.js with Tailwind CSS
        </h1>
      </main>


    </div>
  );
};

export default Home;
