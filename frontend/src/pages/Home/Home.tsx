import { useQuery } from "@tanstack/react-query";
import { getPoster } from "../../configs/api/movie.config";
import Hero from "../../components/Hero/Hero";
import Container from "../../components/Container/Container";

const Home = () => {
  const { data: MovieData } = useQuery({
    queryKey: ["poster"],
    queryFn: () => getPoster(),
  });

  return (
    <div className="min-h-screen">
      <Hero data={MovieData?.data.data.data} />
      <div>
        <Container />
        <Container />
        <Container />
        <Container />
      </div>
    </div>
  );
};

export default Home;
