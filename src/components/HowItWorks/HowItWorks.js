import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: ${({ theme }) => theme.container.padding.desktop};
  
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
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.colors.background.secondary};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 30px;
    }
  }
`

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.$isEven ? 'flex-start' : 'flex-end'};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
    padding-left: 80px;
  }
`

const Content = styled.div`
  width: 45%;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    top: 50%;
    ${props => props.$isEven ? 'right: -60px' : 'left: -60px'};
    transform: translateY(-50%);
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: -60px;
    }
  }
`

const Step = styled.div`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const StepTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`

const MockupContainer = styled(motion.div)`
  width: 200px;
  height: 400px;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
`

const steps = [
  {
    step: 'STEP 1',
    title: '앱 다운로드',
    description: '앱스토어 또는 구글플레이에서 오잉을 다운로드하세요.',
  },
  {
    step: 'STEP 2',
    title: '학습 수준 테스트',
    description: '간단한 테스트로 나의 영어 실력을 확인하고 맞춤 학습을 시작하세요.',
  },
  {
    step: 'STEP 3',
    title: '하루 5분 학습',
    description: '매일 5분씩 나에게 맞는 단어를 학습하고 복습하세요.',
  },
  {
    step: 'STEP 4',
    title: '성장 확인',
    description: '데일리 리포트로 나의 영어 실력 향상을 확인하세요.',
  },
]

const itemVariants = {
  hidden: ({ $isEven }) => ({
    opacity: 0,
    x: $isEven ? -100 : 100
  }),
  visible: {
    opacity: 1,
    x: 0
  }
}

export const HowItWorks = () => {
  return (
    <Section>
      <Container>
        <Title>이렇게 시작하세요</Title>
        <Timeline>
          <MockupContainer
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
          />
          {steps.map((step, index) => (
            <TimelineItem
              key={step.step}
              $isEven={index % 2 === 0}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              custom={{ $isEven: index % 2 === 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <Content $isEven={index % 2 === 0}>
                <Step>{step.step}</Step>
                <StepTitle>{step.title}</StepTitle>
                <Description>{step.description}</Description>
              </Content>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  )
} 