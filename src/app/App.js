import React, {Component} from 'react';

class App extends Component{
    constructor(){
        super();
        //when the app starts all fields are blank
        this.state={
            title:'',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    /**Adds tasks using post */
    addTask(e){
        fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            M.toast({html: 'Task Saved'})   //Materialize global variable to show text in the frontend
            this.setState({title:'', description:''});  //clears the form
        })
        .catch(err => console.error(err));
        e.preventDefault(); //avoids refreshing the website everytime the submit button is pressed

    }

    /**Gets the app requesting all tasks from the DB once the app renders */
    componentDidMount(){
        this.fetchTasks();
    }

    /**Gets all tasks from the DB
     * doesnt need configuration object as the fetch method makes a get request by default
     */
    fetchTasks(){
        fetch('/api/tasks')
            .then(res =>res.json())
            .then(data => console.log(data));

    }

    /** Gets tasks name and value from the filled form when save button is clicked */
    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className='container'>

                        <a className='brand-logo' href='/'>Tasks App</a>
                        
                    </div>
                </nav>

                <div className='container'>
                    <div className='row'>
                        <div className='col s5'>
                            <div className='card'>
                                <div className='card-content'>
                                    <form onSubmit={this.addTask}>
                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <input name='title' onChange={this.handleChange} type="text" placeholder='Task Title' value = {this.state.title}/>

                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <textarea name='description' onChange={this.handleChange} placeholder='Task Description' className='materialize-textarea' value={this.state.description}> </textarea>

                                            </div>
                                        </div>
                                        <button type='submit' className='btn light-blue darken-4'>
                                            Send 
                                        </button>
                                    </form>

                                </div>

                            </div>

                        </div>
                        <div className='col s7'>

                        </div>

                    </div>

                </div>
            </div>
        ) 
    }

}

export default App;