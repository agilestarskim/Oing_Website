import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Section = styled.section`
  padding: ${({ theme }) => theme.container.padding.desktop};
  background: ${({ theme }) => theme.colors.background.primary};
  
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

const AccordionList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const AccordionItem = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
`

const QuestionButton = styled.button`
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.xl};
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.dark}11;
  }
`

const AccordionContent = styled(motion.div)`
  overflow: hidden;
`

const Answer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`

const Icon = styled(motion.span)`
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.primary};
    top: 50%;
    left: 50%;
  }
  
  &::before {
    width: 12px;
    height: 2px;
    transform: translate(-50%, -50%);
  }
  
  &::after {
    width: 2px;
    height: 12px;
    transform: ${({ $isOpen }) => 
      $isOpen ? 'translate(-50%, -50%) scaleY(0)' : 'translate(-50%, -50%)'};
    transition: transform 0.2s ease;
  }
`

const faqs = [
  {
    question: "하루 5분으로 정말 영어 실력이 늘까요?",
    answer: "네, 가능합니다! 꾸준한 학습이 핵심입니다. 하루 5분이라는 짧은 시간이지만, 매일 꾸준히 하다 보면 어느새 단어 실력이 쌓여있는 것을 발견하실 수 있습니다."
  },
  {
    question: "무료로 사용할 수 있나요?",
    answer: "기본적인 학습 기능은 무료로 제공됩니다. 더 많은 기능을 원하시는 분들을 위한 프리미엄 플랜도 준비되어 있습니다."
  },
  {
    question: "학습 진도는 어떻게 관리되나요?",
    answer: "AI가 사용자의 학습 패턴과 성취도를 분석하여 최적화된 학습 콘텐츠를 제공합니다. 데일리 리포트를 통해 자신의 진도와 성장을 확인할 수 있습니다."
  },
  {
    question: "오프라인에서도 학습할 수 있나요?",
    answer: "네, 가능합니다. 인터넷 연결이 없는 환경에서도 기본적인 학습 기능을 이용할 수 있도록 오프라인 모드를 지원합니다."
  },
  {
    question: "학습 내용을 커스터마이징할 수 있나요?",
    answer: "물론입니다! 자신의 목표와 관심사에 맞춰 학습 콘텐츠를 설정할 수 있습니다. 비즈니스, 일상회화, 시험 준비 등 원하는 카테고리를 선택할 수 있습니다."
  }
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <Section>
      <Container>
        <Title>자주 묻는 질문</Title>
        <Subtitle>
          오잉 서비스에 대해 궁금하신 점을 확인해보세요
        </Subtitle>
        <AccordionList>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              initial={false}
              animate={{ 
                backgroundColor: openIndex === index 
                  ? ({ theme }) => theme.colors.background.dark + '22'
                  : ({ theme }) => theme.colors.background.secondary
              }}
              transition={{ duration: 0.2 }}
            >
              <QuestionButton
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <Icon $isOpen={openIndex === index} />
              </QuestionButton>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <AccordionContent
                    key="content"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ 
                      duration: 0.2,
                      ease: [0.04, 0.62, 0.23, 0.98] 
                    }}
                  >
                    <Answer>{faq.answer}</Answer>
                  </AccordionContent>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </AccordionList>
      </Container>
    </Section>
  )
} 