import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import postsData from "../common/api/diaryApi.json";

// Main container
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fdfdfd;
  position: relative;
`;

// Original promo image
const PromoImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 390 / 289;
  margin-top: 20px;
  object-fit: cover;
`;

// Original single image
const SingleImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 390 / 437;
  object-fit: cover;
  margin-bottom: 20px;
  cursor: pointer; // 클릭 커서 추가
`;

// Container for search button
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #00300e;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Search text
const SearchText = styled.h2`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

// Diary text
const DiaryText = styled.h2`
  color: black;
  font-size: 20px;
  margin-bottom: 20px;
`;

// Plant diary container
const PlantDiaryContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

// Plant diary grid
const PlantDiaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 0 20px;
`;

// Plant diary image container with link
const DiaryImageLink = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

// Plant diary image
const DiaryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

// Likes container
const LikesContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

// Likes icon
const LikeIcon = styled.span`
  margin-right: 5px;
`;

// Button styled component
const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 5px;
  margin: 10px 0;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// Footer with additional information
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 20px;
  background-color: #e0e0e0;
  /* text-align: center; */
  font-size: 14px;
  color: #555;
  padding-bottom: 120px;
`;

// Footer link
const FooterLink = styled.a`
  color: #4caf50;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // JSON 데이터를 로드합니다.
    setPosts(postsData.posts.slice(0, 4)); // 처음 4개 항목만 가져옵니다.
  }, []);

  const handlePostClick = (id) => {
    navigate(`/diary/${id}`);
  };

  const handleImageClick = () => {
    navigate("/campaign"); // 캠페인 페이지로 이동
  };

  return (
    <MainContainer>
      <Header />

      <PromoImage src="/assets/img/main 이미지.png" alt="Promo" />
      <SearchContainer>
        <SearchText>"나만의 식물을 찾는 여행"</SearchText>
        <Button onClick={() => navigate("/search")}>나의 식물 찾기🌱</Button>
      </SearchContainer>
      <PlantDiaryContainer>
        <DiaryText>🌱 금주 Top 식물 일기</DiaryText>
        <PlantDiaryGrid>
          {posts.map((post) => (
            <DiaryImageLink
              key={post.id}
              onClick={() => handlePostClick(post.id)}
            >
              <DiaryImage src={post.img} alt={post.title} />
              <LikesContainer>
                <LikeIcon>❤️</LikeIcon>
                <span>{post.likes}</span>
              </LikesContainer>
            </DiaryImageLink>
          ))}
        </PlantDiaryGrid>
      </PlantDiaryContainer>
      <SingleImage
        src="/assets/img/이벤트란.png"
        alt="Single"
        onClick={handleImageClick}
      />
      <FooterContainer>
        <p>Created by Likelion SKHU 12th</p>
        <FooterLink href="https://github.com/likelion-skhu/12th">
          GitHub 주소
        </FooterLink>
        <p>📞 010-1234-1234</p>
      </FooterContainer>
      <Footer />
    </MainContainer>
  );
};
