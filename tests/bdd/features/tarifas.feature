# language: es
Característica: Cobro de estadías en el parqueadero EstacionaYa
  Como dueño del parqueadero
  Quiero cobrar a cada vehículo según el tiempo que estuvo y aplicar descuentos a mis clientes
  Para cobrar lo justo sin pasarme del tope diario

  Esquema del escenario: Cobro de un <vehiculo> que estuvo <minutos> minutos
    Dado que un <vehiculo> estuvo <minutos> minutos en el parqueadero
    Cuando se calcula lo que debe pagar
    Entonces debe pagar <valor> pesos

    Ejemplos:
      | vehiculo | minutos | valor | caso                              |
      | carro    | 15      | 0     | dentro de los minutos de gracia   |
      | carro    | 16      | 3000  | apenas pasada la gracia           |
      | carro    | 61      | 6000  | una hora y fracción paga dos      |
      | carro    | 481     | 25000 | llega al tope diario del carro    |
      | moto     | 15      | 0     | dentro de los minutos de gracia   |
      | moto     | 16      | 1500  | apenas pasada la gracia           |
      | moto     | 61      | 3000  | una hora y fracción paga dos      |
      | moto     | 1440    | 12000 | todo el día paga el tope de moto  |

  Escenario: Un cliente frecuente recibe su descuento
    Dado que un cliente frecuente debe pagar 3000 pesos
    Cuando se le aplica su descuento
    Entonces debe pagar 2700 pesos

  Escenario: Un cliente con convenio recibe su descuento sobre el tope del carro
    Dado que un cliente convenio debe pagar 25000 pesos
    Cuando se le aplica su descuento
    Entonces debe pagar 20000 pesos
