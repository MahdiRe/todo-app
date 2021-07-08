import React from 'react';
import Header from './header';
import './add-todo.css';

import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

class AddTodo extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "",
            active_state: "In Progress",
            end_date: "2021-07-09"
        }
        this.titleChange = this.titleChange.bind(this);
        this.activeStateChange = this.activeStateChange.bind(this);
        this.endDateChange = this.endDateChange.bind(this);
        this.AddTodo = this.AddTodo.bind(this);
    }

    titleChange(e) {
        // console.log(e)
        this.setState({ title: e.target.value });
    }

    activeStateChange(e) {
        // console.log(e)
        this.setState({ active_state: e.target.value });
    }

    endDateChange(e) {
        // console.log(e)
        this.setState({ end_date: e.target.value });
    }

    AddTodo() {
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                <Header header="Add a TODO" />
                <form>
                    <label className="label">Title</label>
                    <TextField style={{ marginTop: "5px" }} size="small" id="outlined-basic" variant="outlined" onChange={this.titleChange} placeholder="ex: Wake up" fullWidth />
                    <br/><br/>
                    <label style={{ marginTop: "100px" }} className="label">End Date</label>
                    <br/>
                    <TextField
                        id="date"
                        type="date"
                        onChange={this.endDateChange}
                        defaultValue={this.state.end_date}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <br/><br/>

                    <FormControl component="fieldset">
                        <RadioGroup aria-label="active_state" name="active_state1" value={this.state.active_state} onChange={this.activeStateChange}>
                            <FormControlLabel value="In Progress" control={<Radio />} label="In Progress" />
                            <FormControlLabel value="Done" control={<Radio />} label="Done" />
                        </RadioGroup>
                    </FormControl>

                    <br/><br/>

                    <Button style={{ marginTop: "10px" }} variant="outlined" color="primary" onClick={this.AddTodo} fullWidth>Add</Button>

                </form>
            </div>
        );
    }
}

export default AddTodo;