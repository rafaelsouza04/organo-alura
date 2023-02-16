import './Footer.css'

const Footer = () => {
    return (
            <footer className='footer'>
                <div className='contatos'>
                    <img src='/imagens/fb.png' alt='imagem facebook'></img>
                    <img src='/imagens/tw.png' alt='imagem twitter'></img>
                    <img src='/imagens/ig.png' alt='imagem instagram'></img>
                </div>
                <div>
                    <img src='/imagens/logo.png' alt='logo organo'></img>
                </div>
                <div>
                    <h6 id='titulo__footer'>Desenvolvido por Alura.</h6>
                </div>
            </footer>
    )
}

export default Footer
