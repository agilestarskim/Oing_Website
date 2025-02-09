import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

const Section = styled.section`
  padding: ${({ theme }) => theme.container.padding.desktop};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: ${({ theme }) => theme.colors.text.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.container.padding.mobile};
  }
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`

const Content = styled.div`
  flex: 1;
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
  }
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
  line-height: 1.6;
`

const StoreButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`

const StoreButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  min-width: 200px;
  
  &:hover {
    transform: translateY(-2px);
  }
`

const MockupContainer = styled(motion.div)`
  width: 300px;
  margin: 0 auto;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
  
  .gatsby-image-wrapper {
    border-radius: ${({ theme }) => theme.borderRadius.large};
    overflow: hidden;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 260px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 220px;
  }
`

export const DownloadCTA = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Title>지금 바로 시작하세요</Title>
          <Description>
            하루 5분으로 시작하는 영어 공부,
            <br />
            오잉과 함께라면 당신도 할 수 있습니다.
          </Description>
          <StoreButtons>
            <StoreButton
              href="#"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              App Store
            </StoreButton>
            <StoreButton
              href="#"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Google Play
            </StoreButton>
          </StoreButtons>
        </Content>
        <MockupContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <StaticImage
            src="../../images/screenshot.jpg"
            alt="오잉 앱 스크린샷"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            quality={95}
            style={{ width: '100%', height: 'auto' }}
          />
        </MockupContainer>
      </Container>
    </Section>
  )
} 