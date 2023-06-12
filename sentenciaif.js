function sentenceIf(anioActual, anioPersona){
     // Guardo en una variable el resultado de la resta
     const resultado = anioActual - anioPersona;
     //verificar mediante un If si la persona es mayor de edad
     if (resultado >= 18) {
        console.log("es mayor de edad y tiene:", resultado);
    } else {
        console.log("la persona es menor de edad");
    }
}

sentenceIf(2023, 2010);
