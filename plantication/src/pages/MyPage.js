import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(
    process.env.PUBLIC_URL + "/assets/img/user.png" // 기본 이미지 경로 설정
  );

  const handleProfileEdit = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleInquiry = () => {
    window.open(
      "https://docs.google.com/forms/d/your-google-form-link",
      "_blank"
    );
  };

  return (
    <PageContainer>
      <Title>마이페이지</Title>
      <Section>
        {/* <SectionTitle>프로필 수정</SectionTitle> */}
        <Content>
          <ProfileEditContainer>
            <ProfileImage src={profileImage} alt="Profile" />
            <Content>사용자명</Content>
            <EditButton>
              프로필 이미지 변경
              <input type="file" onChange={handleProfileEdit} />
            </EditButton>
          </ProfileEditContainer>
        </Content>
      </Section>
      <Section>
        <SectionTitle>익명일기</SectionTitle>
        <Content>
          <SubSection onClick={() => navigate("/my-anonymous-diaries")}>
            내 익명 일기 모아보기
          </SubSection>
          <SubSection onClick={() => navigate("/my-comments")}>
            내가 작성한 댓글
          </SubSection>
          <SubSection onClick={() => navigate("/my-likes")}>
            내 좋아요 모아보기
          </SubSection>
        </Content>
      </Section>
      <Section onClick={() => navigate("/cooperate")}>
        <SectionTitle>공동재배</SectionTitle>
        <Content>공동재배 페이지로 이동</Content>
      </Section>
      <Section onClick={() => navigate("/guide")}>
        <SectionTitle>식물도감</SectionTitle>
        <Content>식물도감 페이지로 이동</Content>
      </Section>
      <Section>
        <SectionTitle>공지사항</SectionTitle>
        <Content>
          <InquiryButton onClick={handleInquiry}>
            개발자에게 문의하기
          </InquiryButton>
        </Content>
      </Section>
      <Footer />
    </PageContainer>
  );
}

export default MyPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 120px; /* Adjusted padding for Footer */
  box-sizing: border-box;
  background-color: #fdfdfd;
  align-items: center;
  padding-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #000;
  font-weight: bold;
  padding-top: 20px;
`;

const Section = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Shadow added */
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: bold;
  color: #000;
`;

const Content = styled.div`
  font-size: 16px;
  margin: 0;
`;

const ProfileEditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

const ProfileImage = styled.img`
  width: 40px; /* 정사각형 크기로 설정 */
  height: 40px; /* 정사각형 크기로 설정 */
  border-radius: 50%;
  margin-right: 10px;
`;

const EditButton = styled.label`
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: #e9ebf1; /* Color changed */
  color: #000;
  cursor: pointer;
  position: relative;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  &:hover {
    background-color: #d3d4d9; /* Hover effect */
  }
`;

const SubSection = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #e9ebf1; /* Color changed */
  color: #000;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #d3d4d9; /* Hover effect */
  }
`;

const InquiryButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: #e9ebf1; /* Color changed */
  color: #000;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #d3d4d9; /* Hover effect */
  }
`;
