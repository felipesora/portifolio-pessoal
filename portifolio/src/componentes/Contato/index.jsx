import "./Contato.css";

const Contato = () => {
    return (
        <div id="contato">
            <div className="container_contato">
                <h1>CONTATO</h1>
                <p>
                    Tem interesse em conversar, colaborar ou apenas dizer um oi? Estou sempre
                    aberto a novas oportunidades e ideias. Você pode me encontrar pelas redes
                    abaixo:
                </p>
            </div>
            <ul>
                <li>
                    <a href="https://github.com/felipesora" target="_blank" className="icone_github">
                        <img src="imagens/icone-github-cinza.png" alt="ícone github" className="icone-normal" />
                        <img src="imagens/icone-github.png" alt="ícone github" className="icone-hover" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/felipesora/" target="_blank" className="icone_linkedin">
                        <img src="imagens/icone-linkedin-cinza.png" alt="ícone linkedin" className="icone-normal" />
                        <img src="imagens/icone-linkedin.png" alt="ícone linkedin" className="icone-hover" />
                    </a>
                </li>
                <li>
                    <a href="mailto:felipeusora@gmail.com" target="_blank" className="icone_email">
                        <img src="imagens/icone-email-cinza.png" alt="ícone email" className="icone-normal" />
                        <img src="imagens/icone-email.png" alt="ícone email" className="icone-hover" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contato;
