import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import googlePlayBadge from '../../images/playstore-badge.png'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.container.padding.desktop};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.container.padding.mobile};
  }
`

const Content = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  
  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 36px;
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`

const MockupImage = styled(motion.div)`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
  
  .gatsby-image-wrapper {
    border-radius: ${({ theme }) => theme.borderRadius.large};
    overflow: hidden;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 360px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 280px;
  }
`

const StoreButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const StoreButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 0;
  box-shadow: none;

  img {
    height: 45px;
    width: auto;
  }
`

export const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <TextContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>하루 5분으로<br />시작하는 영어 공부</h1>
          <p>효율적인 단어 학습으로 영어 실력을 키워보세요</p>
          <StoreButtons>
            <StoreButton
              href="#"
              as={motion.a}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/images/appstore-badge.svg"
                alt="Download on the App Store" 
              />
            </StoreButton>
            <StoreButton
              href="#"
              as={motion.a}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={googlePlayBadge} 
                alt="GET IT ON Google Play" 
              />
            </StoreButton>
          </StoreButtons>
        </TextContent>
        <MockupImage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <StaticImage
            src="../../images/screenshot.jpg"
            alt="오잉 앱 스크린샷"
            placeholder="blurred"
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
            quality={95}
            loading="eager"
          />
        </MockupImage>
      </Content>
    </HeroSection>
  )
}