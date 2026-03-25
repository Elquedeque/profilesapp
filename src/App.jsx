import { useEffect, useState } from 'react'

function App() {
  const [documentos, setDocumentos] = useState([]);

  // Esto se ejecuta cuando carga la página
  useEffect(() => {
    // Aquí llamarás a tu API Gateway de AWS
    fetch('')
      .then(response => response.json())
      .then(data => setDocumentos(data)) // 'data' sería la lista desde DynamoDB
  }, []);

  return (
    <div>
      <h1>Mis Documentos de Clase</h1>
      <ul>
        {documentos.map((doc, index) => (
          <li key={index}>
            <a href={doc.url} target="_blank">{doc.nombre}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App