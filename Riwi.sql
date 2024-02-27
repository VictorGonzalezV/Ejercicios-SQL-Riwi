--1 Personas que tengan 20 años
SELECT nombres, apellidos, edad FROM users WHERE edad = 20;
--2 Mujeres que tienen entre 20  y 30 años
SELECT * FROM users WHERE genero = "M" AND edad >= 20 AND edad <= 30;
--3 La persona de menor edad
SELECT nombres,apellidos, MIN(edad) FROM users;
--4 Total usuarios registrados en la db
SELECT MAX(id) FROM users;
SELECT COUNT(id) FROM users;
--5 Primera 5 Personas 
SELECT * FROM users ORDER BY id  ASC LIMIT 5;
--6 Ultimas 10 Personas 
SELECT * FROM users ORDER BY id  DESC LIMIT 10;
--7 Personas que correo finalice en .net 
SELECT DISTINCT * FROM users WHERE correo LIKE '%.net';
--8 Listar usuarios que no vivan en colombia
SELECT * FROM users WHERE pais  NOT LIKE "%colombia"; 
--9 Listar usuarios que no vivan en colombia y ecuador
SELECT * FROM users WHERE pais  NOT LIKE "%colombia" AND pais NOT LIKE "%ecuador"; 

--10 cantidad usuarios que  vivan en colombia y les gusta el rock
SELECT COUNT(id) FROM users WHERE pais  LIKE "%colombia" AND musica LIKE "%rock"; 

--11 Acutalizar usuarios que les gusta el metal a carranga
UPDATE users SET musica ='carranga' WHERE  musica = 'metal';

--12 Hombres que les gusta la carranga que sean de colombia y tengan entre 10 y 20 años
SELECT * FROM users WHERE genero = 'H' and pais  LIKE '%colombia' and musica LIKE '%carranga' and edad >= 10 and edad <= 20;

--13 Actualizar genero muscila de usuarios que tenga 99 años a carranga
UPDATE users SET  musica = 'carranga' WHERE edad = 99

--14 Listar usaurios que su nombre empiece con "a", "A"
SELECT  *  FROM users WHERE nombres LIKE 'a%' 

--15 Listar usaurios que su nombre empiece con "a", "A"
SELECT * FROM users WHERE apellidos like '%z'

--16 Acualizar el genero muscail de usuarios que tengan 55 años  a NULL
UPDATE users SET musica = 'NULL' WHERE edad = 50;

--17 Listar usuarios que su genero musical sea NULL
SELECT * FROM users WHERE musica = 'null';

--18 Resultado de todas las sumas de las edades de la db 
SELECT SUM(edad) FROM users;

--19 Cantidad de usuarios registrados en ecuador
SELECT COUNT(id) FROM users WHERE pais LIKE 'ecuador';

--20 Cantidad de Usuiarios que son de colombia y les gusta el vallenato
SELECT COUNT(id) FROM users WHERE pais LIKE 'colombia' and musica LIKE 'vallenato'