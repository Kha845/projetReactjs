import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export class AjouterApprenant extends Component {
    constructor(){
        super();
        this.state = {nom:'',prenom:'',pays:'',sexe:'',module:'' };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };

      handleAdd = (e) => {
        e.preventDefault();
        const nouvelApprenant = {
          nom: this.state.nom,
          prenom: this.state.prenom,
          pays: this.state.pays,
          sexe: this.state.sexe,
          module: this.state.module,
        };
        axios.post('http://localhost:3001/apprenants', nouvelApprenant) // Remplacer par l'URL de votre serveur JSON
        .then((response) => {
              console.log(response.data); // Optionnel : Afficher la réponse du serveur pour le débogage
              this.setState({ nom: '', prenom: '', pays: '', sexe: '', module: '' }); // Effacer les champs du formulaire
            })
            .catch((error) => {
              console.error(error); // Gérer les erreurs, par exemple afficher un message d'erreur à l'utilisateur
            });
    }
    render(){
        return (
            <div className='container'>
                <form onSubmit={this.handleAdd}>
                    <div className='row'>
                        <div className='col-lg-6'>
                        <label for="nom" >Prenom</label>
                        <input name="nom" value={this.state.nom} onChange={this.handleChange} className='form-control'/>
                        </div>
                        <div className='col-lg-6'>
                        <label for="prenom" >Nom</label>
                        <input name="prenom" value={this.state.prenom} onChange={this.handleChange} className='form-control'/>
                        </div>
              <div className='row'>
              <div className='col-6'>
                    <label for="nom" >Pays</label>
                    <input name="pays" value={this.state.pays}  onChange={this.handleChange} className='form-control'/>
                </div>
        
                <div className='col-6'> 
                            <label for="sexe">Sexe</label>
                                <select name="sexe" id ="sexe"  class="form-control" value={this.state.sexe}  onChange={this.handleChange}>
                                    <option value="">Selection votre sexe</option>
                                    <option value="Masculin">Masculin</option>
                                    <option value="Féminin">Féminin</option>
                                </select>
                    </div>
              </div>
                    </div><br></br>
                    <div className='row'>
                    <div class="col-lg-4">       
                            <input type="radio" class="form-check-input" id="module1" name="module" 
                             value="AWS re/start"
                             checked={this.state.module === "AWS re/start"}
                             onChange={this.handleChange} />
                            <label for="module1">AWS re/start</label>
                     </div>
                     <div className='col-lg-4'>
                     <input type="radio" class="form-check-input" id="module2" name="module"  value="Dev"
                                                                                            checked={this.state.module === "Dev"}
                                                                                            onChange={this.handleChange} />
                     <label for="module2">Dev</label>
                     </div>
                     <div className='col-lg-4'> 
                     <input type="radio" class="form-check-input" id="module3" name="module"  value="AWS re/start"
                                                                                              checked={this.state.module === "AWS re/start"}
                                                                                              onChange={this.handleChange}/>
                            <label for="module3"> Devops</label>
                     </div>
                    </div>
                    <div className='col-6'>
                           <input type="submit" value="Ajoutez" className='btn btn-primary'/>
                    </div> 
                </form>
            </div>
        )
    }
}
export default AjouterApprenant;