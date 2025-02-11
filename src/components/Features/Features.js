import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

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
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-size: ${({ theme }) => theme.typography.fontSize.large};
`

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`

const FeatureItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  
  &:nth-child(even) {
    direction: rtl;
    
    > * {
      direction: ltr;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    
    &:nth-child(even) {
      direction: ltr;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.h4};
  }
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.body};
  }
`

const Screenshot = styled(motion.div)`
  width: 260px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
  
  .gatsby-image-wrapper {
    display: block !important;
    border-radius: inherit;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
  }
`

const features = [
  {
    title: "AI 기반 맞춤형 학습",
    description: "사용자의 학습 패턴과 성취도를 분석하여 최적화된 학습 콘텐츠를 제공합니다. 당신의 페이스에 맞는 효율적인 학습이 가능합니다.",
    image: "/images/feature-1.png" // 실제 스크린샷 이미지로 교체 필요
  },
  {
    title: "게임처럼 재미있는 학습",
    description: "단순 암기가 아닌 다양한 게임형 학습 방식으로 지루할 틈 없이 영어 실력을 키울 수 있습니다.",
    image: "/images/feature-2.png"
  },
  {
    title: "체계적인 복습 시스템",
    description: "과학적으로 검증된 복습 주기에 따라 효과적으로 단어를 장기 기억으로 저장할 수 있습니다.",
    image: "/images/feature-3.png"
  }
]

export const Features = () => {
  return (
    <Section>
      <Container>
        <Title>주요 기능</Title>
        <Subtitle>
          하루 5분, 꾸준한 학습을 도와주는 오잉의 특별한 기능들을 만나보세요
        </Subtitle>
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Content>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <Description>{feature.description}</Description>
              </Content>
              <Screenshot
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <StaticImage
                  src="../../images/screenshot.png"
                  alt={feature.title}
                  placeholder="blurred"
                  formats={["auto", "webp", "avif"]}
                  quality={95}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Screenshot>
            </FeatureItem>
          ))}
        </FeatureList>
      </Container>
    </Section>
  )
} 