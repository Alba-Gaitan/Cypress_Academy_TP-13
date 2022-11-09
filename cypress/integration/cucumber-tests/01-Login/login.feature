Feature: 01 - Crowdar Academy 2022 - Login

  Scenario: Login como admin
    Given  Me logueo como admin correctamente

  Scenario: Login como usuario normal
    Given  Me logueo como usuario correctamente

  Scenario Outline: Login exitoso 
    Given Navego al sitio automationtesting
    When Me logueo como usuario con user '<user>' y pass '<pass>' 
    Then Valido saludo de bienvenida en el Título

        Examples:
          | user                      |   pass      |
          | albagaitan.fsk@gmail.com  |   alba1234* |


  Scenario Outline: Cerrar sesion exitosamente 
    Given Navego al sitio automationtesting
    When Me logueo como usuario con user '<user>' y pass '<pass>' 
    And Valido saludo de bienvenida en el Título
    And Hago click en cerrar sesion
    Then verifico que la sesion se cerro correctamente


        Examples:
          | user                      |   pass      |
          | albagaitan.fsk@gmail.com  |   alba1234* |