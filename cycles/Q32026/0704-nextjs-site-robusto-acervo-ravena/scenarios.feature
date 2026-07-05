# language: pt
# Ciclo: 0704-nextjs-site-robusto-acervo-ravena
# Feature: site institucional Acervo Ravena

Funcionalidade: Site institucional do Acervo Ravena
  Como visitante interessado no legado do Ravena Cassino Hotel
  Quero navegar por uma página que preserve a memória documental
  Para conhecer a história, ver o acervo e ler relatos

  Cenário: Visitante acessa a página principal
    Dado que estou na página inicial do Acervo Ravena
    Então vejo o hero com imagens do hotel
    E vejo as seções de história, linha do tempo, acervo e relatos
    E o site está em português brasileiro

  Cenário: Visitante navega pelo menu do cabeçalho
    Dado que estou na página inicial
    Quando clico em "História" no menu
    Então sou levado à seção de história do Ravena
    Quando clico em "Acervo" no menu
    Então sou levado à galeria fotográfica
    Quando clico em "Relatos" no menu
    Então sou levado à seção de relatos

  Cenário: Visitante explora a linha do tempo
    Dado que estou na seção de linha do tempo
    Então vejo um ano em destaque com texto descritivo abaixo
    Quando avanço para o próximo marco temporal
    Então o ano em destaque muda
    E o texto descritivo exibido corresponde ao novo marco

  Esquema do Cenário: Visitante seleciona marcos da linha do tempo
    Dado que estou na seção de linha do tempo com o marco "<ano>" em destaque
    Quando seleciono o marco "<proximo>"
    Então vejo "<proximo>" em destaque
    E vejo o texto sobre "<titulo>"

    Exemplos:
      | ano  | proximo | titulo           |
      | 1930 | 1942    | Anos Dourados    |
      | 1942 | 1946    | A Proibição      |
      | 2024 | 1930    | O Projeto        |

  Cenário: Visitante consulta o acervo fotográfico
    Dado que estou na seção de acervo
    Então vejo fotografias reais do acervo em grade
    Quando clico em uma fotografia
    Então vejo a imagem ampliada
    E posso fechar a visualização ampliada

  Cenário: Visitante lê o depoimento do gerente atual
    Dado que estou na página inicial
    Então vejo em destaque a citação de Juliano sobre o impacto do Ravena em Laguna
    E vejo o depoimento de Juliano também na seção de relatos

  Cenário: Visitante conhece o projeto do acervo
    Dado que estou no rodapé da página
    Quando acesso o link sobre o projeto
    Então vejo informações sobre a missão do acervo documental

  Cenário: Visitante usa o site em dispositivo móvel
    Dado que estou em uma tela estreita
    Então consigo abrir o menu de navegação
    E consigo acessar história, acervo e relatos
    E consigo navegar na linha do tempo
    E consigo ver a galeria do acervo
