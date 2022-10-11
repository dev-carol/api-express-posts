
# Api express posts

Api onde podemos criar um usuário, autenticá-lo e assim poder expressar seus pensamentos





## Instalação

Instale 
api-express-posts com npm ou yarn


```bash
  npm install 

```
## Docker

 ```bash
 docker run --name nomeDoContainer -p3306:3306 -e MARIADB_ROOT_PASSWORD=SUASENHA -d mariadb:latest
 docker exec -it nomeDoContainer bash
 mysql -u root -p

```

 Ao digitar o último comando, irá aparecer "ENTER PASSWORD:" (Aqui vc digita sua senha definida no MARIADB_ROOT_PASSWORD=)
 Por fim, crie o database com o comando abaixo:
 
 ```bash
  create database nodejs;

```
##
## Configs env

 Crie um arquivo .env na raiz do projeto. As configs estão no env.example

Dica para gerar sua chave secreta

```bash
 openssl rand -base64 32
```

## Rodando migrações

```bash
 npx knex migrate:latest
```

## Rodar o servidor


```bash
 npm run start
```
