import { HeaderContainer, HeaderContent } from './styles'
import IgniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={IgniteLogo} alt="" />
        
        <button>Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  )
}