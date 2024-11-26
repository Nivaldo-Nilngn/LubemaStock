# Sistema de Controle de Estoque

## História do Usuário

Este sistema foi desenvolvido para atender às necessidades de diferentes tipos de usuários em um ambiente de controle de estoque. Abaixo estão as histórias de usuário que guiaram a construção do sistema:

1. **Como estoquista**, gostaria de mapear o estoque de forma fácil.
2. **Como estoquista**, gostaria de identificar facilmente como encontrar um produto apenas digitando o nome dele.
3. **Como estoquista**, gostaria de ter facilidade para retirar ou colocar produtos no estoque.
4. **Como usuário**, gostaria de poder consultar os produtos de forma simples.
5. **Como usuário**, gostaria de classificar ou filtrar meus produtos conforme achar melhor.
6. **Como gerente**, gostaria de ser avisado quando a quantidade de produtos estiver próxima ao estoque mínimo.
7. **Como gerente**, gostaria de receber relatórios com informações sobre os produtos que mais tiveram saída.
8. **Como gerente**, gostaria de receber notificações quando um produto estiver próximo da data de validade.
9. **Como gerente**, gostaria de utilizar o mesmo estoque para diferentes lojas e conseguir gerar relatórios personalizados para cada uma delas.

## Requisitos

O sistema foi desenvolvido com os seguintes requisitos:

1. **Gerenciamento de Entradas e Saídas**: O sistema deve ser capaz de realizar entradas e saídas de produtos no estoque.
2. **Chave Primária**: A chave primária do banco de dados deve ser o **LOT** (lote do produto).
3. **Entrada de Produtos**: Ao registrar a entrada de um produto, os seguintes dados devem ser preenchidos:
   - **Lot**: Número do lote.
   - **Validade**: Data de validade do produto.
   - **Nome**: Nome do produto.
   - **Quantidade**: Quantidade do produto.
   - **Foto**: Foto do produto, que pode ser usada para ajudar a IA a identificar a classe do produto.
4. **Saída de Produtos**: Para retirar um produto do estoque, o usuário deve informar o **LOT** para garantir que o produto retirado não tenha problemas relacionados à data de validade.
5. **Relatórios**: O sistema deve permitir a extração de relatórios com base em diferentes parâmetros:
   - **Produto específico** (por nome, lote ou foto).
   - **Categoria de produtos** (filtrados por foto).
   - **Relatório geral** com todos os produtos.
6. **Filtros de Relatório**: Os relatórios devem permitir a aplicação de filtros, como:
   - Tempo (datas específicas).
   - Nome.
   - Quantidade.
   - Validade.
7. **Exportação para PDF**: O sistema deve permitir a exportação dos relatórios em formato PDF para análise externa.

## Funcionalidades Desenvolvidas

O sistema de controle de estoque foi projetado para atender às necessidades dos usuários conforme as histórias acima descritas, e inclui as seguintes funcionalidades:

### 1. **Entrada de Produtos**
   - Registra produtos no estoque com todos os detalhes necessários (LOT, Validade, Nome, Quantidade, Foto).
   - A foto do produto é usada para auxiliar na classificação e categorização do estoque via IA.

### 2. **Saída de Produtos**
   - Exige a identificação do **LOT** para evitar a retirada de produtos com validade vencida.
   - Facilita o controle de estoque, garantindo que as saídas sejam corretamente registradas.

### 3. **Consultas e Relatórios**
   - Permite consultas por nome, lote ou foto do produto.
   - Oferece relatórios personalizados para produtos, categorias ou para todo o estoque.
   - Os relatórios podem ser filtrados por parâmetros como nome, quantidade, validade e período de tempo.
   - Possibilidade de exportar relatórios para PDF.

### 4. **Alertas e Notificações**
   - Notifica os gerentes quando a quantidade de um produto está próxima do limite mínimo de estoque.
   - Alerta quando a data de validade de um produto está se aproximando.
   - Permite personalizar os alertas para cada loja ou para o estoque geral.

### 5. **Gestão de Múltiplas Lojas**
   - O sistema permite gerenciar o estoque de várias lojas e gerar relatórios individuais para cada uma delas, proporcionando uma visão detalhada de cada ponto de venda.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Banco de Dados**: MongoDB (ou SQL, dependendo da implementação do sistema)
- **IA e Classificação de Produtos**: Modelos de aprendizado de máquina para auxiliar na categorização dos produtos com base nas imagens enviadas.
- **Geração de PDFs**: Biblioteca para conversão de relatórios em PDF (ex: PDFKit).

## Como Usar

1. **Entrada de Produtos**: Acesse a seção de entrada de produtos e preencha os campos obrigatórios (nome, lote, validade, quantidade e foto).
2. **Saída de Produtos**: Para registrar a saída, busque o produto pelo **LOT** e informe a quantidade a ser retirada.
3. **Consulta de Produtos**: Utilize a barra de pesquisa para localizar um produto por nome, lote ou imagem.
4. **Gerar Relatórios**: Vá até a seção de relatórios e selecione os filtros desejados (por tempo, nome, validade, etc.). Exporte para PDF se necessário.
5. **Notificações**: Fique atento às notificações de estoque baixo ou validade próxima, que podem ser configuradas no painel do gerente.

## Conclusão

Este sistema foi criado para facilitar o gerenciamento de estoque, com uma interface amigável e funcionalidades avançadas como alertas, relatórios personalizáveis e suporte para múltiplas lojas. O objetivo é oferecer um controle eficiente e facilitar a organização, tanto para estoquistas quanto para gerentes, melhorando a visibilidade sobre o estoque e agilizando as operações do dia a dia.
