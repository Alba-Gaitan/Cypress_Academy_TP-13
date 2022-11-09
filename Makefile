.DEFAULT_GOAL := help

	
testnormal: ## genera ejecución de todos los TC x consola
	npx cypress open

testregresion: ## correr todos los test de regresion.
	npx cypress run -e TAGS='@Regression' --record --key 52928118-2658-4315-a674-2afc283ea7f6

testcypress: ## corre todos los test.
	npx cypress run --record --key 52928118-2658-4315-a674-2afc283ea7f6

help:
	@printf "\033[31m%-16s %-59s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-16s %-59s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-16s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
