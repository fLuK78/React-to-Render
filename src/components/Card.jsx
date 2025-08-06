const Card = ({ title, image }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg bg-white">
      <img className="w-full h-60 object-cover" src={image} alt={title} />
      <div className="text-gray-700 text-base text-center font-bold py-2">{title}</div>
    </div>
  );
};

const CardList = () => {
  const items = [
    {
      title: "Monkey",
      image: "https://i.pinimg.com/736x/81/b3/4f/81b34f15c8c54b5f207bab437c4c4033.jpg",
    },
    {
      title: "Cat",
      image: "https://i.pinimg.com/736x/40/90/74/40907432ede34dd436c6fe4833378dfb.jpg",
    },
    {
      title: "Goat",
      image: "https://i.pinimg.com/1200x/1d/59/5e/1d595e6dc1b6a3d963b932eb94de79d1.jpg",
    },
    {
      title: "Dog",
      image: "https://i.pinimg.com/736x/fb/16/45/fb164507d4c8a5a1986466bb5b5d3d8c.jpg",
    },
    {
      title: "Duck",
      image: "https://i.pinimg.com/736x/35/d9/d6/35d9d616e543accd07f10dda76641990.jpg",
    },
  ];

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((item, index) => (
          <Card key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
