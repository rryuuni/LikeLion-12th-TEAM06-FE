import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import plantsData from "../common/api/plantsApi.json";

function GuidePage() {
  const [plants, setPlants] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setPlants(plantsData);
    // fetch("./common/api/plantsApi.json")
    //   .then((response) => response.json())
    //   .then((data) => setPlants(data));
  }, []);

  return (
    <MainContainer>
      <Header />
      <Title>Plant List</Title>
      <Container>
        {Object.keys(plants).length > 0 ? (
          Object.keys(plants).map((key) => (
            <GroupDetails key={plants[key].id}>
              <PlantImage src={plants[key].img} alt={plants[key].nickname} />
              <PlantText>
                <PlantTitle>{plants[key].nickname}</PlantTitle>
                <PlantDescription>{plants[key].descrption}</PlantDescription>
              </PlantText>
            </GroupDetails>
          ))
        ) : (
          <NoData>식물을 추가해주세요.</NoData>
        )}
      </Container>
      <AddBtn onClick={() => navigate("/guide/add")}> + </AddBtn>
      <Footer />
    </MainContainer>
  );
}

export default GuidePage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 390px;
  height: 100vh;
  box-sizing: border-box;
  background-color: #fdfdfd;
  margin: 0 auto;
  position: relative;
`;

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding-top: 30px;
`;

const GroupDetails = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-bottom: 1rem;
  height: 140px;
`;

const PlantImage = styled.img`
  width: 40%;
  height: auto;
  border-radius: 10px;
  margin-right: 1rem;
`;

const PlantText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlantTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const PlantDescription = styled.p`
  font-size: 14px;
  color: #777;
`;

const NoData = styled.div`
  font-size: 1.2rem;
  color: #ff0000;
`;

const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 100px;
  align-self: flex-end;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 30px;
  background-color: rgba(2, 93, 0, 0.6);
  color: white;
  cursor: pointer;
  margin-right: 15px;
`;
