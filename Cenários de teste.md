# Feature: Consulta de processos no Jusbrasil

  Como um usuário,
  quero realizar consultas de processos,
  a fim de obter informações sobre processos judiciais.

  * Cenário: CPF inválido
    ```
    Dado que eu esteja na página de consulta processual do Jusbrasil
    Quando eu inserir um CPF inválido
    Então o sistema deve exibir uma mensagem de erro
    And a página não deve ser redirecionada
    ```

  * Cenário: Consulta por CPF ou nome válidos
    ```
    Dado que eu esteja na página de consulta processual do Jusbrasil
    Quando eu inserir um CPF válido ou um nome válido
    Então o sistema deve listar vários processos
    ```

  * Cenário: Exibir detalhes de um processo
    ```
    Dado que eu esteja na página de consulta processual do Jusbrasil
    E eu tenha realizado uma busca válida
    Quando eu clicar em um dos processos listados
    Então o sistema deve abrir uma nova página
    E a nova página deve conter os detalhes do processo
    ```
