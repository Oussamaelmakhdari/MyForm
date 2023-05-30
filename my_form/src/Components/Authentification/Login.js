import { useState } from "react";
import { useNavigate , Navigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    // useEffect(()=>{
    //     sessionStorage.clear();
    // },[]);

    // const ProceedLogin = (e) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         ///implentation
    //         // console.log('proceed');
    //         fetch("http://localhost:8000/user/" + username).then((res) => {
    //             return res.json();
    //         }).then((resp) => {
    //             //console.log(resp)
    //             if (Object.keys(resp).length === 0) {
    //                 toast.error('Please Enter valid username');
    //             } else {
    //                 if (resp.password === password) {
    //                     toast.success('Success');
    //                     sessionStorage.setItem('username',username);
    //                     sessionStorage.setItem('userrole',resp.role);
    //                     usenavigate('/')
    //                 }else{
    //                     toast.error('Please Enter valid credentials');
    //                 }
    //             }
    //         }).catch((err) => {
    //             toast.error('Login Failed due to :' + err.message);
    //         });
    //     }
    // }

    // const ProceedLoginusingAPI = (e) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         ///implentation
    //         // console.log('proceed');
    //         let inputobj={"username": username,
    //         "password": password};
    //         fetch("https://localhost:44308/User/Authenticate",{
    //             method:'POST',
    //             headers:{'content-type':'application/json'},
    //             body:JSON.stringify(inputobj)
    //         }).then((res) => {
    //             return res.json();
    //         }).then((resp) => {
    //             console.log(resp)
    //             if (Object.keys(resp).length === 0) {
    //                 toast.error('Login failed, invalid credentials');
    //             }else{
    //                  toast.success('Success');
    //                  sessionStorage.setItem('username',username);
    //                  sessionStorage.setItem('jwttoken',resp.jwtToken);
    //                usenavigate('/')
    //             }
    //             // if (Object.keys(resp).length === 0) {
    //             //     toast.error('Please Enter valid username');
    //             // } else {
    //             //     if (resp.password === password) {
    //             //         toast.success('Success');
    //             //         sessionStorage.setItem('username',username);
    //             //         usenavigate('/')
    //             //     }else{
    //             //         toast.error('Please Enter valid credentials');
    //             //     }
    //             // }
    //         }).catch((err) => {
    //             toast.error('Login Failed due to :' + err.message);
    //         });
    //     }
    // }
    const EnterValidation = ()=>{
        if (username !== 'Admin' || password !== 'Admin' || username ==="" || password==="" ) {
            return false;
        }
    
        else {
            return true;
        }
        
    }

    const navigation = () =>{
        if (EnterValidation()){
            usenavigate('/home');
        }

        else{
          toast.warning("Nom ou mot de passe est inccorect");
        } 
    }
    // const passsWordvalidate = () => {
    //     let result = true;
    //     if (username === '' || username === null) {
    //         result = false;
    //         toast.warning('Please Enter Username');
    //     }
    //     if (password === '' || password === null) {
    //         result = false;
    //         toast.warning('Please Enter Password');
    //     }
    //     return result;
    // }
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form  onSubmit={navigation}className="container">
                {/* onSubmit={ProceedLogin} */}
                    <div className="card">
                        <div className="card-header">
                            <h2 className="qbm">Quality Bean Morocco </h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Nom <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Mot de Passe <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                                
                            </div>
                        </div>
                        <div className="card-footer">
                            <Navigate to="/"/>
                            <button type="submit" className="btn btn-success">Connexion</button> |
                            {/* <Link className="btn btn-success" to={'/register'}>New User</Link> */}
                        </div>
                    </div>
                    <ToastContainer/>
                </form>
            </div>
        </div>
    );
}



export default Login;