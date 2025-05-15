import { AboutContainer, ExternalLink, List, ListItem, Paragraph, Subtitle, Title } from "./styles";

export default function About() {
    return (
        <AboutContainer>
            <Title>Sobre o PopFlix</Title>

            <Paragraph>
                O <strong>PopFlix</strong> é um projeto desenvolvido para praticar o consumo de APIs REST, rotas dinâmicas e componentização com React. Ele permite aos usuários buscar por filmes, visualizar detalhes e navegar por diferentes categorias como lançamentos e filmes populares.
            </Paragraph>

            <Subtitle>Funcionalidades</Subtitle>
            <List>
                <ListItem>🔍 Busca por nome de filmes</ListItem>
                <ListItem>🎬 Exibição de detalhes como nota, sinopse e data de lançamento</ListItem>
                <ListItem>📺 Listagens de filmes populares, lançamentos e top-rated</ListItem>
                <ListItem>📱 Visual responsivo e moderno</ListItem>
            </List>

            <Subtitle>Tecnologias utilizadas</Subtitle>
            <List>
                <ListItem>⚛️ React</ListItem>
                <ListItem>🧭 React Router</ListItem>
                <ListItem>💅 Styled-components</ListItem>
                <ListItem>📡 API da TMDb</ListItem>
            </List>

            <Subtitle>Objetivo</Subtitle>
            <Paragraph>
                Este projeto foi criado como parte do meu processo de aprendizado e faz parte do meu portfólio como estudante de Análise e Desenvolvimento de Sistemas.
            </Paragraph>

            <Subtitle>Créditos</Subtitle>
            <Paragraph>
                Os dados utilizados neste site são fornecidos pela{' '}
                <ExternalLink href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                    The Movie Database (TMDb)
                </ExternalLink>.
            </Paragraph>

            <Subtitle>GitHub</Subtitle>
            <Paragraph>
                Você pode ver o código-fonte deste projeto no meu GitHub:{' '}
                <ExternalLink href="https://github.com/BrunoCaian/PopFlix" target="_blank" rel="noopener noreferrer">
                    github.com/BrunoCaian/PopFlix
                </ExternalLink>
            </Paragraph>
        </AboutContainer>
    );
}