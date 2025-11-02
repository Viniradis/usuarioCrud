# 📦 Projeto Front-End CRUD com Angular 16

Este projeto é uma aplicação front-end desenvolvida com **Angular 16**, que implementa as operações básicas de **CRUD (Create, Read, Update, Delete)**. Ele foi criado como parte de um desafio técnico, com foco em boas práticas de desenvolvimento, organização de código e integração com uma API RESTful.

---

## ✨ Funcionalidades

- ✅ Listagem de usuários com visualização dinâmica  
- ➕ Criação de novos usuários via formulário reativo  
- ✏️ Edição de usuários existentes  
- 🗑️ Exclusão com confirmação  
- 🔄 Atualização automática da interface após cada operação  

---

## 🧰 Tecnologias utilizadas

- **Angular 16** com TypeScript  
- **Angular Material** para componentes visuais  
- **Reactive Forms** para validação e controle de formulários  
- **HttpClient** para comunicação com o back-end  
- **Routing** para navegação entre páginas  

---

## 📸 Prints da aplicação

Abaixo estão algumas capturas de tela que demonstram o funcionamento da aplicação:

### 🖼️ Tela de listagem
Tela de listagem: <img width="1085" height="549" alt="listagem user" src="https://github.com/user-attachments/assets/6769eacc-95bb-4adc-bb95-297e94a85aa1" />



### 🖼️ Formulário de criação
 <img width="516" height="277" alt="criação user" src="https://github.com/user-attachments/assets/3bf50f6f-21d2-45f4-881c-d6cfcb9dbb3a" />



### 🖼️ Edição de usuário
<img width="535" height="276" alt="editar user" src="https://github.com/user-attachments/assets/8a216846-197e-4b7f-b825-8c0ed42fa8d3" />



### 🖼️ Confirmação de exclusão
<img width="359" height="380" alt="delete user" src="https://github.com/user-attachments/assets/3d4692f5-5355-4c30-99c4-6159bc5767c1" />



---

## 🧪 Como testar o projeto CRUD (Angular + .NET 6.0)

Este projeto é composto por:

- **Frontend:** Angular 16  
- **Backend:** ASP.NET Core 6.0  
- **Banco de dados:** InMemory (ideal para testes rápidos, sem necessidade de configurar SQL Server)

---

### ✅ Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes itens instalados:

| Tecnologia   | Versão mínima | Link para download                     |
|--------------|----------------|----------------------------------------|
| Node.js      | 18.x           | [nodejs.org](https://nodejs.org/)      |
| Angular CLI  | 16.x           | `npm install -g @angular/cli`          |
| .NET SDK     | 6.0            | [dotnet.microsoft.com](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) |
| Git          | Qualquer       | [git-scm.com](https://git-scm.com/)    |

---

### 🚀 Passo a passo para rodar o projeto

#### 🔧 Backend (.NET 6.0)

1. **Clonar o repositório da API**
   ```bash
   git clone https://github.com/Viniradis/backendApiNet.git
   cd backendApiNet
Executar a API: dotnet run

A API estará disponível em:
http://localhost:7221

Documentação da API via Swagger:
http://localhost:7221/swagger

💻 Frontend (Angular 16)
Clonar o repositório do Angular
```bash
git clone https://github.com/Viniradis/usuarioCrud.git
   cd usuarioCrud

Instalar as dependências
npm install

Executar o projeto Angular
ng serve

A aplicação estará disponível em:
http://localhost:4200

🧪 Testando a aplicação
Ao acessar http://localhost:4200, você verá a interface do CRUD.

Certifique-se de que a API está rodando em paralelo (http://localhost:7221) para que o frontend consiga consumir os dados corretamente.

Todas as operações (Create, Read, Update, Delete) são persistidas em memória e reiniciadas ao parar a API.

