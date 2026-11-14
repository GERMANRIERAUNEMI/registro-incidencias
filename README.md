# Sistema de Registro de Incidencias 

Aplicación web sencilla para registrar y listar incidencias reportadas por usuarios. Proyecto de la asignatura **Gestión de la Configuración del Software** (UNEMI). 

## Funcionalidades

- **v1.0.0:** registro y listado de incidencias.
- **v1.1.0:** filtro de incidencias por estado.
  
## Tecnologías
- HTML, CSS y JavaScript
- Datos guardados en el navegador (localStorage)
- Despliegue automático con GitHub Actions en GitHub Pages
  
## Cómo ejecutarlo 

1. Clonar el repositorio:   
```bash   
git clone https://github.com/GERMANRIERAUNEMI/registro-incidencias.git  
 ``` 
2. Abrir el archivo `index.html` en el navegador. 
No necesita instalar nada ni usar servidor.

## Despliegue 

Cada push a la rama `main` ejecuta el flujo `.github/workflows/deploy.yml`: 
1. Valida la aplicación (sintaxis de JS y archivos necesarios). 
2. Si la validación pasa, publica en GitHub Pages. 
URL pública: https://germanrieraunemi.github.io/registro-incidencias/

## Integrantes

- Kevin Paul Davila Naveda
- Mariana Katherine Reyes Arias
- German Steven Riera Rebolledo
