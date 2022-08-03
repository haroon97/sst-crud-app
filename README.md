# sst-crud-app
## Project Setup:

- Clone the repo.
- Go to project folder and run npm install.
- run npx sst start.
- An sst console url will be provided, copy that and open the console in a separate tab.

## Project Testing:

Following is the guideline to test the api’s.

## Create an IAM User:

First step is create an IAM user through the sst console.

## Create Api:

```bash
npx aws-api-gateway-cli-test \
--username='USER_CREATED' \
--password='USER_PASSWORD' \
--user-pool-id='USER_POOL_ID' \
--app-client-id='USER_POOL_CLIENT_ID' \
--cognito-region='COGNITO_REGION' \
--identity-pool-id='IDENTITY_POOL_ID' \
--invoke-url='API_ENDPOINT' \
--api-gateway-region='API_REGION' \
--path-template='/posts' \
--method='POST' \
--body='{"title":"POST_TITLE","description":"POST_DESCRIPTION "}'
```

## Read Api:

```bash
npx aws-api-gateway-cli-test \
--username='USER_CREATED' \
--password='USER_PASSWORD' \
--user-pool-id='USER_POOL_ID' \
--app-client-id='USER_POOL_CLIENT_ID' \
--cognito-region='COGNITO_REGION' \
--identity-pool-id='IDENTITY_POOL_ID' \
--invoke-url='API_ENDPOINT' \
--api-gateway-region='API_REGION' \
--path-template='/posts/{id}' \
--method='GET' \
--params='{"id":"POST_ID"}'
```

## Update Api:

```bash
npx aws-api-gateway-cli-test \
--username='USER_CREATED' \
--password='USER_PASSWORD' \
--user-pool-id='USER_POOL_ID' \
--app-client-id='USER_POOL_CLIENT_ID' \
--cognito-region='COGNITO_REGION' \
--identity-pool-id='IDENTITY_POOL_ID' \
--invoke-url='API_ENDPOINT' \
--api-gateway-region='API_REGION' \
--path-template='/posts/{id}' \
--method='PUT' \
--body='{"title": "POST_TITLE", "description": "POST_DESCRIPTION"}'
--params='{"id":"POST_ID"}' \
```

## Delete Api:

```bash
npx aws-api-gateway-cli-test \
--username='USER_CREATED' \
--password='USER_PASSWORD' \
--user-pool-id='USER_POOL_ID' \
--app-client-id='USER_POOL_CLIENT_ID' \
--cognito-region='COGNITO_REGION' \
--identity-pool-id='IDENTITY_POOL_ID' \
--invoke-url='API_ENDPOINT' \
--api-gateway-region='API_REGION' \
--path-template='/posts/{id}' \
--method='DELETE' \
--params='{"id":"POST_ID"}' \
```

## Get all Posts api:

```bash
npx aws-api-gateway-cli-test \
--username='USER_CREATED' \
--password='USER_PASSWORD' \
--user-pool-id='USER_POOL_ID' \
--app-client-id='USER_POOL_CLIENT_ID' \
--cognito-region='COGNITO_REGION' \
--identity-pool-id='IDENTITY_POOL_ID' \
--invoke-url='API_ENDPOINT' \
--api-gateway-region='API_REGION' \
--path-template='/posts' \
--method='GET' \
```
