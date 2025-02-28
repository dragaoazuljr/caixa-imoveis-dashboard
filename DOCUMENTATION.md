# Documentação Técnica do Projeto: Sistema de Visualização de Imóveis da Caixa

Esta documentação descreve a arquitetura, as tecnologias e as decisões técnicas definidas até o momento para o desenvolvimento do sistema de visualização de imóveis da Caixa.

## 3. Arquitetura do Front-End

### 3.1. Framework e Ferramentas

- **Framework Principal:** Angular  
  Devido à experiência do time e à robustez oferecida pelo Angular para desenvolvimento de Single Page Applications (SPAs).

- **Gerenciamento de Estado:**  
  Utilização de **NgRx** ou **NGXS** para centralizar e gerenciar o estado da aplicação.  
  - NgRx segue o padrão Redux e é amplamente adotado.
  - NGXS é uma alternativa mais simples e moderna.

- **Testes Unitários:**  
  Angular já integra **Jasmine** e **Karma** para testes unitários de componentes, serviços e gerenciamento de estado.

- **Mapas e Visualizações:**  
  - **Leaflet** ou **Mapbox GL JS** para renderização de mapas interativos.
  - **Google Maps API** para integrar o Street View e seu histórico, além do modo satélite.

### 3.2. Estrutura de Diretórios Sugerida

```
/src
  /app
    /core                 # Serviços e funcionalidades globais
      /auth               # Funcionalidades de autenticação (futuras implementações JWT)
      /interceptors       # Interceptadores HTTP (para inclusão de token JWT em requisições)
      /services           # Serviços reutilizáveis (ex.: processamento de CSV, chamadas de API)
    /features             # Módulos de funcionalidades principais
      /imoveis            # Componentes relacionados à visualização dos imóveis
      /mapa               # Componentes e serviços para o mapa interativo
      /street-view        # Componentes para integração com Street View
    /shared               # Componentes, diretivas e pipes reutilizáveis
      /components         # Componentes UI globais (botões, filtros, etc.)
      /directives         # Diretivas personalizadas
      /pipes              # Pipes para formatação e transformação de dados
    /store                # Gerenciamento de estado (NgRx/NGXS)
      /actions            # Ações para modificar o estado
      /reducers           # Funções puras para atualização do estado
      /effects            # Efeitos para operações assíncronas (chamadas a APIs, etc.)
      /selectors          # Seletores para consulta de estado
  /assets                 # Arquivos estáticos (imagens, fontes, etc.)
  /environments           # Configurações de ambiente (desenvolvimento, produção)
  /styles                 # Arquivos de estilo globais
```

---

## 4. Integração com APIs Externas e Considerações sobre Backend

### 4.1. Cenário Atual (Apenas Front-End)
- **Processamento do CSV:**  
  O front-end realizará o upload e o processamento do CSV de forma local, sem necessidade de persistência em um banco de dados.
- **Busca de Dados Adicionais:**  
  A aplicação poderá consultar APIs externas diretamente do front-end para obter dados como preço médio por m² e histórico de preços.  
  **Atenção:** Caso alguma API necessite de uma chave de API, o uso direto no front-end pode representar um risco.  
  - Neste cenário, pode-se optar por um back-end mínimo no futuro para intermediar essas chamadas.

### 4.2. Futuras Considerações para Backend
Embora a aplicação seja inicialmente implementada apenas no front-end, as seguintes funcionalidades podem exigir um back-end:
- **Intermediação de APIs com Chaves Sensíveis:**  
  Um serviço back-end para intermediar chamadas a APIs externas que requerem chaves, evitando a exposição dessas chaves no cliente.
- **Autenticação com JWT:**  
  Mesmo sem um sistema de login para usuários, a comunicação segura com serviços externos pode se beneficiar do uso de tokens JWT via interceptadores HTTP no Angular.
- **Armazenamento Temporário/Caching:**  
  Caso haja necessidade de cache ou armazenamento temporário dos dados processados para melhorar a performance.

---

## 5. Fluxo de Dados e Comunicação

### Upload e Processamento do CSV
1. O usuário realiza o upload do arquivo CSV.
2. Um serviço no Angular processa o arquivo localmente, extraindo os dados necessários.
3. Os dados são armazenados no estado global (NgRx/NGXS) para serem acessados pelos componentes.

### Exibição e Interação no Mapa
1. Os dados dos imóveis são enviados para um componente do mapa (Leaflet/Mapbox).
2. O usuário interage com os filtros e seleciona imóveis no mapa.
3. Ao selecionar um imóvel, o componente exibe os detalhes, incluindo visualizações via Street View e satélite.

### Consulta de Dados Externos (Enriquecimento)
1. O front-end faz requisições a APIs externas para obter dados adicionais (preço médio, histórico de preços).
2. Esses dados são integrados à visualização do imóvel.
3. Futuramente, um backend poderá intermediar essas requisições para segurança.

---

## 6. Considerações sobre Segurança

- **Chaves de API:**  
  Evitar expor chaves de API no front-end. Em futuras implementações, utilizar um back-end ou serviços de proxy para gerenciar chamadas que necessitem de autenticação sensível.
  
- **Comunicação Segura:**  
  Garantir que todas as requisições a serviços externos sejam feitas por HTTPS.
  
- **JWT (Futuro):**  
  Preparar a infraestrutura para autenticação via JWT, utilizando interceptadores HTTP para adicionar tokens às requisições quando necessário.

---

## 7. Testes e Qualidade

- **Testes Unitários:**  
  Utilização do Jasmine e Karma para testar componentes, serviços e gerenciamento de estado.
- **Testes de Integração:**  
  Testar a integração entre componentes e a comunicação com APIs externas (simulada, se necessário).
- **Boas Práticas:**  
  Adoção de linting, code reviews e integração contínua para garantir a qualidade do código.

---

## 8. Conclusão

A arquitetura definida foca inicialmente em uma aplicação front-end robusta utilizando Angular, com gerenciamento de estado (NgRx ou NGXS) e testes unitários integrados. A aplicação processará localmente os dados do CSV e exibirá os imóveis em um mapa interativo com visualizações enriquecidas. Funcionalidades que exijam segurança adicional (como o uso de chaves de API ou autenticação) serão contempladas para uma futura integração de um back-end mínimo.

Esta abordagem permite um desenvolvimento ágil do MVP, com a flexibilidade para escalar e integrar novos recursos conforme o projeto evolui.

---
