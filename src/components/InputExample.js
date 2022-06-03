import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({name:"",surname:""});
 
  const onChangeForm = (e)=> {
      setForm({...form,[e.target.name]: e.target.value})
  }


  return (
    <>
      <h1>Input</h1>
      <div>
        Name
        <input name="name" value={form.name} onChange={onChangeForm} />
        Surname
        <input name="surname" value={form.surname} onChange={onChangeForm} />
      </div>
      
    </>
  );
}

export default InputExample;
