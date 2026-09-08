---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">1</div>

# Instalación de Python

<div class="prep-subtitle">Preparar el intérprete de Python en Windows</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">Python</div>

# Descargar Python

- Ir a **python.org → Downloads → Windows**
- URL directa: [https://www.python.org/downloads/](https://www.python.org/downloads/){target="_blank"}

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/python-downloads.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/python-versiones.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">Python</div>

# Elegir la versión

- Flecha **verde**: versión estable actual, resaltada en la parte superior
- Flecha **morada**: enlace directo a la última versión estable
- ¿Necesitas una versión específica? Usa **Ctrl+F** para buscarla en la página y seleccionarla

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">Python</div>

# Instalar Python

- Importante: marcar la casilla **Add python.exe to PATH**
- Sin esto, Windows no reconocerá el comando `python` en la terminal

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/python-install.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/cmd-buscar.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">Python</div>

# Abrir la terminal

- Buscar **"cmd"** en el menú de inicio de Windows
- Abrir el **Símbolo del sistema**

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">Python</div>

# Verificar la instalación

- Escribir el siguiente comando en la terminal:

```bash
python -V
```

- Debe mostrar la versión instalada (ej. `Python 3.13.15`)

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/python-version-cmd.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/alias-python.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">Python</div>

# ¿El comando "python" no responde?

- Esto aplica si al escribir `python -V` **no funciona** (por ejemplo, abre la Microsoft Store)
- Se soluciona desde la **Configuración del sistema** de Windows
- Configuración → Alias de ejecución de aplicaciones → desactivar **python.exe** y **python3.exe**

---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">2</div>

# Visual Studio Code

<div class="prep-subtitle">Instalar y configurar el editor</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">VS Code</div>

# Descargar Visual Studio Code

- Ir a **code.visualstudio.com → Download for Windows**
- URL directa: [https://code.visualstudio.com/](https://code.visualstudio.com/){target="_blank"}

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/visual-download.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/visual-acepto.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">VS Code</div>

# Aceptar el acuerdo de licencia

- Seleccionar **"Acepto el acuerdo"** y continuar con **Siguiente**

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">VS Code</div>

# Tareas adicionales

- Marcar **"Registrar Code como editor"**
- Marcar **"Agregar a PATH"** (necesario para abrir VS Code desde la terminal)

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/visual-path.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/visual-instalar.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">VS Code</div>

# Instalar

- Confirmar con el botón **Instalar** para iniciar la instalación

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">VS Code</div>

# Primer inicio

- Al terminar la instalación, VS Code **se abre automáticamente**
- Si no se abre solo, búscalo en el menú de inicio como **"Visual Studio Code"**

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/visual-welcome.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/visual-preferencias.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">VS Code</div>

# Configurar preferencias

- Ir a **File → Preferences → Settings** (o `Ctrl + ,`)
- **Caso Welcome:** buscar "welcome" → **Workbench: Startup Editor** → seleccionar **"none"** para dejar de ver la pestaña de bienvenida al abrir VS Code
- **Caso Zoom:** buscar "zoom" → activar **Editor: Mouse Wheel Zoom** para agrandar la letra con **Ctrl + Scroll**
- El editor completo también se agranda con **Ctrl + "+"** (y se reduce con **Ctrl + "-"**)

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">VS Code</div>

# Explorar extensiones

- Las extensiones son **complementos** que agregan funciones a VS Code (temas, íconos, soporte de lenguajes, herramientas)
- Ejemplo de la imagen: búsqueda de **"icons"** para instalar un paquete de íconos
- Más adelante pueden buscar extensiones enfocadas en el flujo de trabajo con **Python** (ej. la extensión oficial "Python")

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/visual-extensiones.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">3</div>

# Primer proyecto local

<div class="prep-subtitle">Crear y ejecutar un archivo Python</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/carpeta-crear.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">Proyecto local</div>

# Crear una carpeta/directorio

- Clic derecho → **Nuevo → Carpeta**
- Esto se hace en el **administrador de archivos** de la PC (Explorador de Windows)

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">Proyecto local</div>

# Abrir la carpeta en VS Code

- Arrastrar la carpeta creada hacia la ventana de VS Code

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/arrastrar-carpeta.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/asegurar-carpeta.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">Proyecto local</div>

# Verificar que se abrió

- La carpeta debe aparecer en el **Explorer** de VS Code (barra lateral izquierda)

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">Proyecto local</div>

# Crear un archivo

- Se hace con el botón **New File** dentro de la carpeta
- Para nombrar archivos existen **estándares de nombrado**: usar minúsculas y guion bajo, sin espacios ni tildes
- Ejemplo: `hola_mundo.py`
- Escribir dentro del archivo:

```python
print("Hello World")
```

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/crear-archivo.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/correr-programa.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">Proyecto local</div>

# Ejecutar el programa

- Terminal → **New Terminal**
- Ejecutar con:

```bash
python hola_mundo.py
```

- Presionar **Enter**

---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">4</div>

# Clonar un proyecto desde GitHub

<div class="prep-subtitle">Obtener un repositorio existente</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">GitHub</div>

# Ubicar el repositorio deseado

- Buscar y entrar al repositorio que se necesita clonar
- Este ejemplo usa la organización de **Sinergia** en GitHub

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/sinergia-org.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/github-inicio.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">GitHub</div>

# Ingresar a GitHub

- URL directa: [https://github.com/](https://github.com/){target="_blank"}
- Si no tienes cuenta, seleccionar **Sign up**

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">GitHub</div>

# Crear una cuenta

- Completar el registro con correo, contraseña y nombre de usuario

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/github-signup.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/descargar-proyecto.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">GitHub</div>

# Formas de obtener el proyecto

- **Clone** (HTTPS)
- **GitHub Desktop**
- **Download ZIP**

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="prep-eyebrow">GitHub</div>

# Clonar con GitHub Desktop

- Descargar GitHub Desktop: [https://desktop.github.com/](https://desktop.github.com/){target="_blank"}
- **Clone repository** → pegar la URL del repositorio

::right::

<div class="flex justify-center">
  <img src="/preparacion_ambiente/clonar-git-desktop.png" class="prep-shot max-h-[360px]" />
</div>

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
---

<div class="flex justify-center">
  <img src="/preparacion_ambiente/abrir-en-visual.png" class="prep-shot max-h-[360px]" />
</div>

::right::

<div class="prep-eyebrow">GitHub</div>

# Abrir el proyecto clonado

- Desde GitHub Desktop: **Open in Visual Studio Code**

---
layout: center
class: prep-ambiente prep-divider text-center
hideInToc: true
---

# ¡Entorno listo!

<div class="prep-subtitle">Python instalado · VS Code configurado · Proyecto clonado</div>
