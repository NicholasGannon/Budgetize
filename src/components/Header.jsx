import Logo from '../assets/Logo.svg'

export default function Header() {
    return(
        <header className='py-8'>
            <img src={Logo} alt='Logo' />
        </header>
    )
}