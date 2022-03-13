import React from "react";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";  
// import Cookies from 'react-cookie';
const url = `http://localhost:6789/mails`;

const Dashboard = () => {
    const [emails, setEmails] = useState([])
    const [text, setText] = useState('')
    const [subject, setSubject] = useState('')
    const [to, setTo]= useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const getEmails = async () => {
        let response = await fetch(url, {credentials: "include"});
        let data = await response.json();
        setEmails(data);
    }

    const handleSendEmail = async () =>{
        const response = await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({subject: subject, to: to,  text: text})
        })

        if (response.status === 200) {
            console.log('OK');
            setSubject('')
            setTo('')
            setText('')
        }
    }
    useEffect(()=> {
        getEmails();
    }, [])

    useEffect(()=>{
        if(!loggedIn){
            getEmails()
        }
    }, [loggedIn])

    return (
        <>
        <h2>Welcome !</h2>
        <table className="table">
            <tbody>
                {emails.map(item => {
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.subject}</td>
                            <td>{item.to}</td>
                            <td>{item.from}</td>
                            <td>{item.text}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className="form">
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Subject</label>
            <input  value={subject}
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1"
                    onChange={(e) => {setSubject(e.target.value)}}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">To: </label>
            <input  value={to}
                    type="email" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name@example.com"
                    onChange={(e)=> setTo(e.target.value)}
                    />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea
                    className="form-control" 
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}></textarea>
        </div>
        <button type="submit" onClick={handleSendEmail} disabled={subject.length < 5 || text.length === 0 ? true : false}>Send Email</button>
        </div>
        </>

        )
    }


export default withRouter(Dashboard)