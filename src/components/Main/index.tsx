import * as S from './styles'

const Main = ({
  title = 'Next Boilerplate',
  description = 'ReactJS, TypeScript, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/images/next.svg"
      alt="Uma desenvolvedora ao lado da palavra next.js"
    />
  </S.Wrapper>
)

export default Main
