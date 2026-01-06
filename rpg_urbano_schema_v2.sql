
-- Tabla Usuario
CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    foto TEXT
);

-- Tabla Clase
CREATE TABLE Clase (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    foto TEXT
);

-- Tabla Habilidad
CREATE TABLE Habilidad (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT
);

-- Tabla Clase_Habilidad (relación N:M)
CREATE TABLE Clase_Habilidad (
    id_clase INTEGER REFERENCES Clase(id),
    id_habilidad INTEGER REFERENCES Habilidad(id),
    PRIMARY KEY (id_clase, id_habilidad)
);

-- Tabla Personaje
CREATE TABLE Personaje (
    id SERIAL PRIMARY KEY,
    id_usuario INTEGER REFERENCES Usuario(id),
    nombre VARCHAR(100),
    nivel INTEGER,
    id_clase INTEGER REFERENCES Clase(id)
);

-- Estadísticas separadas
CREATE TABLE EstadisticasBase (
    id_personaje INTEGER PRIMARY KEY REFERENCES Personaje(id),
    salud_max INTEGER,
    fuerza_max INTEGER,
    magia_max INTEGER,
    agilidad_max INTEGER,
    resistencia_max INTEGER,
    velocidad_max INTEGER
);

CREATE TABLE EstadisticasActuales (
    id_personaje INTEGER PRIMARY KEY REFERENCES Personaje(id),
    salud INTEGER,
    fuerza INTEGER,
    magia INTEGER,
    agilidad INTEGER,
    resistencia INTEGER,
    velocidad INTEGER
);

-- Tabla Acción
CREATE TABLE Accion (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    foto TEXT
);

-- Combinaciones y relaciones
CREATE TABLE Combinacion (
    id SERIAL PRIMARY KEY
);

CREATE TABLE Combinacion_Accion (
    id_combinacion INTEGER REFERENCES Combinacion(id),
    id_accion INTEGER REFERENCES Accion(id),
    PRIMARY KEY (id_combinacion, id_accion)
);

CREATE TABLE Combinacion_Elemento (
    id_combinacion INTEGER REFERENCES Combinacion(id),
    id_elemento INTEGER,
    PRIMARY KEY (id_combinacion, id_elemento)
);

-- Tabla Elemento
CREATE TABLE Elemento (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    foto TEXT
);

-- Tabla Objeto
CREATE TABLE Objeto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    id_tipo_objeto INTEGER,
    nivel INTEGER,
    precio INTEGER,
    foto TEXT
);

-- Relación clase-objeto (N:M)
CREATE TABLE Clase_Objeto (
    id_clase INTEGER REFERENCES Clase(id),
    id_objeto INTEGER REFERENCES Objeto(id),
    PRIMARY KEY (id_clase, id_objeto)
);

-- Tabla Arma y Armadura como extensiones de Objeto
CREATE TABLE Arma (
    id SERIAL PRIMARY KEY,
    ataque INTEGER,
    empunadura VARCHAR(50),
    id_objeto INTEGER REFERENCES Objeto(id)
);

CREATE TABLE Armadura (
    id SERIAL PRIMARY KEY,
    resistencia INTEGER,
    id_objeto INTEGER REFERENCES Objeto(id)
);

-- Tabla Equipo
CREATE TABLE Equipo (
    id_personaje INTEGER PRIMARY KEY REFERENCES Personaje(id),
    id_arma_principal INTEGER,
    id_arma_secundario INTEGER,
    id_casco INTEGER,
    id_armadura INTEGER,
    id_guantes INTEGER,
    id_pantalones INTEGER,
    id_zapatos INTEGER
);

-- Tabla Inventario
CREATE TABLE Inventario (
    id_personaje INTEGER REFERENCES Personaje(id),
    id_objeto INTEGER REFERENCES Objeto(id),
    cantidad INTEGER,
    PRIMARY KEY (id_personaje, id_objeto)
);

-- Tabla Tienda
CREATE TABLE Tienda (
    id SERIAL PRIMARY KEY,
    id_objeto INTEGER REFERENCES Objeto(id),
    clase VARCHAR(100),
    nivel INTEGER
);

-- Tabla Efecto
CREATE TABLE Efecto (
    id SERIAL PRIMARY KEY,
    descripcion TEXT,
    id_contrarresta INTEGER REFERENCES Efecto(id)
);

-- Relación habilidad-efecto
CREATE TABLE Habilidad_Efecto (
    id_habilidad INTEGER REFERENCES Habilidad(id),
    id_efecto INTEGER REFERENCES Efecto(id),
    PRIMARY KEY (id_habilidad, id_efecto)
);

-- Tabla Misiones y progreso
CREATE TABLE Mision (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    tipo VARCHAR(50)
);

CREATE TABLE ProgresoMision (
    id_personaje INTEGER REFERENCES Personaje(id),
    id_mision INTEGER REFERENCES Mision(id),
    estado VARCHAR(50),
    progreso INTEGER,
    PRIMARY KEY (id_personaje, id_mision)
);

-- Registro de escaneos QR
CREATE TABLE RegistroEscaneoQR (
    id SERIAL PRIMARY KEY,
    id_personaje INTEGER REFERENCES Personaje(id),
    codigo_qr VARCHAR(255),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
