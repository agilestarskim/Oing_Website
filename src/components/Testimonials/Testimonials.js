import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: ${({ theme }) => theme.container.padding.desktop};
  background: ${({ theme }) => theme.colors.background.secondary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.container.padding.mobile};
  }
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`

const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`

const ReviewCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background.secondary};
  margin-right: ${({ theme }) => theme.spacing.md};
`

const UserInfo = styled.div`
  flex: 1;
`

const Username = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const Date = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
`

const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Star = styled.span`
  color: ${({ theme, $filled }) => 
    $filled ? theme.colors.accent : theme.colors.text.light};
`

const Review = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  font-size: ${({ theme }) => theme.typography.fontSize.body};
`

const reviews = [
  {
    id: 1,
    username: "영어초보자",
    date: "2024.03.15",
    rating: 5,
    review: "하루 5분이라는 시간이 부담스럽지 않아서 좋아요. 꾸준히 하다보니 실력이 늘고 있는게 느껴져요!"
  },
  {
    id: 2,
    username: "직장인토익러",
    date: "2024.03.14",
    rating: 4,
    review: "출퇴근길에 공부하기 딱 좋아요. 게임하는 것처럼 재미있게 단어를 외울 수 있어서 좋네요."
  },
  {
    id: 3,
    username: "영어마스터",
    date: "2024.03.13",
    rating: 5,
    review: "AI가 내 학습 패턴을 분석해서 단어를 추천해주는 게 정말 효과적인 것 같아요. 강추합니다!"
  },
  {
    id: 4,
    username: "대학생입니다",
    date: "2024.03.12",
    rating: 5,
    review: "토익 공부하면서 같이 하고 있는데, 기초 단어부터 차근차근 늘려가니까 좋아요."
  },
  {
    id: 5,
    username: "영어조아",
    date: "2024.03.11",
    rating: 4,
    review: "레벨업 시스템이 동기부여가 돼요. 매일매일 하게 되네요!"
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const Testimonials = () => {
  return (
    <Section>
      <Container>
        <Title>사용자 후기</Title>
        <Subtitle>
          실제 오잉을 사용하고 계신 분들의 생생한 후기를 확인해보세요
        </Subtitle>
        <Grid>
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <ReviewHeader>
                <Avatar />
                <UserInfo>
                  <Username>{review.username}</Username>
                  <Date>{review.date}</Date>
                </UserInfo>
              </ReviewHeader>
              <Stars>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} $filled={star <= review.rating}>
                    ★
                  </Star>
                ))}
              </Stars>
              <Review>{review.review}</Review>
            </ReviewCard>
          ))}
        </Grid>
      </Container>
    </Section>
  )
} 