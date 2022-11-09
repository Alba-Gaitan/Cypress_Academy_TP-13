Feature: 02 - Crowdar Academy 2022 - Shop Store

  Background:
    Given Me logueo como usuario correctamente


  Scenario: Buscar por rango de precio
    When Ingreso al shop 
    And Busco por rango de precio, de medio a mayor
    And Ingreso al rango de busqueda marcada
    Then Verifico que ingreso al rango de busqueda deseada
    


