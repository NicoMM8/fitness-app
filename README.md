# Fitness App

Aplicación web enfocada en el seguimiento del entrenamiento de fuerza y la nutrición. Es un proyecto *local-first*, por lo que todos los datos (rutinas, entrenamientos, calorías) se guardan directamente en el `localStorage` del navegador y no se hace uso de ninguna base de datos externa.

## Funcionalidades

- Registro y seguimiento de entrenamientos diarios (series, repeticiones y ejercicios).
- Creación y gestión ágil de rutinas personalizadas.
- Catálogo interno de ejercicios.
- Módulo de nutrición para registrar la ingesta calórica y revisar planes de comida basados en diferentes objetivos.
- Dashboard resumen con las estadísticas semanales y progreso.
- Sistema para exportar/importar los datos guardados en formato JSON.

## Stack técnico

- React 19 + react-router-dom
- Vite
- lucide-react para la iconografía
- CSS nativo

## Setup local

Para levantar el proyecto en tu máquina:

1. Clona el repositorio.
2. Abre la terminal en el directorio del proyecto e instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación debería estar corriendo en `http://localhost:5173`.
