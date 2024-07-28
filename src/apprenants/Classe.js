import React, { Component } from 'react' // Importe les éléments de base de React pour créer des composants
import axios from 'axios'; // Importe Axios pour faire des requêtes HTTP vers une API
import Apprenants from './Apprenants';// Importe le composant Apprenants qui affichera la liste des apprenants
export  class Classe extends Component{ // Définit une classe de composant nommée Classe qui hérite de Component

    constructor(){
        super();// Appelle le constructeur de la classe parente pour initialiser l'état
        this.state = { // Initialise l'état du composant
        isLoading:true, // Indique si les données sont en cours de chargement (initialement vrai)
         apprenants:[], // Tableau vide pour stocker les données des apprenants récupérées depuis l'API
         error: null,  // Pour stocker une éventuelle erreur lors du chargement des données
         showForm:false,  // Indique si le formulaire d'ajout d'apprenant est affiché (initialement faux)
        selectedRow: null // Indique l'index de l'apprenant sélectionné (initialement null)
      };
       // Lie les méthodes aux instances pour pouvoir les utiliser dans les rendus
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
        this.setSelectedRow = this.setSelectedRow.bind(this);
    }
    // Cette méthode est  liée à l'affichage d'un formulaire (non montré dans le code)
    handleClick = () => {
                this.setShowForm(true);
    };
componentDidMount(){
   // Cette méthode est appelée une fois que le composant est monté dans le DOM
    axios.get(`http://localhost:3001/apprenants`)  // Envoie une requête GET à l'API pour récupérer les apprenants
    .then(res => {// Si la requête réussit
        const apprenants = res.data; // Extrait les données des apprenants de la réponse
        console.log(apprenants); // Affiche les données dans la console pour déboguer
        this.setState({apprenants, isLoading:false}); // Met à jour l'état avec les données et indique que le chargement est terminé
      
    })
    
    .catch(error => this.setState({error, isLoading: false})) // Si une erreur se produit, met à jour l'état avec l'erreur; 
}

setSelectedRow(value) {
   // Met à jour l'état pour sélectionner une ligne spécifique dans le tableau des apprenants
   this.setState({ selectedRow: value });
  }
 // Supprime un apprenant en envoyant une requête DELETE à l'API
    handleDelete(id){
        axios.delete('http://localhost:3001/apprenants/'+id)
        .then(res => this.setState(prevstate =>(

            {apprenants: prevstate.apprenants.filter(
                apprenant => apprenant.id !== id)}
        ))) // Met à jour l'état en filtrant le tableau des apprenants pour supprimer l'élément correspondant à l'ID

       .catch(error => this.setState({error, isLoading: false}));
    }

    handleRowClick = (index) => {
       // Met à jour l'état pour sélectionner une ligne spécifique en fonction de son index
      this.setState({ selectedRow: index });
    };
    
    render(){
       // Extrait les valeurs de l'état pour une meilleure lisibilité
        const apprenantes = this.state.apprenants;
        console.log(this.state.apprenants);
        const isLoading = this.state.isLoading;
        const error = this.state.error;
        const selectedRow = this.state.selectedRow;

          // Affiche un message de chargement si les données ne sont pas encore chargées

    if (isLoading) {
      return <p>Chargement en cours...</p>;
    }
 // Affiche un message d'erreur si une erreur s'est produite
    if (error) {
      return <p>Une erreur s'est produite : {error.message}</p>;
    }
// Rendu du composant principal
    return (
         
      <div>
          <Apprenants  apprenantes={apprenantes} handleDelete={this.handleDelete}
           selectedRow={selectedRow} handleRowClick={this.handleRowClick} setSelectedRow={this.setSelectedRow}/>
      </div>
    );
    }
}
export default Classe;