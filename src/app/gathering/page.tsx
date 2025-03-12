import MainCardItem from "@/components/layout/MainCardItem";

const cardData = {
  id: 0,
  name: "달램핏 오피스 스트레칭",
  dateTime: new Date(),
  registrationEnd: new Date(),
  location: "강남구",
  participantCount: 6,
  capacity: 20,
  image: "https://picsum.photos/200/300",
};

const Page = () => {
  return (
    <div>
      <h1>Welcome to the Gathering Page</h1>
      <div className="base-wrap">
        <MainCardItem
          key={cardData.id}
          name={cardData.name}
          dateTime={cardData.dateTime}
          registrationEnd={cardData.registrationEnd}
          location={cardData.location}
          participantCount={cardData.participantCount}
          capacity={cardData.capacity}
          image={cardData.image}
        />
      </div>
    </div>
  );
};

export default Page;
