import TourCard from "./TourCard";

const Tours = () => {
  return (
    <div className='tours-page'>
      <h1>Top Destinations At “Miami”</h1>
      <div className='tour-cards'>
        <TourCard
          image='./assets/images/tour1.jpg'
          name='Matheson Hammock Park'
          description='The Pérez Art Museum Miami — officially known as the Jorge M. Pérez Art Museum of Miami...'
          priceRange={[100, 200]}
          numOfDays={3}
        />
        <TourCard
          image='./assets/images/tour2.jpg'
          name='Vizcaya Museum and Gardens'
          description='Vizcaya Museum and Gardens is the former villa and estate of businessman James Deering...'
          priceRange={[150, 250]}
          numOfDays={2}
        />
        <TourCard
          image='./assets/images/tour3.jpg'
          name='Miami Beach'
          description='Miami Beach is a south Florida island city, connected by bridges to mainland Miami...'
          priceRange={[200, 300]}
          numOfDays={4}
        />
      </div>
    </div>
  );
};

export default Tours;
