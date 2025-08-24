# qa.automationexercise-web.webdriverio


[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![WebdriverIO](https://img.shields.io/badge/WebdriverIO-9.x-blue.svg)](https://webdriver.io/)
[![Mocha](https://img.shields.io/badge/Mocha-Test%20Framework-yellow.svg)](https://mochajs.org/)
[![Allure](https://img.shields.io/badge/Allure-Reporting-orange.svg)](https://docs.qameta.io/allure/)

> Projeto de automação de testes web utilizando WebDriverIO para o site [Automation Exercise](https://automationexercise.com/)

## Sobre o projeto

Este projeto implementa testes automatizados para o site [Automation Exercise](https://automationexercise.com/), uma plataforma de e-commerce utilizada para práticas de automação de testes. 


## Tecnologias utilizadas

- [Node.js](https://nodejs.org) | Runtime JavaScript multiplataforma para servidor e CLIs.
- [WebdriverIO](https://webdriver.io) | Framework de automação (web/mobile) baseado em WebDriver/BiDi e Appium.
- [Mocha](https://mochajs.org) | Framework de testes JS simples e flexível para Node e navegador.
- [ChromeDriver](https://developer.chrome.com/docs/chromedriver) | Servidor standalone que implementa o protocolo WebDriver/BiDi para Chrome.
- [Allure Reporter (WDIO)](https://webdriver.io/docs/allure-reporter/) | Plugin do WebdriverIO para gerar relatórios Allure.
- [Faker.js](https://fakerjs.dev) | Geração de dados fake (realistas) para testes e desenvolvimento.
- [ESLint](https://eslint.org) | Linter pluggable para encontrar e corrigir problemas em JavaScript.
- [Prettier](https://prettier.io) | Formatador de código opinativo com integração nos principais editores.


## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) versão 14 ou superior
- [npm](https://www.npmjs.com/) (normalmente já incluso com o Node.js)

  
## Como instalar e executar o projeto 

### 1. Clone o repositório

```bash
# Clone o repositório
git clone git@github.com:andressabessa/qa.automationexercise-web.webdriverio.git

# Navegue para o diretório do projeto
cd qa.automationexercise-web.webdriverio
```

### 2. Instale as dependências

```bash
# Instale todas as dependências do projeto
npm install
```

## Estrutura dos diretórios

Abaixo está um desenho exemplificando a estrutura básica do projeto:

```
qa.automationexercise-web.webdriverio/
├──  data/                    # Dados de teste
│   ├── productsItems.js       # Dados de produtos
│   └── userRegister.js        # Dados de usuário
├──  test/
│   ├── elements/           # Seletores dos elementos
│   │   ├── cart.elements.js
│   │   ├── home.elements.js
│   │   ├── login.elements.js
│   │   ├── products.elements.js
│   │   └── register.elements.js
│   ├── pageobjects/        # Page Objects
│   │   ├── cart.page.js
│   │   ├── home.page.js
│   │   ├── login.page.js
│   │   ├── products.page.js
│   │   └── register.page.js
│   └──  specs/              # Testes
│       ├── addProductsInCart.spec.js
│       ├── registerUser.spec.js
│       ├── removeProductsFromCart.spec.js
│       ├── searchProduct.spec.js
│       └── verifyProductQuantity.spec.js
├──  wdio.conf.js            # Configuração do WebDriverIO
├──  package.json            # Dependências e scripts
├── .nvmrc                  # Versão do Node.js
├── .gitignore              # Arquivos ignorados pelo Git
└──  README.md               # Este arquivo
```


## Executando os testes

### Executar todos os testes

```bash
# Executar todos os testes
npm run wdio
```

### Executar testes específicos

```bash
# Executar apenas um teste específico
npm run wdio -- --spec test/specs/registerUser.spec.js

# Executar múltiplos testes
npm run wdio -- --spec test/specs/registerUser.spec.js test/specs/searchProduct.spec.js
```


### Como gerar os relatórios


O projeto utiliza o **Allure Framework** para geração de relatórios detalhados:

```bash
# Gerar relatório
npm run allure:report
```

> Exemplo: <img width="1042" height="563" alt="image" src="https://github.com/user-attachments/assets/d0a609b7-d52a-4b39-87cb-273aea0b6f68" />



#### Informações do relatório

- **Execução de Testes**: Status de cada teste
- **Tempo de Execução**: Duração de cada teste
- **Screenshots**: Capturas de tela em caso de falha
- **Logs**: Logs detalhados da execução
- **Métricas**: Estatísticas de sucesso/falha

### Localização dos relatórios

- **Dados brutos**: `allure-results/`
- **Relatório HTML**: `allure-report/` (gerado após execução)


### Contato

- **LinkedIn**: [Andressa Bessa](https://www.linkedin.com/in/andressabessaa/)
- **GitHub**: [@andressabessa](https://github.com/andressabessa)


---
