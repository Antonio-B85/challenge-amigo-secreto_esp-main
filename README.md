<h1 align="center">Challenge Amigo Secreto</h1>

![github-challenge-logo](https://github.com/user-attachments/assets/15c518fb-7806-4e13-a646-9a14e3545b78)

<h2>Challenge Amigo Secreto</h2>

Versión del documento: 1.0

Estado del proyecto: En desarrollo

Fecha última actualización: 27-01-2025

Autor: Antonio Benavides

<h3>Contenido</h3>

- [1. Descripción](#1-descripción)
- [2. Funcionalidades](#2-funcionalidades)
- [3. Validaciones](#3-validaciones)

## 1. Descripción

El objetivo de este código es implementar un sistema básico basado en JavaScript y HTML para jugar al "amigo secreto", todo esto basado en los elementos de programación aprendidos durante el curso de Alura Latam de Oracle One Education.

## 2. Funcionalidades
### 2.1 Ingresar Nombres de Amigos

Al ir ingresando nombres de amigos, estos aparecerán listados bajo el cuadro de ingreso de nombres por orden de ingreso.

### 2.1 Sortear Amigo Secreto

Al sortear nuestro amigo secreto, el listado de amigos mencionado anteriormente desaparecerá. Además, el nombre sorteado se mostrará en color verde sobre el botón de "Sortear Amigo". Es importante señalar que, si posterior al sorteo se ingresa otro nombre al listado de amigos, el mensaje del amigo sorteado desaparecerá y volverá a aparecer el listado completo de amigos ingresados al sistema.

## 3. Validaciones
### 3.1 Ingresar Nombres de Amigos

La plataforma cuenta con una validación que impide que se puedan ingresar nombres vacíos al listado de amigos que se sorteará posteriormente.

### 3.1 Sortear Amigos

La plataforma cuenta con una validación que impide realizar un sorteo si no existen nombres de amigos ingresados previamente. Para esto, se bloquea el botón de sorteo, el cual se desbloqueará una vez que el primer amigo haya sido ingresado.


