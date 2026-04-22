# Book Catalog

Aplicacao web para gerenciamento de catalogo de livros com operacoes de listar, adicionar, editar e excluir.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router DOM
- Axios
- Tailwind CSS 4
- CSS Modules

## Funcionalidades

- Listagem de livros cadastrados
- Cadastro de novo livro
- Edicao de livro existente
- Exclusao de livro
- Navegacao por rotas
- Footer com navegacao rapida

## Rotas

- /: pagina inicial com listagem
- /books: pagina de cadastro
- /books/:id: pagina de edicao

## Estrutura principal

```text
src/
	components/
		BookForm/
		BookItem/
		BookList/
		Container/
		Footer/
		Header/
	hooks/
		useBooks.ts
	pages/
		page.tsx
		books/
			page.tsx
			[id]/
				page.tsx
	services/
		api.ts
	types/
		Book.ts
```

## Como executar localmente

### Pre-requisitos

- Node.js
- npm

### Passos

1. Instale as dependencias:

```bash
npm install
```

2. Rode o projeto em modo desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador o endereco exibido no terminal (geralmente http://localhost:5173).

## Scripts disponiveis

```bash
npm run dev      # inicia em desenvolvimento
npm run build    # gera build de producao
npm run preview  # executa preview da build
npm run lint     # executa linter
```

## API

O projeto usa crudcrud para persistencia.

O endpoint atual esta definido diretamente em src/services/api.ts:

```ts
const API_URL = "https://crudcrud.com/api/.../books";
```

Se o endpoint expirar, gere um novo no crudcrud e atualize esse valor.

## Estado e fluxo de dados

- O hook useBooks centraliza operacoes de listagem, criacao, edicao e exclusao.
- O componente BookForm funciona nos modos criar e editar.
- Ao salvar (criar ou editar), a aplicacao redireciona para a rota /.

## Autor

Desenvolvido por Anne Carolayne - Aluno de Desenvolvimento Full Stack em Python
