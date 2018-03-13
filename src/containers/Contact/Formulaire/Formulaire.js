import React, {Component} from 'react';

import Input from './Input/Input';
import classes from './Formulaire.css';


class Formulaire extends Component{

    state ={
        form:{
            email:{
                value : '',
                config:{
                    placeholder: "Votre email",
                    type: 'text'
                },
                inputType: 'input',
                validation:{
                    required : true,
                    minLength : 2,
                    maxLength : 2
                },
                valid : false,
                touched : false
            },
            prenom:{
                value : '',
                config:{
                    placeholder: "Votre prenom",
                    type: 'text'
                },
                inputType: 'input',
                validation:{
                    required : true
                },
                valid : false,
                touched : false
            }            
        },
        formIsValid : false
    }
    

    handleChange= (event, inputType) => {
        let form = { ...this.state.form };
        let formValue = { ...form[inputType] };
        formValue.value = event.target.value;

        // VERIF INPUT
        formValue.valid = this.checkValidity(formValue.value, formValue.validation);
        formValue.touched = true;
        form[inputType] = formValue;

        let formIsValid = true;
        for (let inputType in form){
            formIsValid = form[inputType].valid && formIsValid
        }
        this.setState({form : form, formIsValid : formIsValid});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let formData = [];
        for (let inputType in this.state.form){
            formData[inputType] = this.state.form[inputType].value
        }
        console.log(formData);
    }

    checkValidity = (value, validation) => {
        let isValid = true;
        if(validation.required){
            isValid = value.trim() !== '' && isValid;
        }
        if (validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }
        if (validation.maxLength){
            isValid = value.length <= validation.maxLength && isValid
        }
        return isValid;
    }
    render(){
        const formArray=[];
        for (let key in this.state.form){
            formArray.push({
                id: key,
                inpuType : this.state.form[key]
            })
        };

        let form =(
            <form onSubmit={this.handleSubmit} className={classes.form}>
                {formArray.map( f =>(
                    <Input 
                    key={f.id}
                    config={f.inpuType.config}
                    value={f.inpuType.value}
                    invalid={!f.inpuType.valid}
                    shouldValidate={f.inpuType.validation}
                    touched ={f.inpuType.touched}
                    changed={(event) => this.handleChange(event, f.id)} />
                ))}
                <button className={classes.button} disabled={!this.state.formIsValid}>valider</button>
            </form>
        );
    
        return (
            <div>
                {form}
            </div>
        );
    }
}

export default Formulaire;