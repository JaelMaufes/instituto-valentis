Instituto Valentis - Site Institucional
Visão Geral do Projeto
Este repositório contém o site institucional do Instituto Valentis, uma organização focada em suporte imobiliário e soluções institucionais. O projeto começou como um blog pessoal em julho de 2024 e evoluiu para um site institucional a partir de 29 de março de 2025. O site inclui páginas como index.html (página inicial), sobre.html, contato.html, galeria.html, solucoes.html, politica.html, termos.html, licenca.html, além de páginas administrativas como admin.html e admin-coordinates.html. Há também uma aplicação específica para suporte imobiliário em imoveisivatuba.html.
O projeto utiliza HTML, CSS e JavaScript, com integrações externas como JSONBin (para armazenamento de dados) e ImgBB (para upload de imagens). A estrutura foi otimizada com SEO (sitemap.xml, robots.txt, manifest.json), segurança (.htaccess) e versionamento automatizado com standard-version.
Pré-requisitos
Antes de começar, certifique-se de ter os seguintes itens instalados:

Node.js e npm: Necessário para gerenciar dependências, usar a ferramenta standard-version e rodar o servidor local com live-server. Baixe e instale a partir de nodejs.org. Verifique a instalação com:node -v
npm -v


Git: Usado para versionamento do código. Verifique a instalação com:git --version


Navegador Web: Para visualizar o site localmente (recomendado: Chrome, Firefox ou Edge).
Editor de Código: Recomendado Visual Studio Code ou outro editor de sua preferência.

Instalação
Siga os passos abaixo para configurar o projeto localmente:

Clone o Repositório:
git clone https://github.com/JaelMaufes/instituto-valentis.git
cd instituto-valentis

Nota: Substitua o URL do repositório pelo URL real do seu projeto.

Instale as Dependências:O projeto utiliza standard-version para gerenciamento de versões e changelog, e live-server para rodar o site localmente. Instale as dependências com:
npm install


Visualize o Site Localmente:Use o live-server para rodar o site com recarregamento automático:
npm start

Isso abrirá o navegador automaticamente em http://localhost:8080, exibindo o index.html. Alternativamente, você pode abrir o arquivo index.html diretamente em um navegador, mas o live-server é recomendado para testar páginas em subdiretórios como /pages/.


Estrutura do Projeto
A estrutura de pastas do projeto é organizada da seguinte forma:
instituto-valentis/
│
├── /css/               # Arquivos de estilo (ex.: styles.css)
├── /docs/              # Documentos legais (ex.: termos.txt, politica.txt)
├── /fonts/             # Fontes personalizadas
├── /images/            # Imagens do site (ex.: logomarca, placeholder.PNG)
├── /js/                # Arquivos JavaScript (ex.: script.js, version.js)
├── /node_modules/      # Dependências do Node.js
├── /pages/             # Páginas secundárias (ex.: sobre.html, contato.html)
│   ├── /pages-antigo/  # Páginas antigas do site
│
├── index.html          # Página inicial do site
├── imoveisivatuba.html # Aplicação de suporte imobiliário
├── admin.html          # Painel administrativo
├── admin-coordinates.html # Página de coordenadas administrativas
├── gestao-imoveis.html # Gestão de imóveis
├── sitemap.xml         # Arquivo de SEO
├── robots.txt          # Configuração de crawlers
├── manifest.json       # Manifesto para PWA
├── .gitignore          # Arquivos e pastas ignorados pelo Git
├── .env                # Variáveis de ambiente (ex.: chaves de API)
├── .htaccess           # Configurações de segurança e redirecionamento HTTPS
├── .versionrc.json     # Configuração da ferramenta standard-version
├── CHANGELOG.md        # Registro de mudanças do projeto
├── README.md           # Documentação do projeto
├── package.json        # Dependências e scripts do projeto
├── package-lock.json   # Lockfile das dependências

Como Usar
Visualizar o Site

Use o comando npm start para iniciar o live-server e visualizar o site em http://localhost:8080.
Navegue pelas páginas secundárias (ex.: sobre.html, contato.html) acessando os links no menu ou diretamente via URL (ex.: http://localhost:8080/pages/sobre.html).

Funcionalidades Administrativas

Painel Admin (admin.html): Acesse para gerenciar dados, como deletar imóveis. Requer senha (definida no código).
Admin Coordinates (admin-coordinates.html): Visualize e gerencie coordenadas de geolocalização.
Gestão de Imóveis (gestao-imoveis.html): Interface para administração de imóveis.

Suporte Imobiliário

A página imoveisivatuba.html é uma aplicação à parte para suporte imobiliário. Inclui um carrossel de imagens (limite de 1 imagem por imóvel) e exibe até 5 imóveis.

Convenções de Commits
Para garantir que o versionamento e o changelog sejam gerados corretamente, todos os commits devem seguir o formato conventional-commits. Exemplos:

Nova funcionalidade (incrementa a versão minor):git commit -m "feat: adiciona página de serviços"


Correção de bug (incrementa a versão patch):git commit -m "fix: corrige erro no formulário de contato"


Mudança incompatível (incrementa a versão major):git commit -m "feat!: remove suporte a funcionalidade obsoleta"


Documentação (incrementa a versão patch):git commit -m "docs: atualiza README com novas instruções"


Outros tipos: style (estilização), refactor (refatoração), perf (melhorias de performance), test (testes), build (build), ci (CI/CD), chore (tarefas internas, não aparece no changelog).

Gerenciamento de Versões com standard-version
O projeto utiliza a ferramenta standard-version para automatizar o versionamento e a geração do CHANGELOG.md.
Pré-requisitos

Certifique-se de que as dependências estão instaladas (npm install).
Use mensagens de commit no formato conventional-commits.

Gerar uma Nova Versão

Faça alterações no projeto e commit suas mudanças:git add .
git commit -m "feat: adiciona nova funcionalidade ao painel admin"


Execute o script de release:npm run release

Isso irá:
Incrementar a versão no package.json (ex.: de 1.0.0 para 1.1.0 para um commit feat).
Atualizar o CHANGELOG.md com as novas mudanças.
Criar um commit e uma tag Git (ex.: v1.1.0).


Envie as mudanças para o repositório remoto:git push --follow-tags



Estrutura do Changelog
O CHANGELOG.md está dividido em três seções:

Blog Pessoal: Mudanças antes de 29/03/2025, quando o site era um blog.
Site Institucional do Instituto Valentis: Mudanças a partir de 29/03/2025.
Página imoveisivatuba.html: Registro de versões da aplicação de suporte imobiliário.

Após executar npm run release, as novas entradas serão adicionadas no topo do CHANGELOG.md. Você pode mover manualmente as entradas para a seção apropriada (ex.: "Site Institucional do Instituto Valentis").
Contribuição

Fork o repositório e crie uma branch para sua alteração:git checkout -b feat/nova-funcionalidade


Faça suas alterações e commit seguindo as convenções de commits.
Envie um Pull Request para a branch main.

Licença
Este projeto está licenciado sob os termos disponíveis em licenca.html. Para mais detalhes, consulte o arquivo ou baixe a versão em texto (licenca.txt).

Última atualização: 25 de abril de 2025
Teste de deploy
