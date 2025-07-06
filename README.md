Este proyecto es una tienda online desarrollada como entrega final del curso de ReactJS de Coderhouse. Este permite navegar un catálogo de productos, visualizar sus detalles, agregarlos al carrito y realizar una compra con generación de orden en Firestore.


## Tecnologías que fueron utilizadas

- ReactJS + Vite
- React Router DOM
- Firebase / Firestore
- Context API
- Bootstrap 5
- React Icons

---

## Funcionalidades principales

- Listado dinámico de productos desde Firestore
- Filtrado por categorías
- Detalle individual de productos
- Contador de unidades (`ItemCount`) con validación de stock
- Carrito persistente con contexto global (`CartContext`)
- Checkout con generación de orden en Firestore
- Renderizado condicional: loaders, mensajes de sin stock, carrito vacío
- Navegación SPA sin recarga de página

---

## 🔧 Configuración y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo 
```

### 2. En caso de no poder lograr funcionar la opcion anterior, puedes realizar lo siguiente:

## Crea un proyecto nuevo
npm create vite@latest ecommerce-react -- --template react
cd ecommerce-react

# Instalar dependencias
npm install react-router-dom bootstrap react-icons firebase

# una vez creado todo eso, puedes pasar/copiar la carpeta src y el archivo .env del proyecto que se encuentra en este repositorio y pasarlo al nuevo proyecto creado (ecommerce-react) y ejecutar lo siguiente

npm run dev
