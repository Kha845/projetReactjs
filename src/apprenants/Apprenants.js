import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import '../Style.css';
import '../aws.webp';
function Apprenants({apprenantes,handleDelete,selectedRow,handleRowClick,setSelectedRow}){
  const aws = './aws.webp';
      return(
        <div className="container">
         <table class="table table-striped col-lg-6">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Prenom</th>
                <th scope="col">Pays</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
    <tbody>
            {apprenantes.map((apprenant,selectedRow)=>(
                   <tr key={apprenant.id}  onClick={() => handleRowClick(selectedRow)}>
                   <th scope="row">{apprenant.id}</th>
                   <td>{apprenant.nom}</td>
                   <td>{apprenant.prenom}</td>
                   <td>{apprenant.pays}</td>
                    <td>
                       <button onClick={() => handleDelete(apprenant.id)} className="btn btn-danger" style={{"margin":"10px"}}>Supprimer</button>
                       <button className="btn btn-primary" onClick={ () => handleRowClick(selectedRow)}>Détails</button>
                    </td>
                   </tr>
       ))}
             
            </tbody>
        </table>
        {selectedRow !== null && (
          <div className="card"  style={{"width": "18rem"}}>
            {/* Afficher les détails de la ligne sélectionnée */}
            <Modal
              isOpen={selectedRow !== null}

              onRequestClose={() => setSelectedRow(null)}
               contentLabel="Modal"
             className="modal">
                      {/* Contenu de la modal */}
                    <div className="modal-content ">

                      <img 
                      src="https://imgs.search.brave.com/e7_uuRRTac9Czr50HUtKEk26CWygh2Xs7aV0B1cKQnI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG9yYW5jby5mci9p/bmMvc3JjL2ltZy9w/YXJjb3Vycy92aWdu/ZXR0ZS9pbWFnZV92/aWduZXR0ZV9mb3Jt/YXRpb25fZGV2ZWxv/cHBldXItYXBwbGlj/YXRpb25zLW11bHRp/bWVkaWEtd2ViLWFw/cGxpY2F0aW9uLW1v/YmlsZS1pbmZvcm1h/dGlxdWUtZG9yYW5j/by1lY29sZS5qcGc"  
                      alt="" height="30px" width="80px"/>

                      <p >Nom : {apprenantes[selectedRow].nom}</p>
                      <p>Prenom : {apprenantes[selectedRow].prenom}</p>
                      <p>Pays : {apprenantes[selectedRow].pays}</p>
                      <p>Sexe : {apprenantes[selectedRow].sexe}</p>
                      <button onClick={() => setSelectedRow(null)} className="btn btn-sm btn-success" style={{"width":"60px"}}>Fermer</button>
                      </div>
            </Modal>
          </div>
        )}
        </div>);}
export default Apprenants;