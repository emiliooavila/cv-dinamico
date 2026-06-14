# DevProfile: Generador Dinámico de CV en PDF

### **Universidad Autónoma de Aguascalientes**
**Centro de Ciencias Básicas** **Departamento de Ciencias de la Computación** **Materia:** Tecnologías Web / React (Semestre 2026-A)  
**Profesor:** Ing. Irving Cardona  

**Desarrollado por:** * **Jorge Emilio Avila Valadez** (Ingeniería en Sistemas Computacionales, 6° Semestre)  
* **Diego Abraham Delgado Rodríguez** (Ingeniería en Sistemas Computacionales, 6° Semestre)  

---

## 📝 Descripción del Proyecto

**DevProfile** es una aplicación web SPA (Single Page Application) desarrollada en **React** y **Vite**, diseñada específicamente para la creación, gestión y exportación automatizada de currículums profesionales. 

La interfaz destaca por una estética vanguardista basada en el efecto **Liquid Glass (Glassmorphism)**, simulando paneles translúcidos flotantes con desenfoque de fondo (`backdrop-filter`) que responden dinámicamente a un sistema de **Modo Oscuro/Claro** persistente. El ecosistema cuenta con un manejo de estado global robusto mediante la **API Context de React**, analíticas visuales dinámicas de habilidades utilizando la librería **Recharts**, y una transición orgánica en el menú a través de animaciones de diseño de **Framer Motion**.

---

## ✨ Características Principales

1. **Arquitectura de Estado Centralizado:** Toda la información recolectada se distribuye en un árbol JSON global síncrono. Las altas y bajas (CRUD) se reflejan de inmediato en todas las pantallas.
2. **Efecto Liquid Glass (Apple Style):** Paneles esmerilados con bordes ultra-suavizados y sombras volumétricas superpuestas en una malla fija de gradientes radiales fijos en el fondo.
3. **Persistencia Automática:** Integración síncrona con el ciclo de vida de `localStorage`, lo que previene la pérdida de datos tras recargas accidentales.
4. **Pill Selector con Animación Fluida:** El indicador de la pestaña activa en la barra de navegación persigue el clic del usuario usando físicas elásticas (*spring physics*) compartidas de Framer Motion.
5. **Dashboard Gráfico en Tiempo Real:** Automatización del agrupamiento por categorías de habilidades del usuario para graficar proporciones de barras reactivas con soporte adaptativo (*Responsive*).
6. **Inyección FileReader para Avatar:** Permite cargar fotos de perfil convirtiéndolas a cadenas de texto **Base64** en tiempo real para ser guardadas en la memoria local, evitando dependencias de bases de datos externas de almacenamiento de archivos.
7. **Exportación Impecable a PDF (`@media print`):** Al activar la impresión nativa, el sistema invalida las transparencias de cristal y los gradientes oscuros de pantalla para inyectar un formato A4 impoluto en blanco y negro de alta calidad, controlando los saltos de página y aislando la interfaz web.

---

## 🛠️ Stack Tecnológico

* **Core:** React 18 & Vite (Ecosistema ESM nativo y compilación ultrarrápida).
* **Enrutamiento:** React Router DOM v6 (SPA sin recarga).
* **Animaciones:** Framer Motion (Interpolaciones físicas avanzadas y `layoutId`).
* **Visualización de Datos:** Recharts (Gráficos composicionables SVG reactivos al tema).
* **Estilos:** CSS3 Avanzado (Variables nativas `:root`, Flexbox, Grid y `backdrop-filter`).
* **Persistencia:** Web Storage API (Local Storage síncrono).

---

## 📂 Arquitectura del Software