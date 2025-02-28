# 🏠 Sistema de Visualização de Imóveis da Caixa  

> **Atenção:** A documentação técnica do projeto (leitura obrigatória) está no arquivo [DOCUMENTATION.md](DOCUMENTATION.md).

## 📌 Descrição do Projeto  
Este sistema permite fazer upload do arquivo CSV disponibilizado pela Caixa Econômica Federal, contendo imóveis à venda, e exibi-los em um mapa interativo. Além disso, oferece informações adicionais sobre os imóveis, como preço médio do m² na região, índices de qualidade de vida, e histórico do local via Street View.

## 🚀 Funcionalidades 
Feature que forem finalizadas devem ser atualizadas com ✅

### 1. Release 1 - MVP (Versão Inicial)  
✅ Definição do escopo inicial do projeto
- Upload do arquivo CSV de imóveis da Caixa  
- Processamento e limpeza dos dados  
- Exibição dos imóveis em um mapa interativo  
- Filtros básicos (cidade, tipo de imóvel, faixa de preço)  
- Exibição dos detalhes do imóvel ao clicar no mapa  
- Visualizações do imóvel:  
   - Modo satélite  
   - Street View integrado  
   - Histórico do Street View (quando disponível)  

### 2. Release 2 - Enriquecimento de Dados  
- Preço médio por m² na região  
- Histórico de preço na região (valorização ao longo dos anos)  
- Informações sobre localização (comércio próximo, transporte, escolas, hospitais)  
- Exibição de pontos de interesse no mapa  

### 3. Release 3 - Análises e Insights Avançados  
- Índices de segurança (dados de criminalidade)  
- Qualidade de vida na região (IDH, saneamento, infraestrutura)  
- Comparação automática com imóveis similares  
- Sugestão de investimento baseada em dados  

### 4. Release 4 - Expansão e Monetização  
- Cadastro/Login para usuários  
- Histórico de uploads  
- API para terceiros consumirem os dados  
- Modelos de monetização para dados premium  

### 5. Funcionalidades Futuras  
- Alertas de novos imóveis  
- Dashboards personalizados com estatísticas do mercado  
- Integração com IA para análise de tendências  
- Simulação de financiamento  

## Release Atual  
### Release 1 - MVP (Em desenvolvimento)  

## Próximas Tarefas  
- 📌 Próximas Tarefas - Release 1 (MVP)
- 🔧 Tarefas Técnicas
    - Configurar testes unitários no projeto
    - Configuração inicial do projeto (estrutura de pastas, ambiente de desenvolvimento, documentação interna)
- 🚀 Desenvolvimento das Funcionalidades
    -  Implementar funcionalidade de upload do arquivo CSV
    -  Criar serviço para processar e limpar os dados do CSV
    -  Desenvolver a exibição dos imóveis no mapa interativo
    -  Implementar filtros básicos (cidade, tipo de imóvel, faixa de preço)
    -  Criar componente para exibição dos detalhes do imóvel ao clicar no mapa
    -  Integrar visualizações do imóvel:
    -  Modo satélite
    -  Street View integrado
    -  Histórico do Street View (quando disponível)
- 🧪 Testes e Validação
    -  Criar testes unitários para as principais funcionalidades
    -  Testes de usabilidade para a interface do usuário
    -  Validação dos dados processados do CSV
- 📅 Gestão e Organização
    -  Criar documentação técnica para o front-end
    -  Configurar ambiente de deploy para testes internos
    -  Definir backlog para a próxima fase

## O que já foi feito
✅ Configured ESLint and Prettier for code quality.
✅ Created Angular project with routing and SCSS support.
✅ Created file upload component (`upload-csv`).
✅ Implemented NgRx store for managing CSV data.
✅ Implemented effect for handling CSV upload and parsing.
✅ Definição de escopo inicial do projeto  
✅ Definir escopo técnico do Projeto
✅ Definição de tecnologias
✅ Criação de repositórios.

## Licença  
Este projeto é open-source e pode ser usado conforme a licença [MIT](LICENSE).
