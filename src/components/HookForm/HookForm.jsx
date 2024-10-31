import useInputState from "../../Hooks/useInputState"


function HookForm() {

// const [name, handleNameChange] = useInputState('Rubel Hooked');
const emailState = useInputState('wahabmd24@gmail.com')

 const handleSubmit = e =>{
  console.log('form data', emailState.value)
  e.preventDefault()
 }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
       <br />
       <input {...emailState} type="email" name="email" />
       <br />
       <input type="phone" name="phone" />
       <br />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default HookForm
